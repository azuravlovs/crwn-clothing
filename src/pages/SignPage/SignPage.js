import React from 'react'
import SignIn from '../../componenets/SignIn/SignIn'
import SignUp from '../../componenets/SignUp/SignUp'

import './SignPage.style.scss'

export default function SignPage() {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}
