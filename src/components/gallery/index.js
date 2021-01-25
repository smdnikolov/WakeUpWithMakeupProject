import React from 'react'
import Lightbox from 'react-lightbox-component';
import './styles.scss'
import "react-lightbox-component/build/css/index.css";

function importAll(r) {
    return r.keys().map(r);
}
const images = importAll(require.context('../../utils/gallery', false, /\.(png|jpe?g|svg)$/));
const list = []
images.forEach((image) => {
    list.push({ src: image.default, title: 'title', description: 'desc' })
})

const Gallery = () => {
    return (
        <div>
            <h1 className="page-header">Галерия</h1>
            <div className="row justify-content-center container">
                <div className="col-md-12">
                    <Lightbox
                        thumbnailWidth='300px'
                        thumbnailHeight='400px'
                        images={list} />
                </div>
            </div>
        </div>
    )
}

export default Gallery