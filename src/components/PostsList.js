import React, {useEffect, useState} from 'react';
import axios from 'axios';
import apiConstants from "../constants/apiConstants";
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const jwt = cookies.get('jwt');

const getPostsUrl = apiConstants.API_URL + apiConstants.POSTS;
const postsError = new Error('Can not get posts');

function PostsList() {

    const [posts, setPosts] = useState([]);

    const getPostsRequest = async()=>{
        try {
            const response = await axios.get(getPostsUrl, {
                headers: {
                    authorization: `${apiConstants.BEARER} ${jwt}`
                }
            });
            if(response.data.success && response.data.data){
                setPosts(response.data.data);
            }else{
                throw postsError;
            }
        } catch (error) {
            alert(postsError);
        }
    }

    useEffect(() => {
        getPostsRequest();
    }, [])

    return(
        <div className="list-group">
            <a key="1" href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Here is the title of the post</h5>
                <small>This is the # _id</small>
                </div>
                <p className="mb-1">Then you find the message.</p>
            </a>
            {
                posts.map(post=>(
                    <a key={post._id} href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{post.title}</h5>
                        <small className="text-muted">{post._id}</small>
                        </div>
                        <p className="mb-1">{post.message}</p>
                    </a>
                ))
            }
        </div>
    )
}

export default PostsList;