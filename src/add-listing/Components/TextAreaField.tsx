import React from 'react'
import { Textarea } from "../../components/ui/textarea"

interface TextAreaFieldProps {
  item: {
    name: string;
    required?: boolean;
  };
  handleInputChange: (name: string, value: any) => void;
}

function TextAreaField({item, handleInputChange}: TextAreaFieldProps) {
  return (
    <div>
      <Textarea onChange={(e)=>handleInputChange(item.name, e.target.value)}
        required={item.required}
        />
    </div>
  )
}

export default TextAreaField