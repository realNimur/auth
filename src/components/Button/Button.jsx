import React, {useState} from 'react';
import './button.css';

const Button = ({caption,type,isDisabled,cls}) => {
    return (
        <button className={cls} type={type} disabled={isDisabled}>{caption}</button>
    );
};

export default Button;