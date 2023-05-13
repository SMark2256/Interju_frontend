import { GiHamburgerMenu } from "react-icons/gi";

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
                className={`sidebar bg-gray-950/40 border-r border-gray-800/40 text-white h-full`}
            >
                {/* Mobile Size (Hamburger Menu) */}
                <div className="md:invisible">
                    <button className="text-xl flex mx-auto items-center justify-center w-14 h-16">
                        <GiHamburgerMenu onClick={toggleSidebar} />
                    </button>
                </div>

                {/* Dropdown Menus */}
                <div className={`${sideBarOpen ? "block" : "hidden md:block"}`}>
                    <ul className="my-20 space-y-5 text-center w-full select-none">
                        <li className="pb-2 border-b mx-auto w-[80%] cursor-pointer">
                            <p>Menu 1</p>
                        </li>
                        <li className="pb-2 border-b mx-auto w-[80%] cursor-pointer">
                            Menu 2
                        </li>
                        <li className="pb-2 border-b mx-auto w-[80%] cursor-pointer">
                            Menu 3
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SidebarComp;
