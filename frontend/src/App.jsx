import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Main"
import ProtectedRoute from "./components/ProtectedRoute"
import CreateBook from "./pages/CreateBook"
import BooksList from "./pages/BooksList"
import useRefresh from "./auth/useRefresh"
import { useEffect } from "react"

function Logout() {
  localStorage.clear()
  return <Navigate to="/" />
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <BooksList />
      },
      {
        path: "/create/",
        element: <ProtectedRoute>
          <CreateBook />
        </ProtectedRoute>
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/logout",
    element: <Logout />
  }
])

function App() {
  useEffect(() => {
    setInterval(useRefresh(), 30*1000)
  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App
