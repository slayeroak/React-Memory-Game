import React from "react";
import images from "../images.json"

function Main(props) {
    return (
        <div className="container">
            <div className="row mx-auto">
                {images.map(image => 
                <img 
                    className="click-item shake" 
                    onClick={props.handleimageclick} 
                    key={image.id} 
                    src={process.env.PUBLIC_URL + '/images/' + image.fileName} 
                    alt="Slayeroak Character"
                    id={image.id}
                />)}
            </div>
        </div>
    );
}


export default Main;