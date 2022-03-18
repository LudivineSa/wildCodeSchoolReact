import { NavLink } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import {useRef} from "react"
import "../../Styles/Components/header.css"
function Header() {
    
    const navigate = useNavigate();
    const inputSearch = useRef<HTMLInputElement>()
    const select = useRef<HTMLSelectElement>()
    
    const redirectedResearch = (e) => {
        e.preventDefault();
        navigate("/searchedwilder/" + inputSearch.current.value + "/" + select.current.value)
    }
    return(
        <div className="header">
            <nav className="container flex-header">
                <ul className="flex-nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/wilders">Wilder</NavLink>
                    <NavLink to="/addwilder">Ajouter un wilder</NavLink>
                </ul>
                <div>
                    <input className="input-search" type="text" placeholder="Recherche" ref={inputSearch} />
                    <select name="filter" id="" ref={select}>
                        <option value="name">Par nom</option>
                        <option value="city">Par ville</option>
                    </select>
                    <button className="button-search" onClick={redirectedResearch}>Valider</button>
                </div>   
            </nav>    
        </div>
    )
}

export default Header