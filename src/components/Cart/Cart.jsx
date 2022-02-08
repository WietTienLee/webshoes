import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/productSlice';
const logo = require('../../app/assets/nike.png')
const products = require('../../app/data/shoes.json')
function Cart(props) {
    const data = products['shoes']
    const existItems = useSelector((state) => state.productModal.value)
    const dispatch = useDispatch()
    const AddToCart = (item) => {
        dispatch(addItem({
            ...item,
            quantity: 1
        }))
    }
    return (

        <div className='card'>
            <div className="card-smallshape"></div>
            <div className="card-top">
                <img src={logo} alt="img" />
            </div>
            <div className="card-title">
                Our Products
            </div>
            <div className="card-body">
                <div className="card-body-shop-items">
                    {
                        data.map((item) => (
                            <div key={item.id} className="shop-item">
                                <div className="shop-item-image" style={{ "backgroundColor": item.color }}>
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="shop-item-name">
                                    {item.name}
                                </div>
                                <div className="shop-item-description">
                                    {item.description}
                                </div>
                                <div className="shop-item-bottom">
                                    <div className="shop-item-price">
                                        {`$${item.price}`}
                                    </div>
                                    {
                                        existItems.filter(e => e.id === item.id).length !== 0 ?
                                            <div className="shop-item-button inactive">
                                                <div className="shop-item-button-cover">
                                                    <div className="shop-item-button-cover-check-icon">
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div className="shop-item-button" onClick={() => AddToCart(item)}><p>ADD TO CART</p>
                                            </div>
                                    }

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    addToCart: PropTypes.func,
};

export default Cart;
