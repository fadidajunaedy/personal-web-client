import moment from "moment"
import { HiArrowRight } from "react-icons/hi2"
import { Link } from "react-router-dom"

const NoteCard = ({link, index, title, headline, date}) => {
    return (
        <>
            <Link
            to={link}
            key={index} 
            className="group flex flex-col gap-2 border-2 border-[#000000] hover:border-[#26498d] border-dashed hover:border-solid cursor-pointer p-4">
                <p className="text-sm italic group-hover:text-[#26498d]">
                    {moment(date).format("DD MMMM YYYY")}
                </p>
                <h4 className="text-2xl group-hover:text-[#26498d]">{title}</h4>
                <p className="text-xl leading-snug group-hover:text-[#26498d]">{headline}</p>
                <div className="flex justify-end items-center gap-2 text-lg leading-snug group-hover:text-[#26498d] mt-auto">
                    Read note <HiArrowRight />
                </div>
            </Link>
        </>
    )
}

export default NoteCard