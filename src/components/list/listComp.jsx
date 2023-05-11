import { useState } from "react";

const ListComp = ({ movies }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="bg-black text-white grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-6 md:gap-2 p-2 justify-center text-center">
            {movies != null ? (
                movies.map((movie) => {
                    return (
                        <div className={`rounded select-none`} key={movie.id}>
                            <img
                                className={`transition duration-500 ease-in-out p-1 rounded-lg h-36 md:h-60 mx-auto ${
                                    isHovered
                                        ? "hover:animate-anim-zoom-in "
                                        : "animate-anim-zoom-out"
                                }`}
                                src={movie.image}
                                alt={movie.title}
                                onClick={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            />
                            {/* <p>{movie.title}</p>
                            <p className="rounded-full border-2 border-black mx-auto flex items-center justify-center w-10 h-10">
                                {movie.pegi}+
                            </p> */}
                        </div>
                    );
                })
            ) : (
                <div>no movies</div>
            )}
        </div>
    );
};

export default ListComp;
