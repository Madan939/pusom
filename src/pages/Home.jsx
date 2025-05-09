import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    document.title = "PUSOM | Purbanchal University School of Management";
    animateNumber(setalu, 5000, 3000);
    animateNumber(setef, 45, 3000);
    animateNumber(setyoe, 25, 3000);
    animateNumber(setip, 12, 3000);
  }, []);
  const [alu, setalu] = useState(0);
  const [ef, setef] = useState(0);
  const [yoe, setyoe] = useState(0);
  const [ip, setip] = useState(0);

  const animateNumber = (setter, finalValue, duration) => {
    let start = 0;
    let increment = finalValue / (duration / 30);
    let interval = setInterval(() => {
      start += increment;
      if (start >= finalValue) {
        start = finalValue;
        clearInterval(interval);
      }
      setter(Math.floor(start));
    }, 20);
  };

  return (
    <>
      <section className="relative h-auto w-full mb-[68px] max-md:mb-0">
        <Swiper
          loop={true}
          navigation={true}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            reverseDirection: true,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          className="swiper-1 w-full h-auto"
        >
          <SwiperSlide>
            <div className="relative w-full">
              <img
                src="/assets/images/homepage/MAIN.jpg"
                alt="first"
                className="w-full object-cover brightness-50"
              />
              <div className='hidden md:block'>
                <div className="absolute  inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                  <h1 className="text-2xl my-3 text-[#EAB308]">Purbanchal University School of Management</h1>
                  <p className=" text-6xl font-bold mb-2">Excellence in Education</p>
                  <p className="text-lg">Providing quality education since 1997</p>

                  <div className="mt-8 mb-10">
                    <Link className="font-bold text-white bg-[#EAB308] px-4 py-2 rounded-md mx-2">Explore Programs</Link>
                    <Link className="font-bold hover:text-[#092044] hover:bg-[#fff] text-white border border-white px-4 py-2 rounded-md mx-2">APPLY NOW</Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 max-w-5xl w-full">
                    <div className="p-4 bg-[#092044] text-white bg-opacity-95 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <p>Job Placement</p>
                        <img src="/assets/images/homepage/graduation-cap-svgrepo-com.svg" alt="graduation" className="h-10" />
                      </div>
                      <p className='text-left'>Move with CIM, Morang to provide job opportunities</p>
                    </div>
                    <div className="p-4 bg-[#092044] text-white bg-opacity-95 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <p>Alumni</p>
                        <img src="/assets/images/homepage/user-svgrepo-com.svg" alt="user" className="h-10" />
                      </div>
                      <p className='text-left'>As a graduate of PUSOM, we welcome you to the Alumni Family.</p>
                    </div>
                    <div className="p-4 bg-[#092044] text-white bg-opacity-95 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <p>Resources</p>
                        <img src="/assets/images/homepage/book-svgrepo-com.svg" alt="book" className="h-10" />
                      </div>
                      <p className='text-left'>Wide resources for exchanging & development of your future</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="/assets/images/homepage/BOOK.jpg"
                alt="second"
                className="w-full h-full object-cover brightness-50"
              />
              <div className='hidden md:block'>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                  <h1 className=" my-3 text-[#EAB308] text-2xl ">Innovative Programs & Curriculum</h1>
                  <p className="text-6xl font-bold mb-2">Shaping Future Leaders</p>
                  <p className="text-lg">Preparing students for the challenges of tomorrow</p>
                  <div className="mt-8 mb-10">
                    <Link className="font-bold text-white bg-[#EAB308] px-4 py-2 rounded-md mx-2">Explore Programs</Link>
                    <Link className="font-bold hover:text-[#092044] hover:bg-[#fff] text-white border border-white px-4 py-2 rounded-md mx-2">APPLY NOW</Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 max-w-5xl w-full">
                    <div className="p-4 bg-[#092044] text-white bg-opacity-95 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <p>Job Placement</p>
                        <img src="/assets/images/homepage/graduation-cap-svgrepo-com.svg" alt="graduation" className="h-10" />
                      </div>
                      <p className='text-left'>Move with CIM, Morang to provide job opportunities</p>
                    </div>
                    <div className="p-4 bg-[#092044] text-white bg-opacity-95 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <p>Alumni</p>
                        <img src="/assets/images/homepage/user-svgrepo-com.svg" alt="user" className="h-10" />
                      </div>
                      <p className='text-left'>As a graduate of PUSOM, we welcome you to the Alumni Family.</p>
                    </div>
                    <div className="p-4 bg-[#092044] text-white bg-opacity-95 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <p>Resources</p>
                        <img src="/assets/images/homepage/book-svgrepo-com.svg" alt="book" className="h-10" />
                      </div>
                      <p className='text-left'>Wide resources for exchanging & development of your future</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="/assets/images/homepage/PEOPLE.jpg"
                alt="third"
                className="w-full h-full object-cover brightness-50"
              />
              <div className='hidden lg:block'>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                  <h1 className=" my-3 text-[#EAB308] text-2xl ">A Legacy of Academic Excellence</h1>
                  <p className="text-6xl font-bold mb-2">Join Our Community</p>
                  <p className="text-lg">Be part of a vibrant learning environment</p>
                  <div className="mt-8 mb-10">
                    <Link className="font-bold text-white bg-[#EAB308] px-4 py-2 rounded-md mx-2">Explore Programs</Link>
                    <Link className="font-bold hover:text-[#092044] hover:bg-[#fff] text-white border border-white px-4 py-2 rounded-md mx-2">APPLY NOW</Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 max-w-5xl w-full">
                    <div className="p-4 bg-[#092044] text-white bg-opacity-95 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <p>Job Placement</p>
                        <img src="/assets/images/homepage/graduation-cap-svgrepo-com.svg" alt="graduation" className="h-10" />
                      </div>
                      <p className='text-left'>Move with CIM, Morang to provide job opportunities</p>
                    </div>
                    <div className="p-4 bg-[#092044] text-white bg-opacity-95 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <p>Alumni</p>
                        <img src="/assets/images/homepage/user-svgrepo-com.svg" alt="user" className="h-10" />
                      </div>
                      <p className='text-left'>As a graduate of PUSOM, we welcome you to the Alumni Family.</p>
                    </div>
                    <div className="p-4 bg-[#092044] text-white bg-opacity-95 rounded">
                      <div className="flex justify-between items-center mb-2">
                        <p>Resources</p>
                        <img src="/assets/images/homepage/book-svgrepo-com.svg" alt="book" className="h-10" />
                      </div>
                      <p className='text-left'>Wide resources for exchanging & development of your future</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className='hidden max-md:block container px-4 mx-auto my-6'>
        <div className="grid grid-cols-2 gap-2">
          <Link className="font-bold text-white  text-center bg-[#EAB308]  py-2 rounded-md w-full">Explore Programs</Link>
          <Link className="font-bold border border-[#092044] text-center text-[#092044] py-2 w-full rounded-md ">APPLY NOW</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 max-w-5xl w-full">
          <div className="p-4 bg-[#092044] text-white bg-opacity-95 rounded">
            <div className="flex justify-between items-center mb-2">
              <p>Job Placement</p>
              <img src="/assets/images/homepage/graduation-cap-svgrepo-com.svg" alt="graduation" className="h-10" />
            </div>
            <p className='text-left'>Move with CIM, Morang to provide job opportunities</p>
          </div>
          <div className="p-4 bg-[#092044] text-white bg-opacity-95 rounded">
            <div className="flex justify-between items-center mb-2">
              <p>Alumni</p>
              <img src="/assets/images/homepage/user-svgrepo-com.svg" alt="user" className="h-10" />
            </div>
            <p className='text-left'>As a graduate of PUSOM, we welcome you to the Alumni Family.</p>
          </div>
          <div className="p-4 bg-[#092044] text-white bg-opacity-95 rounded">
            <div className="flex justify-between items-center mb-2">
              <p>Resources</p>
              <img src="/assets/images/homepage/book-svgrepo-com.svg" alt="book" className="h-10" />
            </div>
            <p className='text-left'>Wide resources for exchanging & development of your future</p>
          </div>
        </div>
      </section>
      <section className='container mx-auto px-4 mb-[68px]'>
        <p className='text-[#092044] text-4xl font-bold text-center mb-6'>Our Achievements </p>
        <div className='grid grid-cols-2 gap-7 md:grid-cols-4 place-content-between'>
          {[
            { name: "Alumini", img: "/assets/images/homepage/graduation-cap-svgrepo-com.svg", no: `${alu}` },
            { name: "Expert Faculty", img: "/assets/images/homepage/university-lecture-svgrepo-com.svg", no: `${ef}` },
            { name: "Years of Excellence", img: "/assets/images/homepage/achievement-reward-award-svgrepo-com.svg", no: `${yoe}` },
            { name: "Industry Partners", img: "/assets/images/homepage/building-2-svgrepo-com.svg", no: `${ip}` },
          ].map((item, idx) => (
            <div key={idx + 1} className='shadow-lg text-center py-3 hover:shadow-2xl'>
              <img src={item.img} alt={idx + 1} className='mb-2 h-12 mx-auto' />
              <p className='text-3xl font-bold text-[#092044] mb-2'>{item.no}</p>
              <p className='text=[4b4b4b]'>{item.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className='container mx-auto px-4 mb-[68px] text-center'>
        <p className='text-[#092044] text-4xl font-bold  mb-6'>Welcome To PUSOM</p>
        <p className='md:px-10'><b>PUSOM </b>(Earlier named as Management Campus) is the first constituent campus of Purbanchal University that started BBA program first time in Nepal in 1997. Since 2001, MBA program was offered.</p>
      </section>
      <section className='container mx-auto px-4 mb-[68px]'>
        <p className='text-[#092044] text-4xl font-bold  mb-6 text-center'> Academic Programs</p>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 3000,
            reverseDirection: true,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          modules={[Pagination, Autoplay]}
          className="swiper-2 w-full h-auto"
        >
          {[
            {
              name: "BBA",
              des: "Bachelor of Business Administration (BBA)",
              img: "/assets/images/homepage/program.jpg",
              shift: "Morning & Day Shift",
              credit: "120",
              time: "4 Years",
            },
            {
              name: "MBA",
              des: "Master of Business Administration (MBA)",
              img: "/assets/images/homepage/program.jpg",
              shift: "Morning Shift",
              credit: "70",
              time: "2 Years",
            },
            {
              name: "M.Phil in Management",
              des: "M.Phil program develops knowledge & Skills among students.",
              img: "/assets/images/homepage/program.jpg",
              shift: "Scheduled Programs",
              credit: "30",
              time: "18 Months",
            },
            {
              name: "Ph.D. in Management",
              des: "Ph.D. in management is first time in Purbanchal University and in Eastern Nepal",
              img: "/assets/images/homepage/program.jpg",
              shift: "Morning",
              credit: "30",
              time: "Min 30 Months (After M.Phil)",
            },
          ].map((item, idx) => (
            <SwiperSlide key={idx + 1} className='border rounded-md mb-8'>
              <img src={item.img} alt={item.name} className="w-full mb-2 rounded-t-md" />
              <div className="mx-3 border-b-2 h-20 ">
                <p className="font-bold">{item.name}</p>
                <p className="text-sm">{item.des}</p>
              </div>
              <div className='grid grid-cols-5 p-3 w-full '>
                <div className='col-span-2 text-sm text-[#4b4b4b]'>
                  <p>Courses</p>
                  <p>Classes</p>
                  <p>Shift</p>
                </div>
                <div className='col-span-3 text-right text-sm'>
                  <p>{item.time}</p>
                  <p>Total Credit : {item.credit}</p>
                  <p>{item.shift}</p>
                </div>
                <div></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className='py-[68px] bg-[#092044]'>
        <section className='container mx-auto px-4'>
          <p className='text-white font-bold text-3xl text-center mb-4'>What Our Students Say</p>
          <p className='text-gray-400 text-center mb-10'>Hear from our alumni about their experiences and how PUSOM has shaped their careers</p>
          <Swiper
            spaceBetween={45}
            slidesPerView={3}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 3000,
              reverseDirection: true,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            modules={[Pagination, Autoplay]}
            className="swiper-3 w-full h-auto"
          >
            {[
              {
                name: "Rajesh Sharma",
                des: "MBA Graduate, 2021",
                img: "/assets/images/homepage/director.svg",
                qte:
                  "The MBA program at PUSOM provided me with the knowledge and skills I needed to succeed in my career. The faculty is excellent and the curriculum is comprehensive.",
              },
              {
                name: "Priyanka Singh",
                des: "BBA Graduate, 2022",
                img: "/assets/images/homepage/team1.svg",
                qte:
                  "My experience at PUSOM was transformative. The hands-on learning approach and industry exposure prepared me well for the corporate world.",
              },
              {
                name: "Anil Adhikari",
                des: "M.Phil Graduate, 2020",
                img: "/assets/images/homepage/director.svg",
                qte:
                  "The research opportunities and mentorship at PUSOM helped me develop critical thinking and analytical skills that are invaluable in my work as a consultant.",
              },
              {
                name: "Neha Thapa",
                des: "MBA Graduate, 2023",
                img: "/assets/images/homepage/team1.svg",
                qte:
                  "The network I built during my time at PUSOM has been instrumental in my career growth. The alumni connections and placement support are exceptional.",
              },
            ].map((item,idx) => (
              <SwiperSlide key={idx+1} className='border rounded-md mb-10 bg-[#ffff] px-5 py-4'>
                <img src="/assets/images/homepage/quotation-marks-svgrepo-com.svg" alt="left-quotations" className='h-8 mb-6' />
                <p className='h-60'>{item.qte}</p>
                <div className='flex gap-5 items-center'>
                  <img src={item.img} alt={item.name} className='h-16 w-16 border-2 border-[#EAB308] rounded-full object-cover' />
                  <div>
                    <p className='text-semibold'>{item.name}</p>
                    <p className='text-sm text-[#4b4b4b]'>{item.des}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </section>
      <section className='py-[68px] bg-[#4678B2]'>
        <section className='container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 place-content-between place-items-center'>
          <div className='w-full'>
            <p className='text-4xl font-bold text-white mb-4'>Ready to Shape Your Future?</p>
            <p className='text-lg font-medium text-gray-300 mb-4'>Join PUSOM and embark on a journey of academic excellence and professional growth. Our admissions are now open for the upcoming academic session.</p>
            <div className='flex items-center gap-5 mb-5'>
              <img src="/assets/images/homepage/calender-svgrepo-com.svg" alt="date" className='h-14' />
              <div>
                <p className='text-xl font-bold text-white'>Application Deadline</p>
                <p className='  text-gray-300 '>August 30, 2024 for Fall Semester</p>
              </div>
            </div>
            <div className='flex items-center gap-5 mb-4'>
              <img src="/assets/images/homepage/download-svgrepo-com.svg" alt="download" className='h-14' />
              <div>
                <p className='text-xl font-bold text-white'>Download Brochure</p>
                <p className='  text-gray-300 '>Get detailed information about our programs</p>
              </div>
            </div>
            <div className='flex items-center gap-5'>
              <img src="/assets/images/homepage/mail-svgrepo-com.svg" alt="date" className='h-14' />
              <div>
                <p className='text-xl font-bold text-white'>Contact Admissions</p>
                <p className='  text-gray-300 '>admissions@pusom.edu.np</p>
              </div>
            </div>

          </div>
          <div className='bg-[#ffff] rounded-md p-[40px] w-full'>
            <p className='font-bold text-2xl text-[#092044] mb-6'>Register Your Interest</p>
            <form action="" className='space-y-4'>
              <section>
                <label htmlFor="name">Full Name</label>
                <input type="text" name="" id="name" className='w-full p-2 border focus:outline-none rounded-md' placeholder='enter your name' />
              </section>
              <section>
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="email" className='w-full p-2 border focus:outline-none rounded-md' placeholder='enter email address' />
              </section>
              <section>
                <label htmlFor="phone">Phone</label>
                <input type="text" name="" id="phone" className='w-full p-2 border focus:outline-none rounded-md' placeholder='enter phone number' />
              </section>
              <section>
                <label htmlFor="poi">Program of Intrest</label>
                <select name="" id="poi" className='p-2 w-full border focus:outline-none rounded-md'>
                  <option value="">Select a program</option>
                  <option value="bba">BBA</option>
                  <option value="mba">MBA</option>
                  <option value="mphil">MPhil</option>
                  <option value="phd">Phd</option>
                </select>
              </section>
              <button type='submit' className='w-full py-3 font-bold text-white rounded-md bg-[#092044] hover:bg-[#132a4d] flex gap-2 items-center justify-center'>Submit Application <img src="/assets/images/homepage/right-arrow-svgrepo-com.svg" alt="right-arrow" className='h-5' /></button>
            </form>
          </div>
        </section>
      </section>
    </>

  );
};

export default Home;
