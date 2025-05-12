import { useState, useEffect } from "react"
import api from "../api"
import "../styles/Base.css"
import Header from "../components/Header"
import { Link } from "react-router-dom"
import BookItem from "../components/BookItem"
import "../styles/BooksList.css"

function Home() {
    const [books, setBooks] = useState({})

    useEffect(() => {
        getBooks()
    }, [])

    const getBooks = () => {
        api
            .get("/api/v1/biblio/books/")
            .then(res => setBooks(res.data))
            .catch(error => alert(error))
    }

    return <div className="main">
        <Header />
        <div className="books-list">
            {Array.from(books).map(book => <BookItem key={book.id} book={book} />)}
        </div>
    </div>
}

export default Home