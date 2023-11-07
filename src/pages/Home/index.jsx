import Header from "../../components/Header";
import About from "../../components/About";
import Proyects from "../../components/Proyects";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
import "./index.css"

export default function Home() {
    return (
        <main className="home">
            <Header/>
            <About/>
            <Skills/>
            <Proyects/>
            <Contact/>
        </main>
    )
}