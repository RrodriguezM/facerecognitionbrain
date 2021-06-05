import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className="absolute mt2 tc right-5">
            <img id="imageFace" src={imageUrl} alt="img-to-recognize" width="500px" height='auto' />
            <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
        </div>
    )
}

export default FaceRecognition;
