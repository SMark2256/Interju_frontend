import { AiOutlineCloseSquare, AiOutlineSave } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import { deleteMovieById, getMovies, updateMovie } from "../../../api/requests";
import EditableText from "../utils/editabletext";
import Swal from "sweetalert2";

const DetailsCardComp = (props) => {
    const { selectedMovie, setSelectedMovie, setRefresh } =
        props.detailsCardObj;
    const [updatemsg, setUpdatemsg] = useState("");
    const [deletemsg, setDeletemsg] = useState("");

    const showAlert = (title, value) => {
        Swal.fire({
            title: "Delete Movie",
            text: value == "OK" ? "Succes" : "Error",
            icon: value == "OK" ? "success" : "error",
            confirmButtonText: "OK",
        });
        setUpdatemsg("");
        setDeletemsg("");
        setSelectedMovie(null);
    };

    const handleDelete = () => {
        deleteMovieById(selectedMovie._id)
            .then((res) => {
                setDeletemsg(res.statusText);
                console.log(res.statusText);
                setRefresh(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleUpdate = () => {
        updateMovie(selectedMovie)
            .then((res) => {
                setUpdatemsg(res.statusText);
                console.log(res.statusText);
                setRefresh(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            {deletemsg.length > 0 && showAlert("Delete Movie", deletemsg)}
            {updatemsg.length > 0 && showAlert("Update Movie", updatemsg)}
            <div className="select-none absolute mx-3 md:mx-[10%] lg:mx-[20%] my-5 md:my-20 md:w-[80vh] lg:w-[100vh] md:h-auto w-[95%] flex flex-col gap-2 z-10 bg-gray-950/90 rounded text-white border-2 border-gray-400/30">
                <div className="justify-end flex">
                    <AiOutlineCloseSquare
                        className="text-5xl text-gray-600 hover:text-gray-300 m-2"
                        onClick={() => setSelectedMovie(null)}
                    />
                </div>
                <div className="flex flex-col gap-3 justify-center mx-auto">
                    <span className="text-2xl md:text-3xl font-semibold underline text-center">
                        <EditableText
                            name="title"
                            data={selectedMovie.title}
                            setSelectedMovie={setSelectedMovie}
                            selectedMovie={selectedMovie}
                        />
                    </span>
                    <div className="flex flex-row items-center">
                        <span className="text-sm w-9 md:w-10 h-9 md:h-10 flex items-center border-2 border-white rounded-full mx-auto justify-center">
                            {selectedMovie.pegi}+
                        </span>
                    </div>
                </div>
                <div className="mx-4 justify-start flex flex-row gap-2 pl-4 pr-4 pt-4">
                    <span className="font-bold">Director:</span>
                    <EditableText
                        name="director"
                        data={selectedMovie.director}
                        setSelectedMovie={setSelectedMovie}
                        selectedMovie={selectedMovie}
                    />
                </div>
                <div className="mx-4 justify-start flex flex-row gap-2 pl-4 pr-4 pt-4">
                    <span className="font-bold">Genre:</span>
                    <EditableText
                        name="genre"
                        data={selectedMovie.genre}
                        setSelectedMovie={setSelectedMovie}
                        selectedMovie={selectedMovie}
                    />
                </div>
                <div className="mx-4 justify-start flex flex-col gap-4 pl-4 pr-4 pt-4">
                    <span className="font-bold">Description:</span>
                    <span className="text-left">
                        <EditableText
                            name="description"
                            data={selectedMovie.description}
                            setSelectedMovie={setSelectedMovie}
                            selectedMovie={selectedMovie}
                        />
                    </span>
                </div>
                <div className="mx-4 justify-start flex flex-row gap-4 mb-5 md:mb-20 pl-4 pr-4">
                    <span className="font-bold">Year:</span>
                    <span className="text-left">
                        <EditableText
                            name="year"
                            data={selectedMovie.year}
                            setSelectedMovie={setSelectedMovie}
                            selectedMovie={selectedMovie}
                        />
                    </span>
                </div>
                <div className="mx-auto">
                    <iframe
                        src={selectedMovie.trailer}
                        title="Youtube video"
                        className="md:w-[800px] md:h-[480px] w-[360px] h-[240px] mb-10"
                    />
                </div>
                <div className="w-full grid grid-cols-2 mb-5">
                    <MdDeleteOutline
                        onClick={handleDelete}
                        className="text-gray-600 hover:text-gray-300 text-5xl mx-auto"
                    />
                    <AiOutlineSave
                        onClick={handleUpdate}
                        className="text-gray-600 hover:text-gray-300 text-5xl mx-auto"
                    />
                </div>
            </div>
        </>
    );
};

export default DetailsCardComp;
