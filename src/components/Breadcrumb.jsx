import { HiHome } from "react-icons/hi2";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    
    return (
        <nav className="flex items-center space-x-2 border-4 border-[#000000] border-t-0 text-gray-600" aria-label="Breadcrumb">
            <ul className="flex items-center space-x-1">
                <li>
                    <Link to="/" className="text-[#000000] hover:text-[#26498d] hover:underline">
                        <HiHome />
                    </Link>
                </li>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <li key={index} className="flex items-center space-x-1 mx-0 px-0">
                            <span className="text-gray-400">/</span>
                            {isLast ? (
                                <span className="capitalize font-semibold text-gray-700">
                                    {name.split("-")
                                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                        .join(" ")}
                                </span>
                            ) : (
                                <Link
                                    to={routeTo}
                                    className="capitalize text-#26498d hover:underline"
                                >
                                    {name.split("-")
                                        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                        .join(" ")}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
