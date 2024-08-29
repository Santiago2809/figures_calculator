
type inputs = {
    ladoA: FormDataEntryValue
    ladoB: FormDataEntryValue
    ladoC: FormDataEntryValue
}

export type returnValue = {
    ok: boolean
    msg?: string
}

export function validateInputs({ ladoA, ladoB, ladoC }: inputs): returnValue {

    //* Retornar No valido porque un lado no existe
    if (!ladoA || !ladoB || !ladoC) {
        return {
            ok: false,
            msg: "All sides must be filled"
        };
    }
    //* Retornar No valido porque un lado es menor a 1
    if (+ladoA.toString() < 1 || +ladoB.toString() < 1 || +ladoC.toString() < 1) {
        return {
            ok: false,
            msg: "Side(s) must be greater than zero"
        };
    }
    //* Retornar No Valido porque los numeros son igual o mas grandes que 100,000
    if (Number(ladoA) >= 100000 || Number(ladoB) >= 100000 || Number(ladoC) >= 100000) {
        return {
            ok: false,
            msg: "Side(s) must be lesser than 100,000"
        }
    }

    
    const n1 = Number(ladoA.toString())
    const n2 = Number(ladoB.toString())
    const n3 = Number(ladoC.toString())

    //* Se agregan los numeros a un array para eliminar el numero mayor y realizar la suma de los dos numeros menores para comprobar
    //* que el triangulo pueda existir
    const numbers = [n1, n2, n3];
    const maxIdx = numbers.indexOf(Math.max(...numbers));
    const maxNumber = numbers.splice(maxIdx, 1)
    const sum = numbers.reduce((acc, n ) => n + acc, 0)
    if(sum <= maxNumber[0]){
        return {
            ok: false,
            msg: "This triangle cant exist because of it existence condition"
        }
    }

    return {
        ok: true,
        msg: "ready"
    };
}

export function calculatePerimeter({ ladoA, ladoB, ladoC }: inputs): number {

    return Number(ladoA.toString()) + Number(ladoB.toString()) + Number(ladoC.toString());

}


export function calculateArea({ ladoA, ladoB, ladoC }: inputs): number{

    //* Se parsean los valores del input a tipo Number
    const n1 = Number(ladoA.toString())
    const n2 = Number(ladoB.toString())
    const n3 = Number(ladoC.toString())
    
    //* En caso de que exista se lleva a cabo la formula para calcular el area del triangulo
    const semiPerimeter = (n1 + n2 + n3) / 2;
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - n1) * (semiPerimeter - n2) * (semiPerimeter - n3))
    return area;
}