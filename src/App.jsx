import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes/index.js'
import './styles/App.css'
import '@fontsource/poppins'
import { AppProvider } from './contexts/App_Provider.jsx'

const App = () => {
    return (
        <AppProvider>
            <BrowserRouter>
                <Routes>
                    {routes.map(({path, Component, Layout}) => (
                        Layout ? (
                            <Route
                                key={path}
                                path={path}
                                element={
                                    <Layout>
                                        <Component />
                                    </Layout>
                                }
                            />       
                        ) : (
                            <Component />
                        )
                    ))}
                </Routes>
            </BrowserRouter>
        </AppProvider>
    )
}

export default App