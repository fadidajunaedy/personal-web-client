// import { Link } from "react-router-dom"
import moment from "moment"
import notes from "../../../data/notes.json"
import { HiArrowRight } from "react-icons/hi2"
import { Link } from "react-router-dom"
import NoteCard from "../../../components/cards/NoteCard"

const Notes = () => {
    return (
        <>
            <header className="border-4 border-[#000000] border-t-0 flex flex-col gap-2 text-center p-4">
                <Link to="/notes">
                    <h3 className="text-3xl font-semibold hover:underline hover:text-[#26498d]">NOTES</h3>
                </Link>
                <p className="text-lg">
                    In this section, I share some of my thoughts and experiences related to web development. Feel free to check out my notes as I continue learning and growing in this field. Why not call it a "blog"? Well, I prefer to keep things casual—I'm not exactly good at writing.
                </p>
            </header>
            <section className="border-4 border-[#000000] border-t-0 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
                {notes.map((note, index) => ( 
                <NoteCard
                key={index}
                link={`/notes/${index}`}
                title={note.title}
                headline={note.headline}
                date={note.created_at}
                />
                // <Link
                // to={`/notes/${index}`}
                // key={index} 
                // className="group flex flex-col gap-2 border-2 border-[#000000] hover:border-[#26498d] border-dashed hover:border-solid cursor-pointer p-4">
                //     <p className="text-sm italic group-hover:text-[#26498d]">
                //         {moment(note.created_at).format("DD MMMM YYYY")}
                //     </p>
                //     <h4 className="text-2xl group-hover:text-[#26498d]">{note.title}</h4>
                //     <p className="text-xl leading-snug group-hover:text-[#26498d]">{note.headline}</p>
                //     <p className="flex justify-end items-center gap-2 text-lg leading-snug group-hover:text-[#26498d]">
                //         Read note <HiArrowRight />
                //     </p>
                // </Link>
                ))}
            </section>
        </>
    )
}

export default Notes