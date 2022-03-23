import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Post = () => {
    const [post, setPost] = useState({});
    const [allPosts, setAllPosts] = useState([]);
    console.log("allposts:", allPosts);

    const getAllPosts = async () => {
        try {
            const allPost = await axios.get(`http://localhost:4001/posts/allposts`);
            console.log("all posts:", allPost);
            setAllPosts(allPost.data);
        } catch (err) {
            console.log(err.message);
        }
    }
    const length = allPosts.length;

    const lastPost = allPosts[length - 1];
    console.log("lastPost:", lastPost);

    const disablePrevButton = (post) => {
        if (post.prev === null) return true;

        else return false;
    }

    const disableNextButton = (post) => {
        if (post.next === null) return true;
        else return false;

    }

    const getSinglePost = async (id) => {
        try {
            const postDetails = await axios.get(`http://localhost:4001/posts/${id}`);
            console.log('postDetails :>> ', postDetails);
            setPost(postDetails.data);
        } catch (err) {
            console.log(err.message);
        }

    }

    // getSinglePost(lastPost.postId)
    useEffect(() => {
        getSinglePost(lastPost.postId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const deletePost = async (post) => {
        try {
            await axios.delete(`http://localhost:4001/posts/${post.postId}`);
            console.log("post deleted");
        } catch (error) {
            console.log(error.message);
        }


    }

    return (
        <div className='container d-flex align-items-center  justify-content-center bg-light flex-column bg-light' style={{ height: "100vh" }}>
            <div className='p-3 bg-secondary rounded'>
                <h3 className="p-3 mt-3">title: {post.title}</h3>
                <h5 className='text-light p-3'>Description: {post.description}</h5>
                {/* <p>Created At : {" " + new Date(post.createAt)}</p> */}
                <div className="d-flex justify-content-evenly" >


                    <button className='btn btn-success' disabled={disablePrevButton(post)} onClick={() => getPreviousPost(post)}>previous</button>
                    <button className='btn btn-danger' onClick={() => deletePost(post)}>delete</button>

                    <button className='btn btn-success  ' disabled={disableNextButton(post)} onClick={() => getNextPost(post)}>next</button>
                </div>
            </div>

        </div>
    )
}

export default Post