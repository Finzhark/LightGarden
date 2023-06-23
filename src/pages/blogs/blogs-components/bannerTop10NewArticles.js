import React from 'react';
import { FcLike } from "react-icons/fc";
import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';

function Top10NewArticles({
  index = "",
  title = "",
  total_fav = "",
  category = "",
}) {
  return (
    <div className="w-2/3 sm:w-1/3 md:w-1/5 p-4">
      <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col">
        <p className="text-gray-600">
          <div className="badge badge-outline rounded-md">
            {category}
          </div>
        </p>
        <h1 className="text-lg font-medium mt-2">{title}</h1>
        <div className="flex flex-grow"></div>
        <div className="flex items-baseline gap-2">
          <FcLike className="text-red-500" />
          <p className="text-gray-600 mr-2">{total_fav}</p>
        </div>
      </div>
    </div>
  );
}

function RenderTop10NewArticles({ favorites = [] }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex + 5 >= favorites.length || currentIndex === 5;

  return (
    <div className="mt-4 w-full">
      <h2 className="flex justify-center items-center text-2xl font-bold mb-4 ">
        Top 10 New Articles
      </h2>
      <div className="flex">
        <div className="flex justify-center items-center mt-4 space-x-2 mx-4">
          <button
            className={`flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white w-10 h-10 rounded-full ${
              isPrevDisabled ? 'bg-gray-500 cursor-not-allowed' : ''
            }`}
            onClick={handlePrevSlide}
            disabled={isPrevDisabled}
          >
            <GrLinkPrevious />
          </button>
        </div>
        <div className="backdrop-blur-sm bg-slate-200 shadow-md rounded-lg max-w-screen-2xl mx-auto w-full my-4">
          <div className="flex flex-wrap justify-around favorite-blogs-container">
            {favorites
              .filter((favorite, index) => index <= 9)
              .slice(currentIndex * 5, currentIndex * 5 + 5)
              .map((favorite, index) => (
                <Top10NewArticles
                  key={favorite.id}
                  index={index}
                  title={favorite.title}
                  total_fav={favorite.total_fav}
                  category={favorite.Category.name}
                />
              ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 space-x-2 mx-4">
          <button
            className={`flex items-center justify-center ml-auto bg-blue-500 hover:bg-blue-600 text-white w-10 h-10 rounded-full ${
              isNextDisabled ? 'bg-gray-500 cursor-not-allowed' : ''
            }`}
            onClick={handleNextSlide}
            disabled={isNextDisabled}
          >
            <GrLinkNext />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RenderTop10NewArticles;


// maaf, namanya masih favorite