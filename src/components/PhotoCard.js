import React from "react";

function PhotoCard(props) {
    const { _id, name, path, type, description } = props.photo;

    return (
    <div className="col-sm-12 col-md-8">
        <div className="border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
        <div className="h-100 position-relative border-gray border-right px-2 bg-white rounded-left">
            <img src={path} alt={description} />
        </div>
        <div className="px-3">
            <span className="country-name text-dark d-block font-weight-bold">{name}.{type}</span>
            <span className="country-region text-secondary text-uppercase">{_id}</span>
        </div>
        </div>
    </div>
    );
}

export default PhotoCard;
