import React, { useEffect, useState } from 'react'
import './styles.scss'

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../utils/gallery', false, /\.(png|jpe?g|svg)$/));

const GalleryList = () => {
    return <div className='row gallery'>
        {images.map((image, index) => {

            if (window.screen.width < window.screen.height) {
                // eslint-disable-next-line
                return <a className="col-sm-4" key={`key-${index}`}>
                    <img src={image} className="img-fluid" alt='' />
                </a>
            } else {
                return <a href={image} data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4" key={`key-${index}`}>
                    <img src={image} className="img-fluid" alt='' />
                </a>
            }

        })}
    </div>
}
const Gallery = () => {

    const [, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    useEffect(() => {
        window.addEventListener('resize', () => setDimensions({ height: window.innerHeight, width: window.innerWidth }))
    })

    return (
        <div>
            <h1 className="page-header">Галерия</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <GalleryList />
                </div>
            </div>
        </div>
    )
}

export default Gallery