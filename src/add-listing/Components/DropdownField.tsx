import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../components/ui/select"
  
interface DropdownFieldProps {
  item: {
    fieldType: string;
    label: string;
    required?: boolean;
    options?: string[];
    name: string;
    };
  handleInputChange: (name: string, value: any) => void;
}
    
const DropdownField: React.FC<DropdownFieldProps> = ({ item, handleInputChange }) => {
  return (
    <div>
        <Select onValueChange={(value)=>handleInputChange(item.name,value)}
            required={item.required}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={item.label} />
            </SelectTrigger>
            <SelectContent>
                {item?.options?.map((option, index) => (
                    <SelectItem key={index} value={option}>{option}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    </div>
  )
}

export default DropdownField