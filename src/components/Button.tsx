import cs from './Card.module.css'

type Props = {
    children: React.ReactNode
    id: string
}

export function Button({children, id}: Props) {

    return (
        <button className={cs.button} id={id}>
            {children}
        </button>
    )
}