import React from 'react'
import map from '../../utils/map.jpg'

const Contacts = () => {

    return (
        <div>
            <h1 className='page-header'>Контакти</h1>

            <h3>Телефон: <b>+359879997600</b></h3>
            <hr />
            <h3>Електронна поща: <b>elenayordanova0440@gmail.com</b></h3>
            <hr />
            <h3>Работно време: <b> Всеки ден от 9:00 до 19:00</b></h3>
            <hr />
            <h3>Адрес на салона:</h3>
            <a target='_blank' rel="noopener noreferrer" href='https://goo.gl/maps/vxEXZHnkJwNuQQaF7'>
                <img className='img map' src={map} alt='' />
            </a>
        </div>

    )
}

export default Contacts