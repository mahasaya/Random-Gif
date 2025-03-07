import axios from 'axios';

import React, { useEffect, useState } from 'react'

const API_KEY = process.env.REACT_APP_GIFFY_APP_KEY;
const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState()
  const [loader , setLoader]= useState(false)
  
  async function fetchData(tag){
    setLoader(true)
    const {data} = await axios.get(tag ? `${url}&tag=${tag}`: url);
    const imageSource = data.data.images.downsized_large.url
      setGif(imageSource);
    setLoader(false)
  }

  useEffect(()=>{
    fetchData("car")
  },[])


  return {gif, loader, fetchData}

}



export default useGif
