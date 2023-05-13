import { AiOutlineCloseSquare, AiOutlineSave } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import EditableText from "./editabletext";

const DetailsCardComp = (props) => {
    const { selectedMovie, setSelectedMovie } = props.detailsCardObj;

    return (
        <div className="select-none absolute mx-3 md:mx-[20%] my-10 md:my-20 md:w-[100vh] md:h-auto w-[95%] flex flex-col gap-2 z-10 bg-gray-950/90 rounded text-white">
            <div className="justify-end flex">
                <AiOutlineCloseSquare
                    className="text-4xl text-gray-600 hover:text-gray-300 m-2"
                    onClick={() => setSelectedMovie(null)}
                />
            </div>
            <div className="flex flex-col gap-3 justify-center mx-auto">
                <p className="text-2xl md:text-3xl font-semibold underline text-center">
                    <EditableText data={selectedMovie.title} />
                </p>
                <div className="flex flex-row items-center">
                    <p className="text-sm w-9 md:w-10 h-9 md:h-10 flex items-center border-2 border-white rounded-full mx-auto justify-center">
                        {selectedMovie.pegi}+
                    </p>
                </div>
            </div>
            <div className="mx-4 justify-start flex flex-row gap-2 pl-4 pr-4 pt-4">
                <span className="font-bold">Director:</span>
                <EditableText data={selectedMovie.director} />
            </div>
            <div className="mx-4 justify-start flex flex-row gap-2 pl-4 pr-4 pt-4">
                <span className="font-bold">Genre:</span>
                <EditableText data={selectedMovie.genre} />
            </div>
            <div className="mx-4 justify-start flex flex-col gap-4 mb-5 md:mb-20 p-4">
                <span className="font-bold">Description:</span>
                <span className="text-left">
                    <EditableText data={selectedMovie.description} />
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
                <MdDeleteOutline className="text-gray-600 hover:text-gray-300 text-4xl mx-auto" />
                <AiOutlineSave className="text-gray-600 hover:text-gray-300 text-4xl mx-auto" />
            </div>
        </div>
    );
};

export default DetailsCardComp;
