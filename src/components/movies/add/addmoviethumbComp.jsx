import {GrAdd} from 'react-icons/gr';

const AddMovieThumbComp = ({setAddMovieClicked}) => {
  const handleClick = () => {
    setAddMovieClicked(true);
  };

  return (
    <div className="rounded select-none h-64 lg:h-96 w-[17vh] md:w-[13vh] lg:w-[20vh] mx-auto">
      <div
        onClick={handleClick}
        className="relative w-full flex items-center justify-center rounded-lg h-full cursor-pointer text-gray-700 hover:text-gray-500 bg-gray-800/60">
        <GrAdd className="text-[5rem]" />
      </div>
    </div>
  );
};

export default AddMovieThumbComp;
