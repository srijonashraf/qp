import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=442aa587f6f943e38e381279533fda09`
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <Carousel
      autoPlay
      interval={5000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      className="mt-2"
    >
      {news.map((article, index) => (
        <div key={index} className="relative">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-opacity-75 bg-black text-white p-5">
            <h2 className="text-sm mb-2">{article.title}</h2>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-2 font-medium"
            >
              See More
            </a>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default NewsFeed;
