import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Post = () => {
    const [post, setPost] = useState({});
    const [getRelativePost, setgetRelativePost] = useState("");
    const [allPosts, setAllPosts] = useState([]);
    console.log("allposts:", allPosts);
    console.log('getRelativePost :>> ', getRelativePost);

    const getAllPosts = async () => {
        try {
            console.log("in all post useeffect");
            const allPost = await axios.get(`http://localhost:4001/posts/allposts`);

            const all_posts = allPost.data;

            const allPostLength = all_posts.length;
            setgetRelativePost(all_posts[allPostLength - 1].postId);
            setAllPosts(all_posts);
        } catch (err) {
            console.log(err.message);
        }
    }
    // const length = allPosts.length;

    // const lastPost = allPosts[length - 1];
    // console.log("lastPost:", lastPost);

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
            console.log("in single post");
            const postDetails = await axios.get(`http://localhost:4001/posts/${id}`);
            console.log('postDetails :>> ', postDetails);


            setPost(postDetails.data);
        } catch (err) {
            console.log(err.message);
        }

    }

    // getSinglePost(lastPost.postId)
    useEffect(() => {

        getSinglePost(getRelativePost);
    }, [getRelativePost]);

    useEffect(() => {

        getAllPosts(getRelativePost);

    }, [])

    const getNextPost = (post) => {
        setgetRelativePost(post.next)
        // getSinglePost(post.next)
    }

    const getPreviousPost = (post) => {
        setgetRelativePost(post.prev);
        // getSinglePost(post.prev);
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