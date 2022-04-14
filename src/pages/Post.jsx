import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Post = () => {
    const [post, setPost] = useState({});
    const [currentPostIndex, setcurrentPostIndex] = useState(null);
    const [getRelativePost, setgetRelativePost] = useState("");
    const [allPosts, setAllPosts] = useState([]);
    // console.log("allposts:", allPosts);
    console.log('getRelativePost :>> ', getRelativePost);

    const getAllPosts = async () => {
        try {
            console.log("in all post useeffect");
            const allPost = await axios.get(`http://localhost:4001/posts/allposts`);
            console.log("all posts:", allPost);
            // const all_posts = allPost.data;

            // const allPostLength = all_posts.length;


            // let lastPost = all_posts[allPostLength - 1];
            // // setgetRelativePost(all_posts[allPostLength - 1].postId);
            // setAllPosts(all_posts);
            // let recentPost;
            // const index = allPostLength - 1;
            // all_posts.map(item => {
            //     if (item.date > lastPost.date) {
            //         console.log("recent:", item);
            //         recentPost = item;
            //         setPost(recentPost);
            //     }

            //     return setPost(lastPost);
            // })
            // console.log("current index: ", index);
            // setcurrentPostIndex(index)
        } catch (err) {
            console.log(err.message);
        }
    }


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

    // // getSinglePost(lastPost.postId)
    // useEffect(() => {

    //     getSinglePost(getRelativePost);
    // }, [getRelativePost]);

    useEffect(() => {

        getAllPosts();

        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <div className="d-flex justify-content-evenly m-2" >


                    <button className='btn btn-success mx-2' disabled={disablePrevButton(post)} onClick={() => getPreviousPost(post)}>previous</button>
                    <button className='btn btn-danger  mx-2' onClick={() => deletePost(post)}>delete</button>
                    <Link to={`/createpost/${currentPostIndex}`}>

                        <button className='btn btn-warning mx-2' >Add Post</button>
                    </Link>
                    <button className='btn btn-success mx-2  ' disabled={disableNextButton(post)} onClick={() => getNextPost(post)}>next</button>
                </div>
            </div>

        </div>
    )
}

export default Post