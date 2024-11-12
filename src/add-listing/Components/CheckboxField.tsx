import React from 'react'
import { Checkbox } from "../../components/ui/checkbox"

interface CheckboxFieldProps {
    name: string;
    label: string;
}

function CheckboxField({ name, label }: CheckboxFieldProps) {
    return (
        <Checkbox 
            id={name}
            name={name}
            aria-label={label}
        />
    )
}

export default CheckboxField