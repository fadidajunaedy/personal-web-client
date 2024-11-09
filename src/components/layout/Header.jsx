import moment from "moment"

const Header = () => {
    return (
        <>
            <header className="flex flex-col justify-center items-center gap-4 text-center border-4 border-[#000000] py-4">
                <span className="text-xl">{moment().format("dddd, DD MMMM YYYY")}</span>
                <h1 className="text-6xl font-bold">FADIDA ZANETTI JUNAEDY</h1>
                <h2 className="text-4xl font-semibold">FULLSTACK WEB DEVELOPER</h2>
            </header>
        </>
    )
}

export default Header