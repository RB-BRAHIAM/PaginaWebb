import React, { useState } from 'react'
import Header from '../components/Header'
import carDetails from '../shared/CarDetails.json'
import InputField from './Components/InputField'
import DropdownField from './Components/DropdownField'
import TextAreaField from './Components/TextAreaField'
import { Separator } from '../components/ui/separator'
import features from '../Shared/features.json'
import CheckboxField from './Components/CheckboxField'
import { Checkbox } from "../components/ui/checkbox"
import { Button } from '../components/ui/button'

function AddListing() {

    const [formData, setFormData] = useState({});

    const handleInputChange = (name: string, value: any) => {
        console.log(`Campo: ${name}, Valor: ${value}`);
        setFormData((prevData)=>({
            ...prevData,
            [name]: value
        }))
        console.log(formData);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }

  return (
    <div>
        <Header />
        <div className='px-10 md:px-20 my-10'>
            <h2 className='font-bold text-4xl'>Añadir un automovil</h2>
            <form className='p-10 border rounded-xl mt-10' onSubmit={onSubmit}>
                {/* Car Details */}
                <div className='font-medium text-xl mb-6'>Detalles del automovil</div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {carDetails?.features?.length > 0 ? (
                        carDetails.features.map((item: {fieldType: string, label: string, name: string, required?: boolean}, index) => (
                            <div key={index}>
                                <label className='text-sm'>
                                    {item.label} 
                                    {item.required === true && <span className='text-red-500'>*</span>}
                                </label>
                                {item.fieldType === 'text' || item.fieldType === 'number' ? 
                                    <InputField item={item} handleInputChange={handleInputChange}/> 
                                    :item.fieldType === 'dropdown' 
                                    ? <DropdownField item={item} handleInputChange={handleInputChange}/> 
                                    :item.fieldType === 'textarea' 
                                    ? <TextAreaField item={item} handleInputChange={handleInputChange}/> 
                                    : null}
                            </div>
                        ))
                    ) : (
                        <p>No hay campos configurados</p>
                    )}
                </div>
                <Separator className='my-6'/>
                {/* Features list */}
                <div>
                    <h2 className='font-medium text-xl my-6'>Caracteristicas del automovil</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3'>
                        {features.features.map((item,index)=>(
                            <div key={index} className='flex gap-2 items-center'>
                                <Checkbox 
                                    onCheckedChange={(checked) => handleInputChange(item.name, checked)}
                                /> <h2>{item.label}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Car Images */}

                <div className='mt-10 flex justify-end'>
                    <Button type="submit">Añadir automovil</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddListing