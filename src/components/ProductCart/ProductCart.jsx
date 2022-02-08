import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Product/Product';
const logo = require('../../app/assets/nike.png')

function ProductCart(props) {
    const store = useSelector((state) => state.productModal.value)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(store.reduce((tot, item) => tot + Number(item.quantity) * item.price, 0))
    }, [store])
    return (
        <div className='card'>
            <div className="card-smallshape"></div>
            <div className="card-top cart-top">
                <img src={logo} alt="img" />
            </div>
            <div className="card-title cart-title">
                <p>Your Cart</p>
                <span className='cart-title-amount'>{'$' + total.toFixed(3)}</span>
            </div>
            <div className="card-body cart-body">
                <div className="card-body-shop-items cart-body">
                    {/*  */}
                    {
                        store.length < 1 ? <p>Your cart is empty.</p> :

                            <div className="cart-items">
                                {
                                    store.map(item => (
                                        < Product key={`Cart-${item.id}`} item={item} />
                                    ))
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}

ProductCart.propTypes = {

};

export default ProductCart;
