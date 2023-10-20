import React from 'react'
import { Route, Navigate, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import SearchList from '../pages/SearchResultList';
import ThankYou from '../pages/ThankYou';
import About from '../pages/About';


const Routers = () => {
    return (
        <Routes>

            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/tours' element={<Tours />} />
            <Route path='/about' element={<About />} />
            <Route path='/tours/:id' element={<TourDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/thankyou' element={<ThankYou />} />
            <Route path='/tours/search' element={<SearchList />} />


        </Routes>
    )
}

export default Routers;