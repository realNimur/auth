import React, {useState} from 'react';
import './input.css';

const Input = ({caption, name, id, type, cls}) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <>
            <label htmlFor={id}>{caption}</label>
            <input type={type} id={id} name={name} value={value} onClick={e => handleChange(e)} className={cls}/>
        </>
    );
};

export default Input;