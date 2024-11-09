import { useEffect } from "react"
import Home from "../../pages/home/Home"
import DetailNotes from "../../pages/notes/DetailNotes"
import Notes from "../../pages/notes/Notes"
import Footer from "./Footer"
import Header from "./Header"
import { 
    Routes,
    Route,
    useLocation
} from 'react-router-dom'

const MainLayout = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])
    return (
        <>
            <main className="w-full prose-lg py-8 px-4">
                <div className="container mx-auto">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/notes" element={<Notes />} />
                        <Route path="/notes/:index" element={<DetailNotes />} />
                    </Routes>
                    <Footer />
                </div>
            </main>
        </>
    )
}

export default MainLayout