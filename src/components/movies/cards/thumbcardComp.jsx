import { useState } from "react";
import { BsQuestionLg } from "react-icons/bs";

const ThumbCardComp = ({ movie, setSelectedMovie }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMore = () => {
        setSelectedMovie(movie);
    };

    return (
        <div className="rounded select-none" key={movie.id}>
            <div className="relative w-full flex items-center h-64 lg:h-96 justify-center">
                {movie.image !== "" ? (
                    <img
                        className={`transition duration-500 ease-in-out cursor-pointer rounded-lg h-full mx-auto ${
                            isHovered ? "" : "animate-anim-zoom-out"
                        }`}
                        src={movie.image}
                        alt={movie.title}
                        onClick={() => setIsHovered(true)}
                    />
                ) : (
                    <div
                        onClick={() => setIsHovered(true)}
                        className="transition duration-500 ease-in-out cursor-pointer rounded-lg h-64 lg:h-96 w-[17vh] md:w-[20vh] flex items-center bg-gray-900 mx-auto"
                    >
                        <BsQuestionLg className="text-[5rem] text-gray-500 mx-auto" />
                    </div>
                )}
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
    );
};

export default ThumbCardComp;
