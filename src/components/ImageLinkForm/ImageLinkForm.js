import React from 'react'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f5 white'>
                {'This Magic Brain will Detect faces in your Pictures. Search a .JPG image in Internet to try it out '}
            </p>
            <input className='w-50 shadow-3 br3 bb-1' onChange={onInputChange} />
            <button className='f6 grow no-underline br-pill ba bw2 ph2 pv1 mb2 dib mid-gray bg-white mh1 pointer' onClick={onButtonSubmit}>Find</button>
        </div>
    )
}

export default ImageLinkForm
