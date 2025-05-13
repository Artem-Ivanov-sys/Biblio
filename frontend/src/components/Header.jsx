import { useState, useEffect } from "react";
import api from "../api";
import { ACCESS_TOKEN } from "../constants";
import { Link } from "react-router-dom";
import "../styles/Header.css"

function MenuItem({children}) {
    return <li>
        {children}
    </li>
}

function Header() {
    const [user, setUser] = useState("")
    const [isAuthenticated, setIsAuthenticated] = useState(null)

    useEffect(() => getUser(), [])

    const getUser = () => {
        if (localStorage.getItem(ACCESS_TOKEN)) {
            api
                .get("/api/v1/me/", {headers: {"Authorization": `Bearer ${ACCESS_TOKEN}`}})
                .then(res => {
                    setUser(`${res.data.first_name} ${res.data.last_name}`)
                    setIsAuthenticated(true)
                })
                .catch(error => {
                    alert(error)
                    setIsAuthenticated(false)
                })
        } else {
            setIsAuthenticated(false)
        }
    }

    return <header>
        {isAuthenticated?
        <nav>
            <ul className="main-menu">
                <MenuItem><Link to="/">Головна</Link></MenuItem>
                <li>dsadsadsa</li>
                <li>asdsdasd</li>
                <li>dsadsa</li>
                <li>asdasdasd</li>
            </ul>
        </nav>
        : <p></p>}
        <p>Biblio</p>
        {isAuthenticated?   <p>{user}, <Link to={"logout/"}>Вийти</Link></p>
                        :   <p><Link to={"login/"}>Ввійти</Link></p>}
    </header>
}

export default Header