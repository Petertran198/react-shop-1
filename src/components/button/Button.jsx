import React from 'react';
import './button.scss';
const Button = ({ children, isGoogleBtn, ...allOtherProps }) => {
    return (
        <button
            className={` ${isGoogleBtn ? 'google-sign-in' : ' '} custom-button`}
            {...allOtherProps}
        >
            {/* children represents - anything inside/between the component's tags. aka their children 
            The string is the child of button tag because it exists inside the component - or between the button tags.  */}
            {children}
        </button>
    );
};

export default Button;
