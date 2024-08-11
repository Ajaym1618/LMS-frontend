import React, { useEffect, useState } from "react";
import { getCourseDetails } from "../../../../api";
import call from '../../../../assets/call.png';
const Videos = () => {
  const [video, setVideo] = useState([]);

  const getData = async () => {
    try {
      const response = await getCourseDetails();
      console.log(response.data);
      setVideo(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    console.log(video);
  }, []);

  return (
    <div className="w-[100%] h-[88vh] bg-white">
      {video.length > 0 ? (
        video.map((item, index) => (
          <div key={index} className="video-container">
            <h3>{item.courseTitle}</h3>
            <p>{item.courseDescription}</p>
            <p>Category: {item.courseCategory}</p>
            <video width="100%" height="auto" controls poster={call}>
              <source
                src={`http://localhost:5000/files/${item.courseVideo}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        ))
      ) : (
        <p>No videos available.</p>
      )}
    </div>
  );
};

export default Videos;
