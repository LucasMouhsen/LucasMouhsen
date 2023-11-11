import Header from "../../components/Header";
import About from "../../components/About";
import Proyects from "../../components/Proyects";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import "./index.css"
import Home from "../../components/home";

export default function Index() {
    return (
        <main className="index">
            <Header/>
            <Home/>
            <About/>
            <Skills/>
            <Proyects/>
            <Contact/>
        </main>
    )
}