import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotosPagination from '../components/PhotosPagination';
import Header from '../components/Header';

const cookies = new Cookies();
const jwt = cookies.get('jwt');
class Photos extends Component {

    render() {
        return (
            <div>
                <Header />
                <PhotosPagination jwt={jwt} pageNumber={this.props.match.params.pageNumber}/>
            </div>
        );
    }
}

export default Photos;