import React, {useState} from 'react';
import './input.css';

const Input = ({caption, name, id, type, cls}) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <>
            <label htmlFor={id} style={{marginBottom: '5px', textAlign: 'center'}}>{caption}</label>
            <input type={type} id={id} name={name} value={value} onChange={e => handleChange(e)} className={`input ${cls}`} autoComplete={"on"}/>
        </>
    );
};

export default Input;