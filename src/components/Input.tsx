import cs from './Card.module.css'

type Props = {
    id: string
    placeholder: string
    labelText: string
    name: string
}

export function Input({id, name, placeholder, labelText}: Props) {
    return (
        <div className={cs.input_div}>
            <label htmlFor={id} className={cs.label}>{labelText}</label>
            <input name={name} className={cs.input} id={id} type="number" step='any' placeholder={placeholder}/>
        </div>
    )
}