import React, { useState } from "react";
import { BsPencilFill } from "react-icons/bs";
import { MdFileDownloadDone } from "react-icons/md";

const EditableText = ({ data }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(data);

    const handleClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const saveChange = () => {
        data = text;
    };

    const handleBlur = () => {
        setIsEditing(false);
    };

    const inputType = () => {
        if (text.length > 50) {
            return (
                <textarea
                    className="text-black px-4 w-full h-32"
                    type="text"
                    value={text}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
                />
            );
        } else {
            return (
                <input
                    className="text-black px-4"
                    type="text"
                    value={text}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
                />
            );
        }
    };

    return (
        <div>
            {isEditing ? (
                <div className="flex flex-row gap-2 items-center">
                    {inputType()}
                    <MdFileDownloadDone
                        className="text-3xl inline-block ml-2 cursor-pointer"
                        onClick={saveChange}
                    />
                </div>
            ) : (
                <div
                    className={`flex ${
                        data.length > 50 ? "flex-col" : "flex-row"
                    } gap-2 items-center`}
                >
                    {text}
                    <BsPencilFill
                        className="text-sm inline-block ml-2 cursor-pointer"
                        onClick={handleClick}
                    />
                </div>
            )}
        </div>
    );
};

export default EditableText;
