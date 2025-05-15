import { useState, useEffect } from "react"
import api from "../api"
import BookItem from "../components/BookItem"

function BooksList() {
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

    return <div className="inner-page books-list">
            {Array.from(books).map(book => <BookItem key={book.id} book={book} />)}
        </div>
}

export default BooksList