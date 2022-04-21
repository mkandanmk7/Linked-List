import React, { useEffect, useRef, useState } from 'react'
import InputDate from '../components/InputDate';
import { getDate } from '../helpers/helpers';

const DateChooser = () => {
    const [dateValue, setDateValue] = useState();
    const dateFocus = useRef(null);
    const inputFocus = useRef(null);
    console.log("date value", dateValue);

    const handleChange = (e) => {
        console.log("Date value:", e.target.value);

        const value = e.target.value === "" ? getDate(new Date()) : e.target.value;

        setDateValue(value)


        // inputRef.current.focus();
    }
    // const getDate = (date) => {
    //     // console.log(new Date(date).toISOString().split("T")[0]);
    //     return new Date(date).toISOString().split("T")[0]; // return date
    // }
    const handleKeyDown = (e) => {
        console.log("key down:", e.key);
        if (e.key === "Enter") {
            dateFocus.current.focus();
        }
    }
    const handleClick = () => {
        console.log("dateFocus:", dateFocus);
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