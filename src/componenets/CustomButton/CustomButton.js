import React from 'react'

import {CustomButtonContainer} from './CustomButton.style.js'


export default function CustomButton({children, ...props}) {
    return (
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>
    )
}
