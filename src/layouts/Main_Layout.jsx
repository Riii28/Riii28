import Navbar from "../Components/Navbar";

export default function MainLayout({ children }) {
    return (
        <section className="mx-5 h-[200vh] sm:mx-8 md:mx-10 lg:mx-12 xl:max-w-1200 xl:mx-auto xl:px-2">
            <Navbar />
            { children }
        </section>
    )
}