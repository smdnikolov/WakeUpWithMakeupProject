import React from 'react'
import { Link } from 'react-router-dom'
import services from './services'
import './styles.css'




const Services = () => {

    const listItems = services.map((service) =>
        <li className='card-li' key={service.title}>
            <div className="flip-card-front-title">{service.title}</div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">

                        <img src={service.image} alt="Avatar" />
                    </div>
                    <div className="flip-card-back circle">
                        <span className="circle-content">
                            {service.description.slice(0, 30)}
                            <p>  <Link className="card-link" to={service.link}>Виж още</Link></p>
                        </span>

                    </div>
                </div>
            </div>
        </li>

    );

    return (
        <div className="container">
            <h1 className="page-header">Услуги</h1>
            <div className='row services'>
                <ul className='card-ul'>{listItems}</ul>
            </div>
        </div>
    )
}

export default Services