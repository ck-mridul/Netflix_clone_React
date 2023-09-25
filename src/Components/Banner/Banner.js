import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY, img_Url } from '../../constants/constants'
import "./Banner.css"

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() =>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const randomMovie = Math.floor(Math.random() * response.data.results.length);
      setMovie(response.data.results[randomMovie])
    })
  },[]
)

  return (
    <div 
    style={{backgroundImage:`url(${movie ? img_Url+movie.backdrop_path :""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_button'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner