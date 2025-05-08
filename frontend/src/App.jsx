import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Main"
import ProtectedRoute from "./components/ProtectedRoute"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/login"
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
