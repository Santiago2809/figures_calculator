import { FormEvent, useState } from "react";
import { calculateArea, calculatePerimeter, validateInputs } from "../util/rectangleUtil";
import { Input } from "./Input";

import cs from './Card.module.css';
import { Button } from "./Button";
import { operation } from "../types";


export function Rectangle() {
    const [formError, setFormError] = useState<string>('')
    const [result, setResult] = useState<string>('')
    const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (e.target instanceof HTMLFormElement) {

            const formData = new FormData(e.target);
            const formObj = Object.fromEntries(formData);
            const isValid = validateInputs(formObj);
            if (isValid.ok) {
                if (formError) { setFormError('') }
                if (e.nativeEvent.submitter.id === operation.PERIMETER) {
                    const perimeter = calculatePerimeter(formObj)
                    setResult(`The perimeter for the rectangle is ${perimeter.toString().includes('.') ? perimeter.toFixed(2) : perimeter}`)
                    // console.log(perimeter)
                } else if (e.nativeEvent.submitter.id === operation.AREA) {
                    const area = calculateArea(formObj)
                    setResult(`The area for the rectangle is ${area.toString().includes('.') ? area.toFixed(2) : area}`)
                    // console.log(area)
                }
            } else {
                setResult('')
                setFormError(isValid.msg)
            }
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Rectangle</h2>
            <div className={cs.form_div}>
                <Input name="ladoA" id="ladoA" placeholder="25.6..." labelText="Ingrese la base" />
                <Input name="ladoB" id="ladoB" placeholder="41..." labelText="Ingrese la altura" />
            </div>
            {
                result && (
                    <p style={{ fontSize: '24px' }}>{result}</p>
                )
            }

            <Button id={operation.PERIMETER}>
                Calcular Perimetro
            </Button>
            <Button id={operation.AREA}>
                Calcular Area
            </Button>
            {
                formError && (
                    <p style={{ color: 'red', marginTop: '16px' }}>{formError}</p>
                )
            }
        </form>
    )
}