import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';
import './checkout.styles.scss';

const Checkout = ({cartItems, total}) => {
    const headers = ['product', 'description', 'quantity', 'price', 'remove'];
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                {headers.map(header => (
                    <div className="header-block" key={header}>
                        <span>{header}</span>
                    </div>
                ))}
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <div className="total">
                <span>TOTAL ${total}</span>
            </div>
            <StripeButton price={total} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);