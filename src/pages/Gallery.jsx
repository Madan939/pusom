import React, { useEffect } from 'react'
import Ribbon from '../components/Ribbon';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const text1 = "Gallery";
    useEffect(() => {
      document.title = "PUSOM Gallery | Purbanchal University School of Management"
    }, []);
  return (
    <>
    <Ribbon text1={text1} text3={text1} />
    <p className='my-6 font-semibold text-4xl text-center'>
      Albums
    </p>
    <section className='container px-4 mx-auto mb-[68px] grid grid-cols-1 md:grid-cols-3 gap-8'>
      {[
        {image:"/assets/images/gallery/graduation.svg",name:"Graduation Ceremony -2024 ",link:"/gallery/graduation-ceremony"},
        {image:"/assets/images/gallery/holifile.svg",name:"HOLI Festival -2025",link:"/gallery/holi"},
        {image:"/assets/images/gallery/cyberfile.svg",name:"Cybersecurity -2025",link:"/gallery/cyber-security"},
      ].map((item,idx)=>(
        <Link to={item.link} key={idx+1} className='shadow hover:shadow-lg'>
          <img src={item.image} alt={item.name} className='mb-3'/>
          <p className='text-[24px] font-semibold text-center mb-2'>{item.name}</p>
        </Link>
      ))}
    </section>
    </>
  )
}

export default Gallery