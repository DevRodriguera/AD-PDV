import React from 'react'
import '../../styles/Global.css'

const Input = ({ type, text, name, placeholder, value, handleOnChange }) => {
    return (
        <div className='gp-label'>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
                required
            />
        </div>
    )
}

export default Input