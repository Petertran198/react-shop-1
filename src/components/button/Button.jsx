import React from 'react';
import './button.scss';
const Button = ({ children, ...allOtherProps }) => {
    console.log('children: ', children);
    console.log('otherProps: ', allOtherProps);

    return (
        <button className='custom-button' {...allOtherProps}>
            {/* children represents - anything inside/between the component's tags. aka their children 
            The string is the child of button tag because it exists inside the component - or between the button tags.  */}
            {children}
        </button>
    );
};

export default Button;
