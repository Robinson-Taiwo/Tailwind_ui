import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contacts from './Contacts'
import Home from './Home'
import Landing from './Landing'
import Services from './Services'

export const AppRoute = () => {
    return (

        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Contacts' element={<Contacts />} />
        </Routes>

    )
}
