import { NavLink } from "react-router-dom"
import LabeledIcon from "./LabeledIcon"
import {faHome} from "@fortawesome/free-solid-svg-icons"
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons"
import { faDollarSign } from "@fortawesome/free-solid-svg-icons"
import { faComments } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (
        <div className="bg-blue-600 order-last flex justify-around md:h-screen md:flex-col md:order-first md:py-0 md:px-3">
            
            <NavLink activeClassName="bg-blue-800 rounded-md" to="/">
                <LabeledIcon                    
                    component={faHome}
                    text="Inicio" />
            </NavLink>
            <NavLink activeClassName="bg-blue-800 rounded-md" to="/a">
                <LabeledIcon
                    component={faMotorcycle}
                    text="Servicios" />
            </NavLink>
            <NavLink activeClassName="bg-blue-800 rounded-md" to="/b">
                <LabeledIcon
                    component={faDollarSign}
                    text="Estadísticas" />
            </NavLink>
            <NavLink activeClassName="bg-blue-800 rounded-md" to="/c">
                <LabeledIcon
                    component={faComments}
                    text="Mensajes" />
            </NavLink>
        </div>
    )
}

export default Navbar