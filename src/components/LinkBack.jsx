import { HiArrowLeft } from "react-icons/hi2"
import { useNavigate } from "react-router-dom"

const LinkBack = () => {
    const navigate = useNavigate()

    return (
        <>
            <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 hover:underline hover:text-[#26498d]">
                <HiArrowLeft size={14}/>Back
            </button>
        </>
    )
}

export default LinkBack