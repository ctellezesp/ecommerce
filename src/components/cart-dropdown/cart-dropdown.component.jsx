import React from 'react';
import {connect} from 'react-redux';
import CustomBotton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    const navigateCheckout = () => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
    }
    
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    : 
                    <span className="empty-cart">
                        Your Cart is Empty
                    </span>
                }
            </div>
            <CustomBotton onClick={() => navigateCheckout()}>GO TO CHECKOUT</CustomBotton>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));