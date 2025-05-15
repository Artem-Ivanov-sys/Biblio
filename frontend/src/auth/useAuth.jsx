import { ACCESS_TOKEN } from "../constants"
import { jwtDecode } from "jwt-decode"
import useRefresh from "./useRefresh"

export default function useAuth() {
    var isAuthenticated = false

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (!token) {
            isAuthenticated = false
            return
        }
        const token_decoded = jwtDecode(token)
        const token_expiration = token_decoded.exp
        const now = Date.now() / 1000
        if (token_expiration < now) {
            useRefresh()
        } else {
            isAuthenticated = true
        }
    }

    if (localStorage.getItem(ACCESS_TOKEN)) {
        auth().catch(err => {
            console.log(err)
            isAuthenticated = false
        })
    }

    if (!isAuthenticated) {
        localStorage.clear()
    }

    return isAuthenticated
}