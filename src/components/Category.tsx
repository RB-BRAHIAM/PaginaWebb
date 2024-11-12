import React from 'react';
import Data from '../Shared/Data';

function Category() {
    return (
        <div className='mt-40 flex justify-center items-center flex-col'>
            <h2 className='font-bold text-3xl text-center mb-6'>Nuestras categorías</h2>
            <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-3 gap-6 px-20 w-full max-w-7xl'>
                {Data.Category.map((category, index) => (
                    <div className='border rounded-xl p-3 
                    items-center flex flex-col hover:shadow-md cursor-pointer'>
                        <img src={category.icon} width={35} height={35}/>
                        <h2 className='mt-2'>{category.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Category;