import React from 'react'

import CustomButton from '../CustomButton/CustomButton'

import './CartDropDown.style.scss'

export default function CartDropDown() {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}
