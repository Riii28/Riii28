import { useReducer, useEffect, createContext, useContext } from "react";
import { initialState, reducer } from "../hooks/app_hooks.js";

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const root = document.documentElement
        if (state.theme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [state.theme])
                                                                                                      
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            { children }
        </AppContext.Provider>
    )
}

export const useApp = () => {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error('useApp must be used within an AppProvider')
    }
    
    return context
}