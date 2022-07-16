import React, {useState} from 'react'
import axios from "axios";

export const Search = () => {

    const [title,setTitle] = useState({
        title:"" 
      });

      const [video,setVideo] = useState([]); 
      

      let name, value;
      const handleInputs = (e) =>{
        name = e.target.name;
        value = e.target.value;
    
        setTitle({...title, [name]:value})
    
      }  

      const fetchData = () => {
        const params = title
        axios.get('http://localhost:5000/filter_videos',{ params })
        
      .then((res) => {
        setVideo(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };




  return (
    <>
    <div>
        <h1 className='title'> Items based on your search</h1>

    </div>
    <div className="form-group mt-2">
    <label htmlFor="search">
    <i class="zmdi zmdi-search material-icons-name" ></i>
    </label>{" "}
     
    <input
    type="text"
    name="title"
    id="Title"
    value={title.title} 
    onChange = {handleInputs}
    placeholder="Enter Keyword"
    ></input>

     <input
     type="submit"
     name="Search"
     id="Search"
     className="form-submit"
     value="Search"
     onClick={fetchData}
    />
    </div>

    <div className='response'>
    {video.map((video) => (
          <div className='card' >
            <h3>{video.title}</h3>
            <p>{video.link}</p>
          </div>
        ))}
    </div>

    </>
  )
}

export default Search;
