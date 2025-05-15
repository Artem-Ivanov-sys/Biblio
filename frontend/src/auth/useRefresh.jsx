import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"
import { jwtDecode } from "jwt-decode"
import api from "../api"

export default function useRefresh() {
    var isAuthenticated = false
    var exp = 0

    const refreshToken = async () => {
        const refresh_token = localStorage.getItem(REFRESH_TOKEN)
        try {
            const res = await api.post("/api/token/refresh/", {
                refresh: refresh_token
            })
            if (res.status === 200) {
                exp = Math.floor(jwtDecode(res.data.access).exp - Date.now()/1000)
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                isAuthenticated = true
            } else {
                isAuthenticated = false
            }
        } catch (error) {
            console.log(error)
            isAuthenticated = false
        }
    }

    console.log("===")
    if (localStorage.getItem(REFRESH_TOKEN)) {
        console.log("Sending refresh token")
        refreshToken()
            // .then(() => setTimeout(() => useRefresh(), Math.floor(exp * 500)))
            .then(() => {console.log(`Token refreshed. Next refresh in ${exp / 2}`)})
            .catch(err => {isAuthenticated = false; alert(err)})
    }

    return isAuthenticated
}
