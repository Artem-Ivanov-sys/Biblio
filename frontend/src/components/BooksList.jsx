import { useState, useEffect } from "react"

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

    return <div className="books-list">
            {Array.from(books).map(book => <BookItem key={book.id} book={book} />)}
        </div>
}