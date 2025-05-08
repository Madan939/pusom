import Ribbon from '../components/Ribbon';
import React, { useEffect, useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

  const Graduation = () => {
    const text1 = "Gallery";
    const text2 = "Gallery";
    const text3 = "Graduation-Ceremony";
    const link="/gallery";
  
    useEffect(() => {
      document.title = " Graduation-Ceremony | Purbanchal University School of Management";
    }, []);
  
    const images = [
      { img: "/assets/images/gallery/graduation-ceremony/g1.svg", id: 1 },
      { img: "/assets/images/gallery/graduation-ceremony/g2.svg", id: 2 },
      { img: "/assets/images/gallery/graduation-ceremony/g3.svg", id: 3 },
      { img: "/assets/images/gallery/graduation-ceremony/g4.svg", id: 4 },
      { img: "/assets/images/gallery/graduation-ceremony/g5.svg", id: 5 },
      { img: "/assets/images/gallery/graduation-ceremony/g6.svg", id: 6 },
    ];
  
    const [index, setIndex] = useState(-1);
  
    return (
      <>
        <Ribbon text1={text1} text2={text2} text3={text3} link={link}/>
  
        <section className="container grid grid-cols-1 my-[68px] md:grid-cols-3 gap-8 px-4">
          {images.map((item, idx) => (
            <img
              key={item.id}
              src={item.img}
              alt={`Graduation ${item.id}`}
              className="cursor-pointer rounded shadow-md"
              onClick={() => setIndex(idx)}
            />
          ))}
        </section>
  
        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={images.map((img) => ({ src: img.img }))}
          plugins={[Thumbnails]}
        />
      </>
    );
  };
  
  export default Graduation;