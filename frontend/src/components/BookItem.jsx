import { Link } from "react-router-dom"

function BookItem(props) {
    return <Link to=''>
        {props.book.name}: {props.book.year}
    </Link>
}

export default BookItem