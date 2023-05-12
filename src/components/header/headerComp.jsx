import React from "react";
import { SiAdidas } from "react-icons/si";

const HeaderComp = () => {
    return (
        <div className="h-20 sticky select-none bg-black text-red font-bold  text-red-600 text-4xl flex items-center justify-center">
            <h1 className="flex flex-row items-center gap-2">
                BLYATFLIX <SiAdidas className="text-white text-5xl mt-1" />
            </h1>
        </div>
    );
};

export default HeaderComp;
