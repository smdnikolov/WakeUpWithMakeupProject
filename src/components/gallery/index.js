import React from 'react'
import './styles.scss'
import img1 from '../../utils/Erthea BW1.jpg'
import img2 from '../../utils/Erthea- Brilliant-White-1.jpg'

const Gallery = () => {

    return (
        <div >
            <h1 className="page-header">Галерия</h1>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="row gallery">
                        <a href={img1} data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4">
                            <img src={img2} className="img-fluid" alt='' />
                        </a>
                        <a href="https://unsplash.it/1200/768.jpg?image=252" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4">
                            <img src="https://unsplash.it/600.jpg?image=252" className="img-fluid" alt='' />
                        </a>
                        <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4">
                            <img src="https://unsplash.it/600.jpg?image=253" className="img-fluid" alt='' />
                        </a>
                        <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4">
                            <img src="https://unsplash.it/600.jpg?image=253" className="img-fluid" alt='' />
                        </a>
                        <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4">
                            <img src="https://unsplash.it/600.jpg?image=253" className="img-fluid" alt='' />
                        </a>
                        <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4">
                            <img src="https://unsplash.it/600.jpg?image=253" className="img-fluid" alt='' />
                        </a>
                        <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4">
                            <img src="https://unsplash.it/600.jpg?image=253" className="img-fluid" alt='' />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery