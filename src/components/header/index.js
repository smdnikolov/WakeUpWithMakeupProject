import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../utils/1j+ojFVDOMkX9Wytexe43D6kifCCrhBGkBbNwXs1M3EMoAJtliAvhPds9vk5.png'
import call from '../../utils/call.png'
import viber from '../../utils/viber.png'
import instagram from '../../utils/instagram.png'
import facebook from '../../utils/facebook.png'

const Header = () => {

    return (
        <div>
            <Link className="navbar-brand" to="/">
                <img className="logo" src={logo} width="90%" alt="" />
            </Link>
            <nav>
                <div className="call">
                    <a href="tel:+359879997600">
                        <img src={call} width="30px" />
                    </a>
                </div>
                <div className="viber">
                    <a href="viber://chat?number=+359879997600">
                        <img src={viber} width="30px" />
                    </a>
                </div>
            </nav>
            <nav class="navbar navbar-expand-md  navbar-dark">
                <div>
                    <a className="social" href="https://www.facebook.com/permanent.makeup.elenayordanova">
                        <img src={facebook} width="30px" />
                    </a>
                    <a className="social" href="https://www.instagram.com/wake_up_with_makeup/">
                        <img src={instagram} width="30px" />
                    </a>
                </div>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">

                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Услиги</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Цени</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Галерия</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ЧЗВ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Контакти</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div >
    )
}

export default Header