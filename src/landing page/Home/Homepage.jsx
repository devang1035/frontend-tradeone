import React from 'react';
import Hero from './Hero';
import Award from './Awards';
import Education from './Education';
import Stats from './Stats';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


function Homepage() {
    return ( 
        <>
      
        <Hero />
        <Award />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
      
        
        </>
     );
}

export default Homepage;