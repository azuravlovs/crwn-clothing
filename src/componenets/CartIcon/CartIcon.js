import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {toggleCartHidden} from '../../redux/Cart/cartActions'
import {selectCartItemsCount} from '../../redux/Cart/cartSelectors'

import {ReactComponent as ShopingIcon} from '../../assets/shopping-bag.svg'

import './CartIcon.style.scss'

function CartIcon({toggleCartHidden, itemCount}) {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShopingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)