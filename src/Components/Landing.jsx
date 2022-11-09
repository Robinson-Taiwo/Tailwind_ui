import React from 'react'
import PageLayout from './PageLayout'
import "./Landing.css"
import forward from "/forward.svg"
import { Link } from 'react-router-dom'
import Home from './Home'


const Landing = () => {
    return (
        <PageLayout>
            <section className='Landing' >

                <h1 className='h1' >TAKE A NEW APPROACH TO </h1>
                <h1 className='h3' >WORK IN THE SPACE OF YOUR IMAGINATION</h1>

                <h5 className='h5'>We offer premium services for affordable services</h5>
                <h5 className='h5'>to make you work in your own customized space</h5>
                <h5 className='h4'>we make it happen...</h5>
                <button className='button' > <Link to="/Home" element={<Home />} >explore now</Link> <span className='boy'><img src={forward} alt="" /></span> </button>

            </section>
        </PageLayout>
    )
}

export default Landing
