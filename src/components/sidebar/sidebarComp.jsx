import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { useState } from "react";

const SidebarComp = (props) => {
    const { sideBarOpen, setSideBarOpen, movies, setFilteredMovies } =
        props.sidebarObj;

    const [pegi, setPegi] = useState(null);
    const [ageListOpened, setAgeListOpened] = useState(false);

    const handleSidebar = () => {
        setSideBarOpen(!sideBarOpen);
    };

    const handleAgeListOpened = () => {
        setAgeListOpened(!ageListOpened);
    };

    const handleFilterByPegi = (e) => {
        setPegi(e.currentTarget.getAttribute("name"));
        const age = e.currentTarget.getAttribute("name");

        const filtered = movies.filter((movie) => {
            return movie.pegi == age;
        });
        setFilteredMovies(filtered);
    };

    const handleDeleteFilter = () => {
        setFilteredMovies(null);
        setPegi(null);
    };

    return (
        <div
            className={`relative rounded h-full ${
                sideBarOpen ? "w-40" : "w-164 md:w-64"
            }`}
        >
            <div
                className={`bg-gray-950/40 border-r border-gray-800/40 text-gray-200/90  h-full`}
            >
                <div className="md:invisible w-full" onClick={handleSidebar}>
                    <GiHamburgerMenu className="text-xl flex mx-auto items-center justify-center" />
                </div>
                <div className="my-20 space-y-2 text-center w-full select-none">
                    <div
                        className={`pb-2 ${
                            sideBarOpen
                                ? "flex justify-center"
                                : " md:flex md:justify-start"
                        } mx-auto w-[80%] flex-col gap-2 items-center `}
                    >
                        <div
                            className="flex flex-row hover:text-gray-300/90 border-b w-full justify-center"
                            onClick={handleAgeListOpened}
                        >
                            <BsFillPersonCheckFill className="text-2xl md:text-3xl" />
                            <span
                                className={`${
                                    sideBarOpen
                                        ? "block"
                                        : "hidden md:block md:font-bold md:text-2xl"
                                }`}
                            >
                                Age
                            </span>
                        </div>
                        <div
                            className={`flex-col gap-2 my-2 md:my-10 w-full ${
                                ageListOpened && sideBarOpen
                                    ? "flex flex-col"
                                    : "hidden md:flex"
                            }`}
                        >
                            <div
                                className={` cursor-pointer hover:text-gray-300/90 hover:bg-gray-400/20 border h-8 border-gray-400/50 rounded flex items-center justify-center ${
                                    pegi === null ? "bg-sky-900/40" : ""
                                } rounded`}
                            >
                                <span onClick={handleDeleteFilter}>
                                    All Movies
                                </span>
                            </div>
                            <div
                                className={` cursor-pointer hover:text-gray-300/90 hover:bg-gray-400/20 border h-8 border-gray-400/50 rounded flex items-center justify-center ${
                                    pegi === "18" ? "bg-sky-900/40" : ""
                                } `}
                            >
                                <span name="18" onClick={handleFilterByPegi}>
                                    18+
                                </span>
                            </div>
                            <div
                                className={` cursor-pointer hover:text-gray-300/90 hover:bg-gray-400/20 border h-8 border-gray-400/50 rounded flex items-center justify-center ${
                                    pegi === "16" ? "bg-sky-900/40" : ""
                                } `}
                            >
                                <span name="16" onClick={handleFilterByPegi}>
                                    16+
                                </span>
                            </div>
                            <div
                                className={` cursor-pointer hover:text-gray-300/90 hover:bg-gray-400/20 border h-8 border-gray-400/50 rounded flex items-center justify-center ${
                                    pegi === "12" ? "bg-sky-900/40" : ""
                                } `}
                            >
                                <span name="12" onClick={handleFilterByPegi}>
                                    12+
                                </span>
                            </div>
                            <div
                                className={` cursor-pointer hover:text-gray-300/90 hover:bg-gray-400/20 border h-8 border-gray-400/50 rounded flex items-center justify-center ${
                                    pegi === "7" ? "bg-sky-900/40" : ""
                                } rounded`}
                            >
                                <span name="7" onClick={handleFilterByPegi}>
                                    7+
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarComp;
