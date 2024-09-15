import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center p-5 mb-5'>
               <img src="media/homeHero.png" alt="Hero Image " className='mb-5'/>
               <h1 className='mt-5 text-muted'>Invest in everything</h1> 
               <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
               <button className='btn btn-primary p-2 fs-5 mt-2' style={{width:"20%",margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;

