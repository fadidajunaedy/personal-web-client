import educations from "../../../data/educations.json"

const Educations = () => {
    return (
        <>
            <header className="border-4 border-[#000000] border-t-0 text-center p-4">
                <h3 className="text-3xl font-semibold">EDUCATIONS</h3>
            </header>
            <section className="border-4 border-[#000000] border-t-0 flex flex-col gap-4 p-4">
                {educations.map((experience, index) => ( 
                <article key={index} className="group flex flex-col gap-2 border-2 border-[#000000] hover:border-[#26498d] border-dashed hover:border-solid p-4">
                    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-2">
                        <h4 className="text-2xl group-hover:text-[#26498d]">{experience.place}</h4>
                        <p className="text-lg italic group-hover:text-[#26498d]">
                            {experience.period}
                        </p>
                    </div>
                    <p className="text-xl leading-snug group-hover:text-[#26498d]">{experience.description}</p>
                </article>
                ))}
            </section>
        </>
    )
}

export default Educations