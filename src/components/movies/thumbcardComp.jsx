import { useState } from "react";
import ListMotion from "../motion/ListMotion";

const MovieComp = ({ movie, setSelectedMovie }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMore = () => {
        setSelectedMovie(movie);
    };

    return (
        <ListMotion>
            <div className="rounded select-none" key={movie.id}>
                <div className="relative w-full flex items-center justify-center">
                    <img
                        className={`transition duration-500 ease-in-out rounded-lg h-66 lg:h-96 mx-auto ${
                            isHovered ? "" : "animate-anim-zoom-out"
                        }`}
                        src={movie.image}
                        alt={movie.title}
                        onClick={() => setIsHovered(true)}
                    />
                    {isHovered && (
                        <div
                            className="absolute bottom-0 bg-gray-500/50 backdrop-blur-sm gap-2 md:gap-4 h-full w-full flex items-center justify-center flex-col rounded"
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <p className="text-lg md:text-3xl font-bold">
                                {movie.title}
                            </p>
                            <p className="rounded-full border-2 border-white mx-auto flex items-center justify-center w-10 h-10">
                                {movie.pegi}+
                            </p>
                            <button
                                className="underline mt-5 md:mt-10 text-lg md:text-2xl"
                                onClick={() => handleMore()}
                            >
                                More...
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </ListMotion>
    );
};

export default MovieComp;
