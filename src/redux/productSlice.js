import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []
const initialState = {
    value: items,
    total: 0
}
export const ProductSlice = createSlice({
    name: 'productModal',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            state.value = sortItem([
                ...state.value, {
                    ...newItem,
                    quantity: newItem.quantity
                }
            ])
            localStorage.setItem('cartItems', JSON.stringify((state.value)))

        },

        delItem: (state, action) => {
            state.value = state.value.filter(e => e.id !== action.payload)
            localStorage.setItem('cartItems', JSON.stringify((state.value)))

        },
        updateItem: (state, action) => {
            const newItem = action.payload
            const item = state.value.filter(e => e.id === newItem.id)
            if (item.length > 0) {
                state.value = deleteItem(state.value, newItem)
                state.value = sortItem([...state.value, {
                    ...newItem
                }])
            }
        }
    }
})
const deleteItem = (arr, item) => arr.filter(e => e.id !== item.id)
const sortItem = (arr) => arr.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
export const { addItem, delItem, updateItem } = ProductSlice.actions
export default ProductSlice.reducer