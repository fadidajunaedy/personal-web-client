import MyImage from "../../../assets/images/me.png"
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si"
import { AiFillMail } from "react-icons/ai"
import { IoDocumentSharp } from "react-icons/io5"

const About = () => {
    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 border-4 border-[#000000] border-t-0">
                <figure className="my-0 w-full border-r-0 lg:border-r-4 border-[#000000]">
                <img 
                    src={MyImage} 
                    alt="Fadida Junaedy's Image" 
                    className="w-full h-full object-cover object-center"/>
                </figure>
                <div className="border-t-4 lg:border-t-0 lg:border-l-0 border-[#000000]">
                <header className="border-[#000000] border-b-4 p-4 text-center">
                    <h3 className="text-3xl font-semibold">ABOUT</h3>
                </header>
                <div className="p-4">
                    <p className="text-2xl leading-relaxed hyphens-auto m-0">
                    I’m a web developer with nearly 1.5 years of experience in web development, starting as a front end developer and later expanding to full stack development. I’m love bringing ideas to life on the web, focusing on building user-friendly applications and reliable backend systems to create meaningful digital experiences.
                    </p>
                </div>
                </div>
            </section>
            <section className="border-4 border-[#000000] border-t-0 grid grid-cols-1 lg:grid-cols-2">
                <div className="grid grid-cols-3 border-[#000000] border-b-4 lg:border-b-0">
                <a
                href="https://www.linkedin.com/in/fadidajunaedy"
                target="_blank"
                className="border-r-4 border-[#000000] hover:text-[#26498d] p-4">
                    <SiLinkedin 
                    size={48}  
                    className="mx-auto"/>
                </a>
                <a
                href="https://github.com/fadidajunaedy"
                target="_blank"
                className="border-r-4 border-[#000000] hover:text-[#26498d] p-4">
                    <SiGithub 
                    size={48}  
                    className="mx-auto"/>
                </a>
                <a
                href="https://www.instagram.com/fadidajunaedy"
                target="_blank"
                className="lg:border-r-4 border-[#000000] hover:text-[#26498d] p-4">
                    <SiInstagram 
                    size={48}  
                    className="mx-auto"/>
                </a>
                </div>
                <div className="grid grid-cols-2">
                <a 
                href="mailto:fadidajunaedy@gmail.com"
                target="_blank"
                className="transition hover:text-[#26498d] border-[#000000] border-r-4 flex justify-center items-center text-center p-4">
                    <AiFillMail size={24} />&nbsp;<h4 className="font-semibold">Email</h4>
                </a>
                <a 
                href=""
                target="_blank"
                className="transition hover:text-[#26498d] flex justify-center items-center text-center p-4">
                    <IoDocumentSharp size={24} />&nbsp;<h4 className="font-semibold">CV</h4>
                </a>
                </div>
            </section>
        </>
    )
}

export default About