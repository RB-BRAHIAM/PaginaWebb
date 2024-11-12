import React from 'react'
import { Input } from '../../components/ui/input'

interface InputFieldProps {
  item: {
    fieldType: string;
    label: string;
    name: string;
    required?: boolean;
  };
  handleInputChange: (name: string, value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ item, handleInputChange }) => {
  return (
    <div>
        <Input type={item?.fieldType} 
        name={item?.name} 
        required={item?.required} 
        onChange={(e)=>handleInputChange(item.name, e.target.value)}
        />
    </div>
  )
}

export default InputField