import MainLayout from "../layouts/Main_Layout";
import About from "../pages/About";
import Home from "../pages/Home";
import Project from "../pages/Project";

export const routes = [
    {
        path: '/',
        Component: Home,
        Layout: MainLayout
    },
    {
        path: '/about',
        Component: About,
        Layout: MainLayout
    },
    {
        path: '/project',
        Component: Project,
        Layout: MainLayout
    }
]