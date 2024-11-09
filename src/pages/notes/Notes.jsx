import moment from "moment"
import Breadcrumb from "../../components/Breadcrumb"
import notes from "../../data/notes.json"
import { HiArrowRight } from "react-icons/hi2"
import { Link } from "react-router-dom"
import NoteCard from "../../components/cards/NoteCard"

const Notes = () => {
    return (
        <>
            <Breadcrumb />
            <header className="border-4 border-[#000000] border-t-0 flex flex-col gap-2 text-center p-4">
                <h3 className="text-3xl font-semibold">NOTES</h3>
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
                ))}
            </section>
        </>
    )
}

export default Notes