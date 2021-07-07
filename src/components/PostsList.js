import React, {useEffect, useState} from 'react';
import axios from 'axios';
import apiConstants from "../constants/apiConstants";
import CircularProgressInCenter from './CircularProgressInCenter';

const getPostsUrl = apiConstants.API_URL + apiConstants.POSTS;
const postsError = new Error('Can not get posts');

function PostsList(props) {

    const jwt = props.jwt;

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPostsRequest = async()=>{
            await axios.get(getPostsUrl, {
                headers: {
                    authorization: `${apiConstants.BEARER} ${jwt}`
                }
            }).then(response=>{
                setPosts(response.data.data);
            }).catch(error=>{
                alert(postsError);
            });
        }
        getPostsRequest();
    }, [jwt]);

    const loadPosts = ()=>{
        if(posts.length){
            return posts.map(post=>(
                <li key={post._id} href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{post.title}</h5>
                    <small className="text-muted">{post._id}</small>
                    </div>
                    <p className="mb-1">{post.message}</p>
                </li>
            ))
        }else{
            return <CircularProgressInCenter />
        }
    }

    return(
        <ul className="list-group">
            <li key="0" href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Here is the title of the post</h5>
                <small>This is the # _id</small>
                </div>
                <p className="mb-1">Then you find the message.</p>
            </li>
            {
                loadPosts()
            }
        </ul>
    )
}

export default PostsList;