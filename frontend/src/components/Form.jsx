import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css"

function Form({route, method}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async e => {
        setLoading(true)
        e.preventDefault()
        try {
            const res = await api.post(route, {
                username, password
            })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch(error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    return <form onSubmit={handleSubmit} className="login-form">
        <h1>{method === "login" ? "Login" : "---"}</h1>
        <input className="form-input" type="text" value={username} onChange={e=>setUsername(e.target.value)} placeholder="username" />
        <input className="form-input" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" />
        <input className="form-button submit" type="submit" value={method === "login" ? "Login" : "---"} />
    </form>
}

export default Form