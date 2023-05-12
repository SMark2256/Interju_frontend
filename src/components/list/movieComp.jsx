import { useState } from "react";

const MovieComp = ({ movie }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className={`rounded select-none`} key={movie.id}>
            <div className="relative w-[95%]">
                <img
                    className={`transition duration-500 ease-in-out p-1 rounded-lg h-60 mx-auto ${
                        isHovered ? "" : "animate-anim-zoom-out"
                    }`}
                    src={movie.image}
                    alt={movie.title}
                    onClick={() => setIsHovered(true)}
                />
                {isHovered && (
                    <div
                        className="absolute bottom-0 bg-gray-500/50 backdrop-blur-sm h-full w-full flex items-center justify-center flex-col rounded"
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <p>{movie.title}</p>
                        <p className="rounded-full border-2 border-black mx-auto flex items-center justify-center w-10 h-10">
                            {movie.pegi}+
                        </p>
                        <button className="underline mt-5 md:mt-10">
                            More...
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MovieComp;
