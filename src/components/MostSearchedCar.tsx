import React from 'react';
import FakeData from '../Shared/FakeData';
import CarItem from './CarItem';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../components/ui/carousel"
  

function MostSearchedCar() {
    console.log(FakeData.carList);
    return (
        <div className='mx-24'>
            <h2 className='font-bold text-3xl text-center mt-16 mb-7'>Autos más buscados</h2>
            <Carousel>
                <CarouselContent>
                {FakeData.carList.map((car,index)=>(
                    <CarouselItem className='basis-1/4'>
                        <CarItem car={{...car, price: parseFloat(car.price)}} key={index} />
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

          
        </div>
    )
}
export default MostSearchedCar