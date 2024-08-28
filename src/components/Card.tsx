import cs from './Card.module.css'
import { Triangle } from './Triangle'


export function Card() {
    
    return (
        <section className={cs.card}>
            <h1>Calculadora area y perimetro</h1>
            <Triangle />
        </section>
    )
}