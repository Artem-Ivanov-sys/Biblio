import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Main"
import ProtectedRoute from "./components/ProtectedRoute"

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
  return (
    <ProtectedRoute>
      <RouterProvider router={router} />
    </ProtectedRoute>
  )
}

export default App
