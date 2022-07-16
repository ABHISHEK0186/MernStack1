import React , {useState, useEffect} from "react";
import axios from "axios"

export const Fetch = () => {

    const [video,setVideo] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);

      
      const fetchData = () => {
      axios.get('http://localhost:5000/popular_videos')
      
    .then((res) => {
      setVideo(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};


  return (
    <>
    <div>
      <h1> Trending Videos</h1>
      <div className='item-container'>
        {video.map((video) => (
          <div className='card' >
            <h3>{video.title}</h3>
            <p>{video.link}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )

}

export default Fetch;