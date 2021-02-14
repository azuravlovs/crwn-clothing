import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default function StripeButton({price}) {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51IKm4uDNnB8t74BnIWvgAx12HEDZDz3Ry6mqDopgeJTxf1YDZWfCPw45wyy6OgiDkowF6PktlLbNbzF7fWZHEq6C00M7qLq7fW'
  
	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}
	
  return (
      <StripeCheckout 
				label='Pay Now'
				name='CRWN Clothing Ltd.'
				billingAddress
				shippingAddress
				description={`Your total is $${price}`}
				amount={priceForStripe}
				panelLabel='Pay Now'
				token={onToken}
				stripeKey={publishableKey}
      />
  )
}
