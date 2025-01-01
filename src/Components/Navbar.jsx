import { Link } from "react-router-dom"
import { useApp } from "../contexts/App_Provider"
import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    const { state, dispatch } = useApp()

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY
            const isScrollDown = currentScroll > state.navbar.lastScroll
    
            dispatch({
                type: 'UPDATE_NAVBAR',
                payload: {
                    lastScroll: currentScroll,
                    isHidden: isScrollDown
                }
            })

            dispatch({
                type: 'CLOSE_NAVBAR'
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [state.navbar.lastScroll])

    return (
        <nav className={`fixed left-1/2 dark:text-primary -translate-x-1/2 z-10 flex w-[95%] max-w-1200 justify-between bg-200 px-6 py-4 shadow-md rounded-xl transition-all duration-300 sm:items-center ${
            state.navbar.isHidden ? '-top-16' : 'top-4'
        }`}>
            <div className="flex flex-col items-start">
                <FontAwesomeIcon 
                    icon={faBars}
                    size="xl"
                    cursor='pointer'
                    onClick={() => dispatch({ type: 'OPEN_NAVBAR' })}
                    className="hover:text-secondary transition-colors duration-300 sm:hidden"
                />
                <div className={`flex flex-col overflow-hidden transition-all duration-300 sm:overflow-visible sm:items-center sm:flex-row sm:gap-x-4 sm:mt-0 ${
                    state.navbar.toggle ? 'h-20 mt-4 sm:h-auto' : 'h-0'
                }`}>
                    <Link
                        to={'/'}
                        onClick={() => dispatch({ type: 'CLOSE_NAVBAR' })}
                        className="hover:text-secondary transition-colors duration-300"
                    >
                        Home
                    </Link>
                    <Link 
                        to={'/about'}
                        onClick={() => dispatch({ type: 'CLOSE_NAVBAR' })}
                        className="hover:text-secondary transition-colors duration-300"
                    >
                        About
                    </Link>
                    <Link
                        to={'/project'}
                        onClick={() => dispatch({ type: 'CLOSE_NAVBAR'})}
                        className="hover:text-secondary transition-colors duration-300"
                    >
                        Project
                    </Link>
                </div>
            </div>
            <span className="text-lg font-bold">
                Rii
            <span className="text-light">
                dev    
            </span>
            </span>
        </nav>
    )
}

export default Navbar