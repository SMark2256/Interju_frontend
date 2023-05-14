import React from "react";
import { CgAdidas } from "react-icons/cg";

const HeaderComp = ({ sideBarOpen }) => {
    return (
        <div
            className={`h-20 sticky select-none bg-gray-950/40 text-red font-bold  text-red-600 flex items-center justify-center md:w-full w-full border-r border-gray-800/40  
            }`}
        >
            <h1
                className={`flex flex-row items-center mx-auto gap-2 ${
                    sideBarOpen ? "text-xl" : "text-4xl"
                }`}
            >
                <p
                    className={`${
                        sideBarOpen
                            ? ""
                            : "absolute invisible md:visible md:relative"
                    }`}
                >
                    SAMPLE
                </p>
                <CgAdidas
                    className={`text-white mt-1 ${
                        sideBarOpen ? "text-2xl" : "text-4xl ml-2 mr-2"
                    }`}
                />
            </h1>
        </div>
    );
};

export default HeaderComp;
