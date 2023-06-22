import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FcLike } from "react-icons/fc"


const MostFavoriteArticles = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://minpro-blog.purwadhikabootcamp.com/api/blog/pagFav');
        setArticles(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    const updateVisibleCards = () => {
      const startIndex = currentIndex;
      const endIndex = currentIndex + 5; // Ubah angka ini menjadi 6 jika ingin menampilkan 6 kartu

      setVisibleCards(articles.slice(startIndex, endIndex));
    };

    updateVisibleCards();
  }, [articles, currentIndex]);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex + visibleCards.length >= articles.length;

  return (
    <div className='mt-4 w-full'>
      <h2 className='flex justify-center items-center text-2xl font-bold mb-4 '>Top 10 Most Favorite Articles</h2>

      <div className="flex">
      <div className="flex justify-center items-center mt-4 space-x-2 mx-4">
        <button
          className={`flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white w-10 h-10 rounded-full ${isPrevDisabled ? 'bg-gray-500 cursor-not-allowed' : ''}`}
          onClick={handlePrevSlide}
          disabled={isPrevDisabled}
        >
          <FiChevronLeft />
        </button>
      </div>

        <div className='backdrop-blur-sm bg-slate-200/20 shadow-md rounded-lg max-w-screen-2xl mx-auto w-full my-4'>
          <div className="flex flex-wrap justify-center">

              <div
                className={`w-1/2 sm:w-1/3 md:w-1/5 p-4 ${index === 0 ? 'fadeIn' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col">
                  <p className="text-gray-600">{category}</p>
                  <div className="flex-grow"></div>
                  <h1 className="text-lg font-medium mt-2">{article.title.length > 17 ? `${title.slice(0, 17)}...` : title}</h1>
                  <p className="text-gray-600 mt-1">by {author}</p>
                  <p className="text-gray-600">Total Favorites: {total_fav}</p>
                  <div className="flex items-baseline gap-2">
                    <FcLike className="text-red-500" />
                    <p className="text-gray-600 mr-2">{likes_length}</p>
                  </div>

                </div>
              </div>

          </div>
        </div>

        <div className="flex justify-center items-center mt-4 space-x-2 mx-4">
        
        <button
          className={`flex items-center justify-center ml-auto bg-blue-500 hover:bg-blue-600 text-white w-10 h-10 rounded-full ${isNextDisabled ? 'bg-gray-500 cursor-not-allowed' : ''}`}
          onClick={handleNextSlide}
          disabled={isNextDisabled}
        >
          <FiChevronRight />
        </button>
      </div>
      </div>
    </div>
  );
};

export default MostFavoriteArticles;
