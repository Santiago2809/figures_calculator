import { FormEvent, useState } from "react";

import { Input } from "./Input";
import { Button } from './Button';
import { calculateArea, calculatePerimeter, validateInputs } from "../util/triangleUtil";

import cs from "./Card.module.css"

export function Triangle() {

    const [formError, setFormError] = useState<string>('')
    const [result, setResult] = useState<string>('')
    const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        
        if(e.target instanceof HTMLFormElement ) {

            const formData = new FormData(e.target);
            const formObj = Object.fromEntries(formData);
            const isValid = validateInputs(formObj);
            if(isValid.ok){
                if(formError){ setFormError('')}
                if(e.nativeEvent.submitter.id === 'perimeter'){
                    const perimeter = calculatePerimeter(formObj)
                    setResult(`The perimeter for the triangle is ${perimeter.toString().includes('.') ? perimeter.toFixed(2) : perimeter}`)
                    // console.log(perimeter)
                } else {
                    const area = calculateArea(formObj)
                    setResult(`The area for the triangle is ${area.toFixed(2)}`)
                    // console.log(area)
                }
            } else {
                setResult('')
                if(isValid.msg instanceof string){
                    setFormError(isValid.msg)

                }
            }
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Triangle</h2>
            <div className={cs.form_div}>
                <Input name="ladoA" id="ladoA" placeholder="25.6..." labelText="Ingrese el lado A" />
                <Input name="ladoB" id="ladoB" placeholder="41..." labelText="Ingrese el lado B" />
                <Input name="ladoC" id="ladoC" placeholder="15..." labelText="Ingrese el lado C" />
            </div>
            { 
                result && (
                    <p style={{fontSize: '24px'}}>{result}</p>
                )
            }
            
            <Button id='perimeter'>
                Calcular Perimetro
            </Button>
            <Button id="area">
                Calcular Area
            </Button>
            {
                formError && (
                    <p style={{color: 'red', marginTop: '16px'}}>{formError}</p>
                )
            }
        </form>
    )
}