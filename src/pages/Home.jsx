import React, { useEffect } from 'react'

const Home = () => {
  useEffect(()=>{
document.title="PUSOM | Purbanchal University School of Management"
  },[]);
  return (
    <>
    <p>Home</p>
    </>
  )
}

export default Home