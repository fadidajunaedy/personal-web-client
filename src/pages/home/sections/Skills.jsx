import { FaCss3Alt, FaHtml5, FaLaravel, FaReact } from "react-icons/fa"
import { SiJavascript, SiTailwindcss } from "react-icons/si"

const Skills = () => {
    return (
        <>
            <header className="border-4 border-[#000000] border-t-0 p-4 text-center">
                <h3 className="text-3xl font-semibold">SKILLS</h3>
            </header>
            <section className="border-4 border-[#000000] border-t-0 text-center grid grid-cols-3 lg:grid-cols-6">
                <div className="group border-[#000000] border-b-4 lg:border-b-0 border-r-0 lg:border-r-4 p-4">
                    <FaHtml5 
                    size={48}
                    className="mx-auto group-hover:text-[#26498d]"/>
                </div>
                <div className="group border-[#000000] border-b-4 lg:border-b-0 border-r-0 lg:border-r-4 p-4">
                    <FaCss3Alt 
                    size={48}
                    className="mx-auto group-hover:text-[#26498d]"/>
                </div>
                <div className="group border-[#000000] border-b-4 lg:border-b-0 border-r-0 lg:border-r-4 p-4">
                    <SiJavascript 
                    size={48}
                    className="mx-auto group-hover:text-[#26498d]"/>
                </div>
                <div className="group border-[#000000] border-r-0 lg:border-r-4 p-4">
                    <FaReact 
                    size={48}
                    className="mx-auto group-hover:text-[#26498d]"/>
                </div>
                <div className="group border-[#000000] border-r-0 lg:border-r-4 p-4">
                    <FaLaravel 
                    size={48}
                    className="mx-auto group-hover:text-[#26498d]"/>
                </div>
                <div className="group p-4">
                    <SiTailwindcss 
                    size={48}
                    className="mx-auto group-hover:text-[#26498d]"/>
                </div>
            </section>
        </>
    )
}

export default Skills