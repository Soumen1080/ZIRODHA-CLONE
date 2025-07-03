import React from 'react';

function Hero() {
    return (
        <div className='container  p-5'>
            <div classname ="row" className='row text-center'>
<img src = "media/homeHero.png" alt = "Hero Image" className ='mb-5'/>
<h1 className='mt-5'>Invest in everything</h1>
<p>Online platform to invest in stacks , derivatives , mutual founds</p>
<button className='p-2 btn btn-primary' style = {{width:"20% ",margin:"0 auto",}} >Signup Now </button>
            </div>
        </div>      );
}

export default Hero; 