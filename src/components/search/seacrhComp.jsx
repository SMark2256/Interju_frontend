import React from "react";

const SeacrhComp = () => {
    return (
        <div className="h-20 flex items-center px-10 py-10 md:px-20 text-white font-bold bg-gray-950/80">
            <input
                className="rounded-xl w-40 h-8 md:w-72 md:h-14 md:text-xl border bg-gray-950/80 border-gray-500/90 text-gray-500/80 px-4"
                type="text"
                name="searchInput"
                placeholder="Search..."
            />
        </div>
    );
};

export default SeacrhComp;
