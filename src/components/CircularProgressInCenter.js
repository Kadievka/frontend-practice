import React from 'react';
import {CircularProgress} from '@material-ui/core';

function CircularProgressInCenter(){
    return (
        <div style={{
            "position": "absolute",
            "left": "50%",
            "top": "50%",
        }}>
            <CircularProgress style={{
                "width": "80px",
                "height": "80px"
            }}/>
        </div>
    );
}

export default CircularProgressInCenter