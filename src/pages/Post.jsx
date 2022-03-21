import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Post = () => {
    const [post, setPost] = useState("");



    const getSinglePost = async (id) => {
        // http://localhost:4001/posts
        const postDetails = await axios.get(`http://localhost:4001/posts/${id}`);
        console.log('postDetails :>> ', postDetails);
        setPost(postDetails.data);
    }

    useEffect(() => {
        getSinglePost("62376556853d7d1c06530bf3")
    }, [])

    const getNextPost = () => {
        console.log("id:");
    }

    const getPreviousPost = () => {
        console.log('id')
    }


    return (
        <div className='container d-flex align-items-center  justify-content-center bg-light flex-column bg-light' style={{ height: "100vh" }}>
            <div className='p-3'>
                <h3 className="p-3 mt-3">title: {post.title}</h3>
                <h5 className='text-secondary p-3'>Description: {post.description}</h5>
                <p>Created At : {" " + new Date(post.createAt)}</p>
                <div className="d-flex justify-content-around" >

                    <button className='btn btn-success  ' onClick={getNextPost}>next</button>
                    <button className='btn btn-success ' onClick={getPreviousPost}>previous</button>
                </div>
            </div>

        </div>
    )
}

export default Post