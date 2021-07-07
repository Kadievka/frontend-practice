import React, {useEffect, useState} from 'react';
import axios from 'axios';
import apiConstants from "../constants/apiConstants";
import 'bootstrap/dist/css/bootstrap.css';
import PhotoCard from './PhotoCard';
import Pagination from '@material-ui/lab/Pagination';
import '../css/Photos.css';
import CircularProgressInCenter from './CircularProgressInCenter';

const photosError = new Error('Can not get photos');

function PhotosPagination(props) {

    const jwt = props.jwt;

    const pageNumber = props.pageNumber ? props.pageNumber : 1;

    const getPhotosUrl = `${apiConstants.API_URL}${apiConstants.PHOTOS}?page=${pageNumber}`;

    const [photos, setPhotos] = useState({
        docs: [],
        total: 0,
        pages: 0,
        limit: 10,
        page: pageNumber
    });

    useEffect(() => {
        const getPhotosRequest = async()=>{
            await axios.get(getPhotosUrl, {
                headers: {
                    authorization: `${apiConstants.BEARER} ${jwt}`
                },
            }).then(response=>{
                setPhotos(response.data.data);
            }).catch((error)=>{
                alert(photosError);
            });
        }
        getPhotosRequest();
    }, [getPhotosUrl, jwt]);

    const handleClick = (currentPage)=>{
        window.location.href=`/photos/page/${currentPage}`;
    }

    const loadPhotos = ()=>{
        if(photos.docs.length){
            return photos.docs.map(photo=>(
                <PhotoCard photo={photo} key={photo._id} />
            ))
        }else{
            return <CircularProgressInCenter />
        }
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
                count= {photos.pages}
                page= {photos.page}
                onChange={(e, currentPage) => handleClick(currentPage)}
                size="large"
            />
            <div className="photos-page">{loadPhotos()}</div>
        </div>
    )

}

export default PhotosPagination;