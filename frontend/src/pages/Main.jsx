import { useState, useEffect } from "react"
import api from "../api"

function Home() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        getBooks()
    }, [])

    const getBooks = () => {
        api
            .get("/api/v1/biblio/books/")
            .then(res => setBooks(res.data))
            .catch(error => alert(error))
    }

    return <div>Home</div>
}

export default Home