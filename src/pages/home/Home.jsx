import About from "./sections/About"
import Certifications from "./sections/Certifications"
import Educations from "./sections/Educations"
import Experiences from "./sections/Experiences"
import Notes from "./sections/Notes"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

const Home = () => {
    return (
        <>
            <About />
            <Skills/>
            <Experiences />
            <Educations />
            <Certifications />
            <Projects />
            <Notes />
        </>
    )
}

export default Home