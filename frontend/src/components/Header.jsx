import { useState, useEffect, useContext } from "react";
import api from "../api";
import { ACCESS_TOKEN } from "../constants";
import { Link } from "react-router-dom";
import "../styles/Header.css"
import useAuth from "../auth/useAuth";

function MenuItem({children}) {
    return <li>
        {children}
    </li>
}

function Header() {
    const [user, setUser] = useState("")
    const isAuthenticated = useAuth()

    useEffect(() => {
        getUser()
    }, [])

    const getUser = () => {
        api
            .get("/api/v1/me/", {headers: {"Authorization": `Bearer ${ACCESS_TOKEN}`}})
            .then(res => {
                setUser(`${res.data.first_name} ${res.data.last_name}`)
                })
            .catch(err => {console.log(err)})
    }

    return <header>
        {isAuthenticated ?
            <nav>
                <ul className="main-menu">
                    <MenuItem><Link to="/">Головна</Link></MenuItem>
                    <MenuItem><Link to="/create/">Додати книгу</Link></MenuItem>
                    <li>asdsdasd</li>
                    <li>dsadsa</li>
                    <li>asdasdasd</li>
                </ul>
            </nav>
        : <></>
        }
        <p className="logo">BIBLIO</p>
        {isAuthenticated?   <p className="user-name">{user}, <Link to={"logout/"}>Вийти</Link></p>
                        :   <Link to={"login/"}>Ввійти</Link>}
    </header>
}

export default Header