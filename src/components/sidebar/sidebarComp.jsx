import { GiHamburgerMenu } from "react-icons/gi";
import { IoAddCircle } from "react-icons/io5";
import { RiMovie2Fill } from "react-icons/ri";
import { BsFillPersonCheckFill } from "react-icons/bs";

const SidebarComp = (props) => {
    const { sideBarOpen, setSideBarOpen } = props.sidebarObj;

    const toggleSidebar = () => {
        setSideBarOpen(!sideBarOpen);
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
                {/* Mobile Size (Hamburger Menu) */}
                <div className="md:invisible">
                    <GiHamburgerMenu
                        className="text-xl flex mx-auto items-center justify-center"
                        onClick={toggleSidebar}
                    />
                </div>

                {/* Dropdown Menus */}
                <div>
                    <ul className="my-20 space-y-2 text-center w-full select-none">
                        <li
                            className={`pb-2 mb-10 ${
                                sideBarOpen
                                    ? "border-b"
                                    : "justify-center md:border-b md:justify-start"
                            } mx-auto w-[80%] cursor-pointer flex flex-row gap-2 items-center hover:text-gray-300/90`}
                        >
                            <IoAddCircle className="text-2xl md:text-3xl" />
                            <span
                                className={`${
                                    sideBarOpen
                                        ? "block"
                                        : "hidden md:block md:font-bold md:text-2xl"
                                }`}
                            >
                                Add Movie
                            </span>
                        </li>
                        <li
                            className={`pb-2 ${
                                sideBarOpen
                                    ? "border-b"
                                    : "justify-center md:border-b md:justify-start"
                            } mx-auto w-[80%] cursor-pointer flex flex-row gap-2 items-center hover:text-gray-300/90`}
                        >
                            <RiMovie2Fill className="text-2xl md:text-3xl" />
                            <span
                                className={`${
                                    sideBarOpen
                                        ? "block"
                                        : "hidden md:block md:font-bold md:text-2xl"
                                }`}
                            >
                                Genre
                            </span>
                        </li>
                        <li
                            className={`pb-2 ${
                                sideBarOpen
                                    ? "border-b"
                                    : "justify-center md:border-b md:justify-start"
                            } mx-auto w-[80%] cursor-pointer flex flex-row gap-2 items-center hover:text-gray-300/90`}
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
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SidebarComp;
