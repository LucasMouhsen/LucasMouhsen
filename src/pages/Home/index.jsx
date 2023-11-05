import Header from "../../components/Header";
import About from "../../components/About";
import Proyects from "../../components/Proyects";
import Skills from "../../components/Skils";
import Contact from "../../components/Contact";
export default function Home() {
    return (
        <main>
            <Header/>
            <About/>
            <Proyects/>
            <Skills/>
            <Contact/>
        </main>
    )
}