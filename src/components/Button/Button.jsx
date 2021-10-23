import React from 'react';
import './button.css';

const Button = ({caption,type,isDisabled,cls}) => {
    return (
        <button className={`button ${cls}`} type={type} disabled={isDisabled}>{caption}</button>
    );
};

export default Button;