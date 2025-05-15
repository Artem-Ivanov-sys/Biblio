import { useState } from "react"
import api from "../api"
import { ACCESS_TOKEN } from "../constants"

function CreateBookForm() {
    const [formData, setFormData] = useState({
        title_and_responsibility_area: {
            main_title: "",
            parallel_title: "",
            surname: "",
            initials: "",
            responsibility: [
                {
                    surname: "",
                    name: "",
                    middlename: "",
                    role: ""
                }
            ],
            title_information: 0
        },
        edition_area: {
            edition_title: "",
            edition_information: ""
        },
        publication_area: {
            publication_place: [
                ""
            ],
            publisher: "",
            year: 0
        }
    })
    const [loading, setLoading] = useState(false)

    const handleSubmit = async e => {
        setLoading(true)
        e.preventDefault()
        if (null) {
            await api
                .post("/api/v1/biblio/books/", {...formData, headers: {"Authorization": `Bearer ${ACCESS_TOKEN}`}})
                .then(() => {alert("Готово")})
                .catch(err => {console.log(err)})
        } else {
            alert("Not authenticated")
        }
        setLoading(false)
    }

    const handleChange = e => {
        setFormData(prev => {
            prev[e.target.className][e.target.name] = e.target.value
            return {...prev}
        })
    }

    return <form onSubmit={handleSubmit}>
        <h2>Додати літературу</h2>
        <h3>Область назви та відповідальності</h3>
        <p className="title_and_responsibility">
            <input 
                type="text"
                name="main_title" 
                placeholder="Основна назва" 
                value={formData.title_and_responsibility_area.main_title}
                onChange={handleChange}
                className="title_and_responsibility_area" />
            <input
                type="text" 
                name="parallel_title" 
                placeholder="Паралельна назва"
                value={formData.title_and_responsibility_area.parallel_title}
                onChange={handleChange}
                className="title_and_responsibility_area" />
        </p>
        <input type="submit" value="Submit" />
    </form>
}

export default CreateBookForm