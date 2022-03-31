import React, { useState } from 'react';
import axios from "axios"
import { useParams } from 'react-router-dom';

const CreatePost = () => {
    const [title, SetTitle] = useState("");
    const [description, setDescription] = useState("");
    const params = useParams();
    console.log("params:", params);
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "title") SetTitle(value);
        else if (name === "description") setDescription(value);
    }




    const handleSubmit = async (e) => {
        e.preventDefault();
        let postData = {
            title,
            description
        }
        console.log("in submit");
        console.log('postData :>> ', postData);
        if (params.position) {

            await axios.post(`http://localhost:4001/posts/insert/${params.position}`, postData);
        }
        else await axios.post("http://localhost:4001/posts", postData);
        SetTitle("");
        setDescription("");
    }


    return (
        <div className='container d-flex align-items-center  justify-content-center bg-light flex-column' style={{ height: "100vh" }}>
            <div className='text-left  d-block '>
                <h1>Create Post</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group text-left m-3">
                    <label htmlFor="exampleInputEmail1">Post Title</label>
                    <input type="text" name="title" value={title} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter post Title" onChange={handleChange} />

                </div>
                <div className="form-group text-left m-3">
                    <label htmlFor="exampleInputEmail1">Post Title</label>
                    <textarea className="form-control" name="description" value={description} id="exampleFormControlTextarea1" onChange={handleChange} rows="3"></textarea>

                </div>

                <button type="submit" className="btn btn-primary ">Submit</button>
            </form>

        </div>
    )
}

export default CreatePost;