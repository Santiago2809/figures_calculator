import { operation } from "../types";
import { calculateArea, calculatePerimeter, validateInputs } from "../util/circleUtil";
import { Button } from "./Button";
import { Input } from "./Input";

import cs from './Card.module.css'
import { FormEvent, useState } from "react";

export function Circle() {
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
                    setResult(`The circumference of the circle is ${perimeter.toString().includes('.') ? perimeter.toFixed(2) : perimeter}`)
                    // console.log(perimeter)
                } else if (e.nativeEvent.submitter.id === operation.AREA) {
                    const area = calculateArea(formObj)
                    setResult(`The area of the circle is ${area.toString().includes('.') ? area.toFixed(2) : area}`)
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
            <h2>Circle</h2>
            <div className={cs.form_div}>
                <Input name="ladoA" id="ladoA" placeholder="25.6..." labelText="Ingrese el radio del circulo" />
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