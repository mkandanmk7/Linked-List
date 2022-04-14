import React from 'react'

const InputDate = ({ type, label, onChange, onKeyDown, placeholder, min = null, onClick }, ref) => {
    return (
        <>
            <label>{label}</label>
            <input type={type} onChange={onChange} ref={ref} onKeyDown={onKeyDown} min={min} placeholder={placeholder} />
            <button onClick={onClick}>click Me</button>
        </>

    )
}
const forwardRef = React.forwardRef(InputDate);
export default forwardRef