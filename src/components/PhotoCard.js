import React from "react";
import '../css/Photos.css';

function PhotoCard(props) {
    const { id, title, url } = props.photo;

    return (
    <div className="photos-card-container">
        <img src={url} alt={title} className="photo-image"/>
        <div className="photo-information">
            <span className="photo-title">{title}</span>
            <span className="photo-id">{id}</span>
        </div>
    </div>
    );
}

export default PhotoCard;
