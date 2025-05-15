import { useState, useEffect } from "react"
import api from "../api"
import "../styles/Base.css"
import Header from "../components/Header"
import BookItem from "../components/BookItem"
import "../styles/BooksList.css"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

function Home() {
    return <div className="main">
        <Header />
        <Outlet />
        <Footer />
    </div>
}

export default Home