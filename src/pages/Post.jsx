import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Post = () => {
    const [post, setPost] = useState({});
    const [allPosts, setAllPosts] = useState([]);

    const getAllPosts = async () => {
        try {
            const allPost = await axios.get(`http://localhost:4001/posts/allposts`);
            setAllPosts(allPost);
        } catch (err) {
            console.log(err.message);
        }
    }
    const length = allPosts.length;

    const lastPost = allPosts[length - 1];

    const disablePrevButton = (post) => {
        if (post.prev === null) return true;

        else return false;
    }

    const disableNextButton = (post) => {
        if (post.next === null) return true;
        else return false;

    }

    const getSinglePost = async (id) => {
        // http://localhost:4001/posts
        const postDetails = await axios.get(`http://localhost:4001/posts/${id}`);
        console.log('postDetails :>> ', postDetails);
        setPost(postDetails.data);
    }


    useEffect(() => {
        getSinglePost(lastPost.postId);
    }, []);

    useEffect(() => {
        getAllPosts();

    }, [])

    const getNextPost = (post) => {
        getSinglePost(post.next)
    }

    const getPreviousPost = (post) => {
        getSinglePost(post.prev);
    }



    return (
        <div className='container d-flex align-items-center  justify-content-center bg-light flex-column bg-light' style={{ height: "100vh" }}>
            <div className='p-3'>
                <h3 className="p-3 mt-3">title: {post.title}</h3>
                <h5 className='text-secondary p-3'>Description: {post.description}</h5>
                {/* <p>Created At : {" " + new Date(post.createAt)}</p> */}
                <div className="d-flex justify-content-around" >

                    <button className='btn btn-success' disabled={disablePrevButton(post)} onClick={() => getPreviousPost(post)}>previous</button>
                    <button className='btn btn-success  ' disabled={disableNextButton(post)} onClick={() => getNextPost(post)}>next</button>
                </div>
            </div>

        </div>
    )
}

export default Post