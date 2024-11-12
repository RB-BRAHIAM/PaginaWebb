import React from 'react';
import Search from './Search';

function Hero() {
    return (
        <div className='flex flex-col items-center p-10 py-20 gap-6 h-[650px] w-full bg-[#929292]'>
            <h2 className='text-lg'>Encuentra autos en venta y alquiler cerca de ti</h2>
            <h2 className='text-[60px] font-bold'>Encuentra el coche de tus sueños</h2>
            <Search />
            <img src="public/bmwPrinc.png" className='mt-10' />
        </div>
    );
}
export default Hero;