import MovieComp from "./movieComp";

const ListComp = ({ movies }) => {
    return (
        <div className="bg-black text-white grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-2 md:gap-2 p-5 justify-center text-center relative overflow-auto h-[85vh]">
            {movies != null ? (
                movies.map((movie, index) => (
                    <MovieComp movie={movie} key={index} />
                ))
            ) : (
                <div>no movies</div>
            )}
        </div>
    );
};

export default ListComp;
