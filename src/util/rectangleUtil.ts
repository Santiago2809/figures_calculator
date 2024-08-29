import { returnValue } from "../types"

type inputs = {
    ladoA: FormDataEntryValue
    ladoB: FormDataEntryValue
}


export function validateInputs({ ladoA, ladoB }: inputs): returnValue {

    if (!ladoA || !ladoB) {
        return {
            ok: false,
            msg: "All sided must be filled"
        }
    }
    if (Number(ladoA.toString()) < 1 || Number(ladoB.toString()) < 1) {
        return {
            ok: false,
            msg: "Side(s) must be greater or equal to 1"
        }
    }
    if (Number(ladoA.toString()) === Number(ladoB.toString())) {
        return {
            ok: false,
            msg: "Side(s) must be different because is a rectangle"
        }
    }

    if (Number(ladoA) >= 100000 || Number(ladoB) >= 100000) {
        return {
            ok: false,
            msg: "Side(s) must be lesser than 100,000"
        }
    }

    return {
        ok: true,
        msg: "ready"
    }
}

export function calculatePerimeter({ladoA, ladoB}: inputs): number {
    return (2 * Number(ladoA)) +  (2 * Number(ladoB))
}

export function calculateArea({ladoA, ladoB}: inputs): number {
    return Number(ladoA) * Number(ladoB)
}