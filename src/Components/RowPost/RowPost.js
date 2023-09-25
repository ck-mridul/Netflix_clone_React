import React, { useEffect, useState } from 'react'
import axios from '../../axios';
import YouTube from 'react-youtube';
import "./RowPost.css"
import { API_KEY,img_Url } from '../../constants/constants';

function RowPost(props) {
  const [movies, setmovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios.get(props.url).then(response=>{
      setmovies(response.data.results)
    },
    console.log('jij')
    )
  },[props.url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
    
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if (response.data.results.length !==0){
        setUrlId(response.data.results[0])
      }else{
        console.log("Empty")
      }

    })
  }
  return (
    <div className='row' >
      <h2>{props.title}</h2>
        <div className="posters">
        {movies.map((obj, idx)=>

        <img onClick={()=>handleMovie(obj.id)} key={idx} className={props.isSmall ? 'smallPoster' :'poster'} src={`${img_Url+obj.backdrop_path}`} alt="poster" />
        )}
        </div>
        { urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost