import projects from "../../../data/projects.json"

const Projects = () => {
    return (
        <>
            <header className="border-4 border-[#000000] border-t-0 text-center p-4">
                <h3 className="text-3xl font-semibold">PROJECTS</h3>
            </header>
            <section className="border-4 border-[#000000] border-t-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {projects.map((project, index) => ( 
                <article key={index} className="group flex flex-col gap-2 border-2 border-[#000000] hover:border-[#26498d] border-dashed hover:border-solid p-4">
                    <a 
                    href={project.link}
                    className={`${project.link !== null ? 'cursor-pointer hover:underline' : ''} group-hover:text-[#26498d]`}>
                        <h4 className="text-2xl flex items-center gap-2 group-hover:text-[#26498d]">
                            {project.link !== null && (
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            )}
                            {project.title}
                        </h4>
                    </a>
                    <p className="text-xl leading-snug group-hover:text-[#26498d]">{project.description}</p>
                    <p className="leading-snug group-hover:text-[#26498d]">
                        <span className="font-semibold">Technology:</span>&nbsp;{project.tech_stack}
                    </p>
                </article>
                ))}
            </section>
        </>
    )
}

export default Projects