import React from 'react'
import {connect} from 'react-redux'

import {toggleCartHidden} from '../../redux/Cart/cartActions'

import {ReactComponent as ShopingIcon} from '../../assets/shopping-bag.svg'

import './CartIcon.style.scss'

function CartIcon({toggleCartHidden}) {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShopingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)