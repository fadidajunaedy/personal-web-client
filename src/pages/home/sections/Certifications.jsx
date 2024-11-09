import certifications from "../../../data/certifications.json"

const Certifications = () => {
    return (
        <>
            <header className="border-4 border-[#000000] border-t-0 text-center p-4">
                <h3 className="text-3xl font-semibold">CERTIFICATIONS</h3>
            </header>
            <section className="border-4 border-[#000000] border-t-0 flex flex-col gap-4 p-4">
                {certifications.map((certificate, index) => ( 
                <article key={index} className="group flex flex-col gap-2 border-2 border-[#000000] hover:border-[#26498d] border-dashed hover:border-solid p-4">
                    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-2">
                        <h4 className="text-2xl group-hover:text-[#26498d]">{certificate.title}</h4>
                        <p className="text-lg italic group-hover:text-[#26498d]">
                            {certificate.date}
                        </p>
                    </div>
                    <h6 className="text-xl group-hover:text-[#26498d]">{certificate.publisher}</h6>
                    <a 
                    href={certificate.link}
                    target="_blank"
                    className="hover:underline text-lg flex items-center group-hover:text-[#26498d]">
                        Show Credential
                    </a>
                    {/* <p className="text-xl leading-snug group-hover:text-[#26498d]">{certificate.description}</p> */}
                </article>
                ))}
            </section>
        </>
    )
}

export default Certifications