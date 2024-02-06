import React from 'react'
import { Auth } from '../services/firebase/auth.service'
import { Database } from '../services/firebase/database.service'

export const useAuth = () => {

    const [isAuth, setIsAuth] = React.useState(null)
    const [user, setUser] = React.useState({})
    const [userId, setUserId] = React.useState("")
    const [userShortName, setUserShortName] = React.useState("")
    const [userEmail, setUserEmail] = React.useState("")

    const auth = Auth.getInstance()

    React.useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            
            if (user) {
                const userData = await Database.get(`users/${user.uid}`)
                
                setIsAuth(true)
                setUser(userData)
                setUserId(user.uid)
                setUserShortName(user.email.split("@")[0])
                setUserEmail(user.email)

                console.log(user.email)
            }
            else {
                setIsAuth(false)
                setUser({})
                setUserId("")
                setUserShortName("")
                setUserEmail("")
            }
        })
    }, [auth])

    return { isAuth, user, userId, userShortName, userEmail }
}