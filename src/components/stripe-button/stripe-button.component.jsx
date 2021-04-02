import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceStripe = price * 100;
    const pk = 'pk_test_51IBsReJXli1vpMxl6r6lNyLOjEptn6zG4DoMBcw3xrXS9EM8FtuCzOpxuz8T6jI0QmtTv5Gq577p3nQ4i24tmbbZ00mgpu8tVw';

    const onToken = (token) => {
        console.log(token);
        alert("Payment successful")
    }

    return(
        <StripeCheckout 
            currency="USD"
            label="Pay Now"
            name="E-Commerce"
            billingAddress
            shippingAddress
            image="https://www.flaticon.com/svg/vstatic/svg/3684/3684620.svg?token=exp=1617392612~hmac=043a7a28fd597a6b6c66466202b520a4"
            description={`Your total is $${price}`}
            amount={priceStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={pk}
        />
    );
}

export default StripeButton;