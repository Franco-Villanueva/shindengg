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
        console.log(data)
        setVideos(videoItems);
      })
      .catch((error) => {
        console.error("Error fetching YouTube videos:", error);
      });

    return () => setVideos([]);
  }, []);

  return (
    <div className="videos-container">
      {Videos.length === 0 ? (
        <p>Loading videos...</p>
      ) : (
        Videos.map((video) => (
          <div key={video.videoId} className="video-item">
            <a
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={video.thumbnail} alt={video.title} />
              <h3>{video.title}</h3>
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default LastVideos;
