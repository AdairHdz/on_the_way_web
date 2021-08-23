import React, { useState } from "react"
import { useHistory } from "react-router"
import UserType from "../models/user_type"

type AuthContextType = {
    authenticationToken: string,
    userType?: UserType
    login: (authenticationToken: string) => void,
    logout: () => void
}

export const AuthContext = React.createContext<AuthContextType>({
    authenticationToken: "",    
    login: (authenticationToken: string) => {},
    logout: () => {}
})


const AuthContextProvider: React.FC = (props) => {
    const [authenticationToken, setAuthenticationToken] = useState("")
    const [userType, setUserType] = useState<UserType>()

    const history = useHistory()

    const login = (authenticationToken: string) => {
        setAuthenticationToken(authenticationToken)
        setUserType(UserType.SERVICE_PROVIDER)

        if(userType === UserType.SERVICE_PROVIDER) {
            history.push("/home")
        } else {
            //Go to homepage for service_requester
        }
    }

    const logout = () => {
        setAuthenticationToken("")
        setUserType(undefined)
    }

    const authContextValues = {
        authenticationToken,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={authContextValues}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider



