import { AiOutlineCloseSquare, AiOutlineSave } from "react-icons/ai";
import { useState } from "react";
import Swal from "sweetalert2";
import { postMovie } from "../../../api/requests";

const AddMovieDetailsComp = (props) => {
    const { setAddMovieClicked, setRefresh } = props.addmovieObj;
    const [alertmsg, setAlertmsg] = useState("");
    const [newMovie, setNewMovie] = useState({
        title: "",
        director: "",
        genre: "",
        pegi: "",
        image: "",
        description: "",
        trailer: "",
        year: "",
    });

    const handleExit = () => {
        setAddMovieClicked(null);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewMovie({ ...newMovie, [name]: value });
    };

    const handleSubmit = () => {
        postMovie(newMovie)
            .then((res) => {
                setAlertmsg(res.statusText);
            })
            .catch((err) => console.log(err));
        setRefresh(true);
    };

    const showAlert = (value) => {
        Swal.fire({
            title: "New Movie Upload",
            text: value == "Created" ? "Succes" : "Error",
            icon: value == "Created" ? "success" : "error",
            confirmButtonText: "OK",
        });
        setAlertmsg("");
        handleExit();
    };

    return (
        <>
            {alertmsg.length > 0 && showAlert(alertmsg)}
            <div className="select-none absolute mx-3 text-xl md:text-2xl md:mx-[25%] lg:mx-[30%] my-32 md:my-20 md:w-[50vh] lg:w-[80vh] md:h-auto w-[95%] flex flex-col gap-2 z-10 bg-gray-950/90 rounded text-white border-2 border-gray-400/30">
                <div className="justify-end flex">
                    <AiOutlineCloseSquare
                        onClick={handleExit}
                        className="text-5xl text-gray-600 hover:text-gray-300 m-2"
                    />
                </div>
                <div className="mx-auto">
                    <div className="text-center text-3xl font-bold mb-5 underline">
                        New Movie
                    </div>
                    <div className="flex flex-col gap-4 justify-start px-4">
                        <div className="flex flex-row items-center">
                            <label className="w-32 md:w-40" htmlFor="title">
                                Title:
                            </label>
                            <input
                                name="title"
                                type="text"
                                onChange={handleInputChange}
                                placeholder=""
                                className="text-left px-4 rounded text-black w-56 md:w-96"
                            />
                        </div>
                        <div className="flex flex-row items-center">
                            <label className="w-32 md:w-40" htmlFor="pegi">
                                Pegi:
                            </label>
                            <input
                                name="pegi"
                                type="text"
                                onChange={handleInputChange}
                                placeholder=""
                                className="text-left px-4 rounded text-black w-56 md:w-96"
                            />
                        </div>

                        <div className="justify-start flex flex-row">
                            <label className="w-32 md:w-40" htmlFor="image">
                                Image:
                            </label>
                            <input
                                name="image"
                                type="url"
                                onChange={handleInputChange}
                                placeholder="https://example.com"
                                className="text-left px-4 rounded text-black w-56 md:w-96"
                            />
                        </div>
                        <div className="justify-start flex flex-row">
                            <label className="w-32 md:w-40" htmlFor="director">
                                Director:
                            </label>
                            <input
                                name="director"
                                type="text"
                                onChange={handleInputChange}
                                placeholder=""
                                className="text-left px-4 rounded text-black w-56 md:w-96"
                            />
                        </div>
                        <div className="justify-start flex flex-row">
                            <label className="w-32 md:w-40" htmlFor="year">
                                Year:
                            </label>
                            <input
                                name="year"
                                type="text"
                                onChange={handleInputChange}
                                placeholder=""
                                className="text-left px-4 rounded text-black w-56 md:w-96"
                            />
                        </div>
                        <div className="justify-start flex flex-row">
                            <label className="w-32 md:w-40" htmlFor="genre">
                                Genre:
                            </label>
                            <input
                                name="genre"
                                type="text"
                                onChange={handleInputChange}
                                placeholder=""
                                className="text-left px-4 rounded text-black w-56 md:w-96"
                            />
                        </div>
                        <div className="justify-start flex flex-row">
                            <label
                                className="w-32 md:w-40"
                                htmlFor="description"
                            >
                                Description:
                            </label>
                            <textarea
                                name="description"
                                type="text"
                                onChange={handleInputChange}
                                placeholder=""
                                className="text-left px-4 rounded text-black w-56 md:w-96"
                            />
                        </div>
                        <div className="justify-start flex flex-row mb-10">
                            <label className="w-32 md:w-40" htmlFor="trailer">
                                Youtube:
                            </label>
                            <input
                                name="trailer"
                                type="url"
                                onChange={handleInputChange}
                                placeholder="https://example.com"
                                className="text-left px-4 rounded text-black w-56 md:w-96"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full mb-5">
                    {/* <MdDeleteOutline className="text-gray-600 hover:text-gray-300 text-4xl mx-auto" /> */}
                    <AiOutlineSave
                        onClick={handleSubmit}
                        className="text-gray-600 hover:text-gray-300 text-5xl mr-2 ml-auto"
                    />
                </div>
            </div>
        </>
    );
};

export default AddMovieDetailsComp;
