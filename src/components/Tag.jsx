import axios from 'axios';
import Spinner from "./Spinner"
import React, { useEffect, useState } from 'react'
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIFFY_APP_KEY;

const Tag = () => {
  // const [gif, setGif] = useState()
  // const [loader , setLoader]= useState(false)
  const [tag, setTag]=useState();
  const {gif, loader,fetchData} = useGif(tag)
  // async function fetchData(){
  //   setLoader(true)
  //   const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url
  //     setGif(imageSource);
  //   setLoader(false)
  // }

  useEffect(()=>{
    fetchData()
  },[])

  function clickHandler () {
   fetchData(tag)
  }

  function changeHandler(event){
    setTag(event.target.value);
  }
  return (
    <div className='w-1/2 bg-blue-500 h-[300px] flex flex-col items-center gap-y-5'>
      <h1>
        Random {tag} GIF
      </h1>
      {loader ? (<Spinner/>) : (<img src={gif} width={200}/>)}

      <input
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={changeHandler}
        value={tag}
      />
      
      <button className='w-10/12 bg-white' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Tag
