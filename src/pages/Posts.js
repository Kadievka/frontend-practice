import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostsList from '../components/PostsList';
import Header from '../components/Header';

const cookies = new Cookies();
const jwt = cookies.get('jwt');
class Posts extends Component {

    render() {
        return (
            <div>
                <Header />
                <PostsList jwt={jwt}/>
            </div>
        );
    }
}

export default Posts;