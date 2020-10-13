import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../utils/1j+ojFVDOMkX9Wytexe43D6kifCCrhBGkBbNwXs1M3EMoAJtliAvhPds9vk5.png'



const Header = () => {

    const before = 'https://picsum.photos/id/237/536/354'
    const after = 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'


    return (
        <div>
            <Link className="navbar-brand" to="/">
                <img className="logo" src={logo} width="90%" alt="" />
            </Link>
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Header