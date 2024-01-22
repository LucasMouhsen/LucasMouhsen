import Header from "../../components/Header";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import "./index.css"
import Home from "../../components/home";
import { useDark } from "../../hooks/useDark";
import { Projects } from "../../components/Projects";

export default function Index() {
    const {isBackgroundDark } = useDark() /* Trae datos del providerDark */
    return (
        <main className="index" data-theme={!isBackgroundDark ? "dark" : "light"}>{/* Tema claro y oscuro */}
            <Header/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </main>
    )
}