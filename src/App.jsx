import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'
const App = () => {

  
  return (
    <div className=' w-full h-screen background relative flex items-center flex-col '>
      <h1 className='bg-white rounded-lg w-11/12 text-center mt-[40px]'>
        Random GIF 
      </h1>
      
      <div className='w-full flex flex-col items-center'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App
