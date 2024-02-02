import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { fetchData, youtubeOptions } from "../utils/fetchData";

function YogaPage() {
  const [yogas, setYogas] = useState([]);

  useEffect(() => {
    const fetchYogaData = async () => {
      let yogaData = [];

      yogaData = await fetchData(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=yoga`,
        youtubeOptions
      );

      setYogas(yogaData.contents);
    };

    fetchYogaData();
  }, []);

  console.log(yogas);
  return (
    <div className="">
      <Header />

      <div className="flex items-center justify-between flex-wrap h-full max-w-5xl mx-auto mt-5">
        {yogas?.slice(1, 11).map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${
              item?.video?.videoId
                ? item?.video?.videoId
                : item?.video?.channelId
            }`}
            className="max-w-lg flex flex-col items-center hover:scale-110 transition-all duration-200 ease-in-out border border-2-gray p-3 rounded-lg mb-5"
          >
            <img
              src={item?.video?.thumbnails[0]?.url}
              alt={item?.video?.title}
              className="object-contain cursor-pointer rounded-lg mb-3"
              height={item?.video?.thumbnails[0]?.height}
              width={item?.video?.thumbnails[0]?.width}
            />

            <p>{item?.video?.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default YogaPage;
