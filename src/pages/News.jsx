import React, { useEffect } from 'react'
import Ribbon from '../components/Ribbon';

const News = () => {
  const text1 = "News";
  useEffect(() => {
    document.title = "PUSOM News | Purbanchal University School of Management"
  }, []);
  return (
    <>
      <Ribbon text1={text1} text3={text1} />
      <section className='my-[68px] mx-auto px-4 container grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='text-center'>
          <img src="/assets/images/news/ph1.svg" alt="trip" className='w-full h-auto mb-6' />
          <p className='text-[#4b4b4b] mb-6'>Events </p>
          <p className='text-[25px] font-bold mb-4'>International trip to Thailand 2025</p>
          <p className='text-[#4b4b4b] '>This event is about the student who are chosen for the international tour to Thailand  2025 and  </p>
        </div>
        <div className='grid grid-cols-2 gap-6'>
          <div>
            <img src="/assets/images/news/ph2.svg" alt="carnival" className='mb-3' />
            <p className='text-[#4b4b4b] '>News</p>
            <p className='text-[20px] font-bold'>Spring Carnival 2025 Is going on this fresh Summer</p>
          </div>
          <div>
            <img src="/assets/images/news/ph3.svg" alt="carnival" className='mb-3' />
            <p className='text-[#4b4b4b] '>Event</p>
            <p className='text-[20px] font-bold'>Build a career in Cybersecurity this week</p>
          </div>
          <div>
            <img src="/assets/images/news/ph4.svg" alt="carnival" className='mb-3' />
            <p className='text-[#4b4b4b] '>News</p>
            <p className='text-[20px] font-bold'>PSUOM HOLI-2025</p>
            <p className='text-[#4b4b4b] '>Come join us in this special colorful day  </p>
          </div>
          <div>
            <img src="/assets/images/news/ph5.svg" alt="carnival" className='mb-3' />
            <p className='text-[#4b4b4b] '>Event & News</p>
            <p className='text-[20px] font-bold'>Graduation Ceremony -2024 </p>
            <p className='text-[#4b4b4b] '>Biggest event of the year that are most awaited .</p>
          </div>
        </div>
      </section>
      <section className='container mb-[68px] mx-auto px-4  grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className=''>
          <img src="/assets/images/news/ph6.svg" alt="director" className='mb-4' />
          <p className='text-[24px] font-bold mb-4'>The Dean of PUSOM hosted an open forum with students to discuss academic concerns, internship support, and suggestions for better engagement. Students appreciated the transparent communication.</p>
        </div>
        <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-3 mb-4'>
            <img src="/assets/images/news/ph7.svg" alt="logo" className='w-[85%] max-md:w-full'/>
            <div>
              <p className='text-[20px] font-bold mb-2'>Academic Announcements</p>
              <p className='text-[#4b4b4b] '>Semester start/end dates
                Admission openings and deadlines
                Exam schedules, results publication
                New programs or specializations</p>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-3 mb-4'>
            <img src="/assets/images/news/ph8.svg" alt="logo" className='w-[85%] max-md:w-full'/>
            <div>
              <p className='text-[20px] font-bold mb-2'>Events & Activities</p>
              <p className='text-[#4b4b4b] '>Seminars, webinars, workshops
                Guest lectures by industry experts
                Cultural, sports, or management fests
                Graduation ceremonies and orientation programs</p>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-3'>
            <img src="/assets/images/news/ph9.svg" alt="logo" className='w-[85%] max-md:w-full'/>
            <div>
              <p className='text-[20px] font-bold mb-2'>Events & Activities</p>
              <p className='text-[#4b4b4b] '>Student or faculty awards
                Successful research or publications
                Alumni accomplishments
                Partnered projects or collaborations</p>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default News