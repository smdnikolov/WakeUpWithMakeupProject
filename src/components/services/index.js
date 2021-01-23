import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'



const Services = () => {



    return (
        <div className="container">
            <h1 className="page-header">Услуги</h1>
            <div className='row services'>

                <ul className='card-ul'>

                <li className='card-li'>
                        <div className="flip-card-front-title">Some Title</div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">

                                    <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1251,w_2222,x_333,y_0/f_auto,q_auto,w_1100/v1554930566/shape/mentalfloss/58424-istock-636100670-eyebrows.jpg" alt="Avatar" />
                                </div>
                                <div className="flip-card-back circle">
                                    <span className="circle-content">
                                        This should wrap cleanly inside the circle, with no JS (other than a polyfill for non-Webkit browsers) needed. Woo!
                                        <p>  <Link className="card-link" to="/услуги/ид">Виж още</Link></p>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='card-li'>
                        <div className="flip-card-front-title">Some Title</div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">

                                    <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1251,w_2222,x_333,y_0/f_auto,q_auto,w_1100/v1554930566/shape/mentalfloss/58424-istock-636100670-eyebrows.jpg" alt="Avatar" />
                                </div>
                                <div className="flip-card-back circle">
                                    <span className="circle-content">
                                        This should wrap cleanly inside the circle, with no JS (other than a polyfill for non-Webkit browsers) needed. Woo!
                                        <p>  <Link className="card-link" to="/услуги/ид">Виж още</Link></p>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='card-li'>
                        <div className="flip-card-front-title">Some Title</div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">

                                    <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1251,w_2222,x_333,y_0/f_auto,q_auto,w_1100/v1554930566/shape/mentalfloss/58424-istock-636100670-eyebrows.jpg" alt="Avatar" />
                                </div>
                                <div className="flip-card-back circle">
                                    <span className="circle-content">
                                        This should wrap cleanly inside the circle, with no JS (other than a polyfill for non-Webkit browsers) needed. Woo!
                                        <p>  <Link className="card-link" to="/услуги/ид">Виж още</Link></p>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </li>
                    <li className='card-li'>
                        <div className="flip-card-front-title">Some Title</div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">

                                    <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1251,w_2222,x_333,y_0/f_auto,q_auto,w_1100/v1554930566/shape/mentalfloss/58424-istock-636100670-eyebrows.jpg" alt="Avatar" />
                                </div>
                                <div className="flip-card-back circle">
                                    <span className="circle-content">
                                        This should wrap cleanly inside the circle, with no JS (other than a polyfill for non-Webkit browsers) needed. Woo!
                                        <p>  <Link className="card-link" to="/услуги/ид">Виж още</Link></p>
                                    </span>

                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Services