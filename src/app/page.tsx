'use client'
import React, { useEffect } from 'react'

const Home = () => {

  useEffect(() => {
  
    function getData(){
      const myData = localStorage.getItem('myDataStorage')
      console.log(myData)
      
    }
    getData()
  }, [])
  

  return (
    <div>Home</div>
  )
}

export default Home