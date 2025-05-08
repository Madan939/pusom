import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-[#092044] w-full text-white py-10'>
      <section className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4'>
        <div>
          <img src="/assets/images/footer/logo.svg" alt="Purbanchal University Logo" className='h-16 w-auto mb-4' />
          <p className='text-sm leading-relaxed'>
            Purbanchal University was established by the Purbanchal University Act 1994 with a mission to establish as a leading university of academic excellence.
            <br />
            <Link to="/about-us" className='hover:text-[#EAB308] underline ml-1 mt-1'>Read More</Link>
          </p>
          <div className='mt-2 flex gap-2'>
            {[{ image: "/assets/images/footer/Facebook.svg", path: "https://www.facebook.com/pusombrtnepal", name: "Facebook" },
            { image: "/assets/images/footer/twitter.svg", path: "https://pusom.edu.np/research#", name: "Twitter" },
            { image: "/assets/images/footer/Mail.svg", path: "https://mail.yandex.com/", name: "Mail" },
            { image: "/assets/images/footer/Linkedin.svg", path: "", name: "LinkedIn" },
            ].map((item, idx) => (
              <Link to={item.path} key={idx + 1}>
                <img src={item.image} alt={item.name} className='h-5' />
              </Link>
            ))
            }

          </div>
        </div>
        <div>
          <p className='text-lg font-bold mb-4'>Browse More</p>
          <ul className='space-y-2'>
            {[
              { name: "Faculties", path: "/" },
              { name: "Research & Publication", path: "/" },
              { name: "News & Publication", path: "/" },
              { name: "Resource", path: "/" },
            ].map((item, idx) => (
              <li key={idx} className='flex items-center gap-2'>
                <img src="/assets/images/footer/arrow.svg" alt="Arrow icon" className='h-4 w-4' />
                <Link to={item.path} className='hover:text-[#EAB308] transition'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div>

          </div>
        </div>
        <div>
          <ul className='space-y-2'>
            {[
              { name: "Achievement", path: "/" },
              { name: "Alumini", path: "/" },
              { name: "Faculties", path: "/" },
              { name: "Publication", path: "/" },
              { name: "Download", path: "/download" },
            ].map((item, idx) => (
              <li key={idx} className='flex items-center gap-2'>
                <img src="/assets/images/footer/arrow.svg" alt="Arrow icon" className='h-4 w-4' />
                <Link to={item.path} className='hover:text-[#EAB308] transition'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className='text-lg font-bold mb-4'>Contact Us</p>
          <ul className='space-y-2'>
            {[
              { name: "Purbanchal University,School of Management", path: "", image: "/assets/images/footer/School.svg" },
              { name: "Biratnagar,Teenpani,Nepal", path: "", image: "/assets/images/footer/Map.svg" },
              { name: "+977-21-574027", path: "tel:+977-21-574027", image: "/assets/images/footer/Phone.svg" },
              { name: "info@pusom.edu.np", path: "mailto:info@pusom.edu.np", image: "/assets/images/footer/ContactMail.svg" },

            ].map((item, idx) => (
              <li key={idx} className='flex items-center gap-3'>
                <img src={item.image} alt={item.name} className='h-[1.5rem]' />
                <Link to={item.path} className='hover:text-[#EAB308] transition'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
