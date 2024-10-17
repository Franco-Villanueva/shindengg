import React, { useState, useEffect } from "react";

const LastVideos = () => {
  const [Videos, setVideos] = useState([]);

  const apiKey = "AIzaSyCe4kEjZfGS57A1iXNHNGqoOzKrtuh9ku0";
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
          thumbnail: item.snippet.thumbnails.medium.url,
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
    <div className="flex items-center justify-center min-h-96 bg-[#1b1a1b] p-2 pt-16 xl:mx-52 lg:mx-24 md:mx-14 sm:mx-6">
      {Videos.length === 0 ? (
        <p>Loading videos...</p>
      ) : (
        <div className="grid grid-cols-3 gap-4 bg-[#f9b6f9] rounded-3xl p-10">
          <div className="h-full col-span-2">
            <a
              href={`https://www.youtube.com/watch?v=${Videos[0].videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={Videos[0].thumbnail}
                alt={Videos[0].title}
                className="object-cover w-full h-auto rounded-3xl"
              />
              <h3 className="mt-2 text-lg text-white">{Videos[0].title}</h3>
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            {Videos.slice(1).map((video) => (
              <a
                key={video.videoId}
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="object-cover w-full h-auto rounded-3xl"
                />
                <h3 className="mt-2 text-sm text-white">{video.title}</h3>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LastVideos;
