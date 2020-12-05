import React from 'react'
import map from '../../utils/map.jpg'

const Contacts = () => {

    return (
        <div>
            <h1 className='page-header'>Контакти</h1>

            <h3>Телефон: </h3>
            <br /><span>+359879997600</span>
            <hr />
            <h3>Електронна поща: </h3>
            <br /> <span>elenayordanova0440@gmail.com</span>
            <hr />
            <h3>Работно време: </h3>
            <br /><span> Всеки ден от 9:00 до 19:00</span>
            <hr />
            <h3>Адрес на салона: </h3>
            <br />
            <a target='_blank' rel="noopener noreferrer" href='https://goo.gl/maps/vxEXZHnkJwNuQQaF7'>
                <img className='map' src={map} alt='' />
            </a>
        </div >

    )
}

export default Contacts