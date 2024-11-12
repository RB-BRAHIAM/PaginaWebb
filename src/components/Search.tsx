import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import { Separator } from "./ui/separator"
import { CiSearch } from "react-icons/ci";
import Data from '../Shared/Data'

function Search() {
    return (
        <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full flex-col 
        md:flex md:flex-row gap-10 px-5 items-center w-[60%]'>
            <Select>
                <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg border-0 focus:ring-0 focus:ring-offset-0"> 
                    <SelectValue placeholder="Autos" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Nuevos</SelectItem>
                    <SelectItem value="dark">Usados</SelectItem>
                </SelectContent>
            </Select>
            <Separator orientation='vertical' className='hidden md:block' />
            <Select>
                <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg border-0 focus:ring-0 focus:ring-offset-0  ">
                    <SelectValue placeholder="Marca" />
                </SelectTrigger>
                <SelectContent>
                    {Data.CarMakes.map((maker, index) => (
                        <SelectItem value={maker.name}>{maker.name}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Separator orientation='vertical' className='hidden md:block'/>
            <Select>
                <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg border-0 focus:ring-0 focus:ring-offset-0">
                    <SelectValue placeholder="Precio" />
                </SelectTrigger>
                <SelectContent>
                    {Data.Pricing.map((price, index) => (
                        <SelectItem value={price.amount}>{price.amount}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <div>
            <CiSearch className='text-[50px] bg-primary
            rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer' />
            </div>
        </div>
    );
}
export default Search;