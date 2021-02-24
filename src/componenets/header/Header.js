import React from 'react'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {auth} from '../../firebase/firebase'
import CartIcon from '../CartIcon/CartIcon'
import CartDropDown from '../CartDropDown/CartDropDown'
import {ReactComponent as Logo} from '../../assets/crown.svg'

import {selectCartHidden} from '../../redux/Cart/cartSelectors'
import {selectCurrenttUser} from '../../redux/User/userSelector'

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './Header.style'

function Header({currentUser, hidden}) {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop" >
                    SHOP
                </OptionLink>
                <OptionLink to="/shop" >
                    CONTACT
                </OptionLink>
                {
                    currentUser ?
                    <OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null: <CartDropDown />
            }                        
        </HeaderContainer>
    )
}

const mapStateTopProps = createStructuredSelector({
    currentUser: selectCurrenttUser,
    hidden: selectCartHidden
})

export default connect(mapStateTopProps)(Header)