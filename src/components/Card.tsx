import { useState } from 'react'
import cs from './Card.module.css'
import { Triangle } from './Triangle'
import { Rectangle } from './Rectangle';
import { Circle } from './Circle';

enum figures {
    triangle = 'triangle',
    rectangle = 'rectangle',
    circle = 'circle',
}

export function Card() {

    const [figure, setFigure] = useState<figures>(figures.triangle)

    let FigureComponent = Triangle;
    if (figure === figures.rectangle) {
        FigureComponent = Rectangle
    } else if (figure === figures.circle) {
        FigureComponent = Circle
    } else {
        FigureComponent = Triangle;
    }

    return (
        <section className={cs.card}>
            <h1>Calculadora area y perimetro</h1>
            <div className={cs.btnDiv}>
                <button className={cs.button} onClick={() => setFigure(figures.triangle)}>Triangle</button>
                <button className={cs.button} onClick={() => setFigure(figures.rectangle)}>Rectangle</button>
                <button className={cs.button} onClick={() => setFigure(figures.circle)}>Circle</button>
            </div>

            <FigureComponent />
        </section>
    )
}