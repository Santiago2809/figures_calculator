import { returnValue } from "../types"


export function validateInputs(ladoA: FormDataEntryValue): returnValue {

    if (!ladoA) {
        return {
            ok: false,
            msg: "Radius must be provided"
        }
    }
    if (Number(ladoA.toString()) < 1) {
        return {
            ok: false,
            msg: "Radius must be greater or equal to 1"
        }
    }

    if (Number(ladoA) >= 100000 ) {
        return {
            ok: false,
            msg: "Radius must be lesser than 100,000"
        }
    }
    return {
        ok: true,
        msg: "ready"
    }
}

export function calculatePerimeter({ladoA}: {ladoA: FormDataEntryValue}): number {
    console.log(Number(ladoA));
    return 2 * Math.PI * Number(ladoA)
}

export function calculateArea({ladoA}: {ladoA: FormDataEntryValue}): number {
    return Math.PI * Math.pow(Number(ladoA), 2)
}