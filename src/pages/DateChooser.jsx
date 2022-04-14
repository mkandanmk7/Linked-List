import React, { useEffect, useRef, useState } from 'react'
import InputDate from '../components/InputDate';

const DateChooser = () => {
    const [dateValue, setDateValue] = useState();
    const dateFocus = useRef(null);
    const inputFocus = useRef(null);


    const handleChange = (e) => {
        setDateValue(e.target.value)
        // inputRef.current.focus();
        console.log("hello")
    }
    const getDate = (date) => {
        console.log(new Date(date).toISOString().split("T")[0]);
        return new Date(date).toISOString().split("T")[0];
    }
    const handleKeyDown = (e) => {
        console.log("key down:", e.key);
        if (e.key === "Enter") {
            dateFocus.current.focus();
        }
    }
    const handleClick = () => {
        dateFocus.current.focus();
    }
    useEffect(() => {
        inputFocus.current.focus();
    }, [])


    return (
        <> <button onClick={handleClick}>click</button>
            <InputDate label="input text focus" type="text" onKeyDown={handleKeyDown} ref={inputFocus} placeholder="focus here" />
            <br />
            <InputDate type="date" label="date focus" ref={dateFocus} onChange={handleChange} min={getDate(new Date())} value={dateValue} onClick={handleClick} />
        </>
    )
}

export default DateChooser