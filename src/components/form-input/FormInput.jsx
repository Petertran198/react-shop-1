import React from 'react';
import './formInput.scss';
const FormInput = (props) => {
    return (
        <div className='group'>
            <input
                className='form-input'
                name={props.name}
                value={props.value}
                type={props.type}
                onChange={props.handleChange}
                required={props.required && 'required'}
            />
            {/* 
                if props.label is true (aka is passed in) we will render a label tag. 
                If the label tag has a prop.value of greater then 0 (aka it is selected and is getting filled)
                we will concat in a class of shrink for ui purposes and alway add class of form-input-label  
            */}
            {props.label && (
                <label
                    className={`${
                        props.value.length ? 'shrink' : ''
                    } form-input-label`}
                >
                    {props.label}
                </label>
            )}
        </div>
    );
};

export default FormInput;
