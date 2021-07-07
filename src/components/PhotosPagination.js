import React, {useEffect, useState} from 'react';
import axios from 'axios';
import apiConstants from "../constants/apiConstants";
import 'bootstrap/dist/css/bootstrap.css';
import PhotoCard from './PhotoCard';
import Pagination from '@material-ui/lab/Pagination';
import '../css/Photos.css';

const photosError = new Error('Can not get photos');

function PhotosPagination(props) {

    const jwt = props.jwt;

    const pageNumber = props.pageNumber ? props.pageNumber : 1;

    const getPhotosUrl = `${apiConstants.API_URL}${apiConstants.PHOTOS}?page=${pageNumber}`;

    const [data, setPhotos] = useState({
        docs: [],
        total: 0,
        pages: 0,
        limit: 10,
        page: pageNumber
    });

    useEffect(() => {
        const getPhotosRequest = async()=>{
            try {
                const response = await axios.get(getPhotosUrl, {
                    headers: {
                        authorization: `${apiConstants.BEARER} ${jwt}`
                    },
                });
                if(response.data.success && response.data.data){
                    setPhotos(response.data.data);
                }else{
                    throw photosError;
                }
            } catch (error) {
                alert(photosError);
            }
        }
        getPhotosRequest();
    }, [getPhotosUrl, jwt]);

    const handleClick = (currentPage)=>{
        window.location.href=`/photos/page/${currentPage}`;
    }

    return(
        <div className="row d-flex justify-content-center">
            <Pagination 
                style={
                    {
                        width: "100%",
                        marginTop: "2em",
                        marginBottom: "2em",
                        display: "flex",
                        justifyContent: "center",
                    }
                }
                count= {data.pages}
                page= {data.page}
                onChange={(e, currentPage) => handleClick(currentPage)}
                size="large"
            />
            <div className="photos-page">
                {
                    data.docs.map(photo=>(
                        <PhotoCard photo={photo} key={photo._id} />
                    ))
                }
            </div>
        </div>
    )

}

export default PhotosPagination;