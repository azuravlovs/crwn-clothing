import React from 'react'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {auth} from '../../firebase/firebase'
import CartIcon from '../CartIcon/CartIcon'
import CartDropDown from '../CartDropDown/CartDropDown'

import {ReactComponent as Logo} from '../../assets/crown.svg'

import './Header.style.scss'

function Header({currentUser, hidden}) {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link className="option" to="/shop" >
                    SHOP
                </Link>
                <Link className="option" to="/shop" >
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to='/signin'>SIGN IN</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null: <CartDropDown />
            }                        
        </div>
    )
}

const mapStateTopProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateTopProps)(Header)