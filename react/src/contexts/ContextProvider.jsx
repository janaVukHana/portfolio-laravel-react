import { createContext, useContext, useState } from "react";

// createContext function accept DEFAULT VALUE. Default value is important for autocomplete purpose.
const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
    notification: null,
    setNotification: () => {}
})

// Now create context provider
export const ContextProvider = ({children}) => {

    const [user, setUser] = useState({})
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))
    const [notification, setNotification] = useState('')
    // const [token, _setToken] = useState(null)

    const setToken = (token) => {
        _setToken(token)
        if(token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
            notification,
            setNotification
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)