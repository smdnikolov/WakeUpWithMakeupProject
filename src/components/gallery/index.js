import React, { useEffect, useState } from 'react'
import './styles.scss'

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../../utils/gallery', false, /\.(png|jpe?g|svg)$/));

const GalleryList = () => {
    return <div className='row gallery'>
        {images.map((image, index) => {

            if (window.screen.width < window.screen.height && window.screen.width < 768) {
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
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    })

    return (
        <div>
            <h1 className="page-header">Галерия</h1>
            <div className="row justify-content-center container">
                <div className="col-md-12">
                    <GalleryList />
                </div>
            </div>
        </div>
    )
}

export default Gallery