import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { delItem, updateItem } from '../../redux/productSlice';

function Product(props) {
    const { item, amountChange } = props
    const logoRemove = require('../../app/assets/trash.png')
    const [amount, setAmount] = useState(1)
    const dispatch = useDispatch()
    const updateAmount = (type) => {
        if (type === 'minus') {
            if (amount - 1 < 1) {
                setAmount(0)
            } else {
                setAmount(amount - 1)
            }
        } else if (type === 'plus') {
            setAmount(amount + 1)
        }
    }
    useEffect(() => {
        if (amount < 1) {
            dispatch(delItem(item.id))
        }
        dispatch(updateItem({ ...item, quantity: amount }))
    }, [amount])
    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img src={item.image} alt='' />
            </div>
            <div className="cart-item-right">
                <div className="cart-item-right-name">
                    {item.name}
                </div>
                <div className="cart-item-right-price">
                    {item.price}
                </div>
                <div className="cart-item-right-actions">
                    <div className="cart-item-right-actions-count">
                        <div className="cart-item-right-actions-count-button" onClick={() => updateAmount('minus')}>
                            -
                        </div>
                        <div className="cart-item-right-actions-count-number">
                            {amount}
                        </div>
                        <div className="cart-item-right-actions-count-button" onClick={() => updateAmount('plus')}>
                            +
                        </div>
                    </div>
                    <div className="cart-item-right-actions-remove" onClick={() => setAmount(0)}>
                        <img src={logoRemove} />
                    </div>
                </div>

            </div>
        </div>
    );
}

Product.propTypes = {
};

export default Product;
