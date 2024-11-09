import { useParams } from "react-router-dom"
import notes from "../../data/notes.json"
import Breadcrumb from "../../components/Breadcrumb"
import moment from "moment"
import LinkBack from "../../components/LinkBack"

const DetailNotes = () => {
    const { index } = useParams()
    
    return (
        <>
            <Breadcrumb />
            <section className="border-4 border-[#000000] border-t-0">
                <div className="sub-container mx-auto flex flex-col gap-4 p-4"> 
                    <LinkBack />
                    <p className="text-xl italic group-hover:text-[#26498d]">
                        {moment(notes[index].created_at).format("DD MMMM YYYY")}
                    </p>
                    <h3 className="text-3xl font-semibold">{notes[index].title}</h3>
                    <div 
                    dangerouslySetInnerHTML={{ __html: notes[index].content }}
                    className="content leading-relaxed hyphens-auto"/>
                </div>

            </section>
        </>
    )
}

export default DetailNotes