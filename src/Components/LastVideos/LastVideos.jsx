import React, { useState, useEffect } from "react";

const LastVideos = () => {
  const [Videos, setVideos] = useState([]);

  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY ;
  const channelId = "UCoBd3hkWn3Ez7Xa76niY2pQ";

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=3&type=video`
    )
      .then((response) => response.json())
      .then((data) => {
        const videoItems = data.items.map((item) => ({
          videoId: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high.url,
        }));
        console.log(data);
        setVideos(videoItems);
      })
      .catch((error) => {
        console.error("Error fetching YouTube videos:", error);
      });

    return () => setVideos([]);
  }, []);

  return (
    <div className="flex items-center justify-center px-16 pt-16 mx-2 justify-cente 2xl:mx-52 lg:mx-14 md:mx-14 sm:mx-6">
      {Videos.length === 0 ? (
        <p className="text-3xl text-white font-oswald">Cargando videos...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 bg-[#f9b6f9] rounded-3xl p-4 md:p-10 mb-4">
          <div className="relative h-full col-span-2 mb-4 md:mb-0 md:col-span-2">
            <a
              href={`https://www.youtube.com/watch?v=${Videos[0].videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block"
            >
              <img
                src={Videos[0].thumbnail}
                alt={Videos[0].title}
                className="object-cover w-full h-auto rounded-3xl"
              />
              {/* Título dentro de la imagen con recorte */}
              <div className="absolute inset-x-0 top-0 p-4 overflow-hidden text-xs font-bold text-white sm:text-xs md:text-sm lg:text-base rounded-t-3xl whitespace-nowrap text-ellipsis">
                {Videos[0].title}
              </div>
              {/* Botón de reproducción */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 text-white opacity-80"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 22V2l18 10L3 22z" />
                </svg>
              </div>
            </a>
          </div>
          <div className="flex flex-col space-y-4 ">
            {Videos.slice(1).map((video) => (
              <a
                key={video.videoId}
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="object-cover w-full h-auto rounded-3xl"
                />
                {/* Título dentro de la imagen con recorte */}
                <div className="absolute inset-x-0 top-0 p-2 overflow-hidden text-xs font-bold text-white bg-black bg-opacity-50 sm:text-xs md:text-sm lg:text-base rounded-t-3xl whitespace-nowrap text-ellipsis">
                  {video.title}
                </div>
                {/* Botón de reproducción */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-white opacity-80"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 22V2l18 10L3 22z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LastVideos;
