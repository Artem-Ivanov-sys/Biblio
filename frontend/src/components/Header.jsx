import { useState, useEffect } from "react";
import api from "../api";
import { ACCESS_TOKEN } from "../constants";
import { Link } from "react-router-dom";
import "../styles/Header.css"

function MenuItem() {
    return <li>

    </li>
}

function Header() {
    const [user, setUser] = useState("")
    const [isAuthenticated, setIsAuthenticated] = useState(null)

    useEffect(() => getUser(), [])

    const getUser = () => {
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
    }

    return <header>
        <p></p>
        {isAuthenticated?   <p>Вітаємо, {user}, <Link to={"logout/"}>Вийти</Link></p>
                        :   <p><Link to={"login/"}>Ввійти</Link></p>}
    </header>
}

export default Header