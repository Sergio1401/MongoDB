import './Card.css'
import { Link } from "react-router-dom"

function Card({title = "Titulo por defecto", descripcion = "Descripcion por defecto"}) {
    return (
    <div className="Card">
        <Link to={title}>
        <h2 style={{color: "white"}}>{title}</h2>
        <p style={{color: "white"}}>{descripcion}</p>
        </Link>
    </div> 
    )
}

export default Card;