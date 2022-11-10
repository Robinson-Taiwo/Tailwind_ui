import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Contacts from './Contacts'
import Home from './Home'
import "./Nav.css"
import Services from './Services'
import Signup from './Signup'
import search from "/search.svg"


const Nav = () => {



    return (
        <section className='Nav'>

            <Link to="/" className="logo"> <i class="fa-regular fa-chess-rook"></i>WorkHub</Link>

            <div className="links">

                <Link className='link' to="/Home" element={<Home />} > Home</Link>
                <Link className='link' to="/About" element={<About />} >About </Link>
                <Link className='link' to="/Services" element={<Services />} >Services </Link>
                <Link className='link' to="/Contacts" element={<Contacts />} > Contacts </Link>
            </div>

            <div className="icon">
                <img src={search} alt="" />
                <button className='buttons' ><Link to="/Signup" element={<Signup />} >Sign up</Link></button>
            </div>

        </section>
    )
}

export default Nav
