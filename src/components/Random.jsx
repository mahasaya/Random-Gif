import axios from 'axios';
import Spinner from "./Spinner"
import React, { useEffect, useState } from 'react'
import useGif from '../hooks/useGif';
const API_KEY = process.env.REACT_APP_GIFFY_APP_KEY;

const Random = () => {
  // const [gif, setGif] = useState()
  // const [loader , setLoader]= useState(false)
  // async function fetchData(){
  //   setLoader(true)
  //   const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url
  //     setGif(imageSource);
  //   setLoader(false)
  // }

  const {gif, loader,fetchData} = useGif()

  useEffect(()=>{
    fetchData()
  },[])
  function clickHandler () {

   fetchData()
  }
  return (
    <div className='w-1/2 bg-green-500 h-[300px] flex flex-col items-center gap-y-5'>
      <h1>
        Random GIF
      </h1>
      {loader ? (<Spinner/>) : (<img src={gif} width={200}/>)}
      
      <button className='w-10/12 bg-white' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random
