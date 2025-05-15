import { ACCESS_TOKEN } from "../constants"

function ProtectedRoute({children}) {
    var isAuthorized = false
    if (localStorage.getItem(ACCESS_TOKEN)) isAuthorized = true

    return isAuthorized ? children : null
}

export default ProtectedRoute