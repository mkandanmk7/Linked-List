// import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
        nameError: "",
        passwordError: "",
    });

    console.log(error);

    const handleChange = (event) => {
        // console.log('event :>> ', event);
        const { name, value } = event.target;
        // console.log("name:", name); 
        if (name === "username") {
            setName(value);
            //length min 5;
            if (value.length < 5) {
                console.log("in length 4");
                setError("name should be greather than 4");
            }
            else setError({})

        }
        else if (name === "password") {
            // length min 8;
            setPassword(value);
            if (value.length < 9) setError("password length should be greater than 8");
            else setError("")
        }



    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const values = {
            name,
            password,
        };
        console.log(values);
        // axios.post("http:data.com/users",values);

    }

    return (
        <form onSubmit={handleSubmit}  >
            <label>Username:</label>
            <input type="text" name='username' value={name} onChange={handleChange} />
            <span>{error.nameError}</span>
            <br />
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={handleChange} />
            <span>{error.passwordError}</span>
            <br />
            <button className='btn btn-success ' type='submit'> submit</button>

        </form>
    )
}

export default Login