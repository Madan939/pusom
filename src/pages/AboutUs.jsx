import React, { useEffect } from 'react'
import Ribbon from '../components/Ribbon'

const AboutUs = () => {
    const text1 = "About Us";
    const text3 = "About";
    useEffect(() => {
        document.title = "PUSOM About | Purbanchal University School of Management"
    }, []);
    return (
        <>
            <Ribbon text1={text1} text3={text3} />
            <section className='my-[68px] container px-4 mx-auto'>
                <p className='text-[35px] font-bold mb-4 max-md:text-[20px]'>About PUSOM</p>
                <p className='text-justify mb-4 text-[17px]'>
                    Purbanchal University, School of Management (PUSOM) is established by the Purbanchal University Act 1994 with a mission to establish itself as a leading university of academic excellence. The Faculty of Management (FOM) of Purbanchal University offers professional, functional, and practical programs and courses.</p>
                <p className='text-justify text-[17px]'>
                    The School of Management offers a wide range of programs designed to be professional, skill-oriented, and industry-relevant. These academic offerings aim to blend theoretical knowledge with practical application, equipping students with the competencies required to meet the dynamic demands of the global job market. With a commitment to academic innovation, quality teaching, and student-focused learning, PUSOM fosters a culture of critical thinking, ethical leadership, and lifelong learning
                </p>
            </section>
            <section className='w-full bg-[#172554] '>
                <div className='container gap-2 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                    <div className='w-full hidden max-md:block'>
                        <img src="/assets/images/about/mission.svg" alt="mission" className='w-full h-auto' />
                    </div>
                    <div className=' max-md:w-full  flex justify-center items-center '>
                        <div className='text-white px-4'>
                            <p className='text-[30px] max-md:text-[20px] font-bold mb-4 text-center'>Our Mission</p>
                            <p className='text-[17px] '>To provide transformative management education that empowers future leaders with critical thinking, ethical values, and practical skills, while fostering innovation, entrepreneurship, and sustainable development in Nepal and beyond. Our mission is to cultivate a dynamic academic environment that nurtures lifelong learning, industry collaboration, and global competence</p>
                        </div>
                    </div>
                    <div className='hidden lg:block w-full'>
                        <img src="/assets/images/about/mission.svg" alt="mission" className='w-full h-auto' />
                    </div>
                </div>

            </section>
            <section className=' bg-[#EAB308] mb-[68px]'>
                <div className='container  mx-auto grid grid-cols-1 md:grid-cols-2'>
                    <div className=''>
                        <img src="/assets/images/about/vision.svg" alt="vision" className='w-full h-auto' />
                    </div>
                    <div className='  flex justify-center items-center '>
                        <div className='text-white px-4'>
                            <p className='text-[30px] max-md:text-[20px] font-bold mb-4 text-center'>Our Vision</p>
                            <p className='text-right text-[17px] max-md:text-left'>We are committed to fostering a learning environment that blends academic rigor with practical relevance, encouraging critical thinking, entrepreneurial spirit, and social responsibility. Our vision is to empower future professionals with the skills, values, and mindset needed to succeed in an ever-evolving global economy.</p>
                        </div>
                    </div>
                </div>

            </section>
            <section className='container mx-auto flex flex-wrap justify-around items-center mb-[68px]'>
                <div className='md:w-[35%] max-md:w-[90%] mx-auto'>
                    <img src="/assets/images/about/director.svg" alt="director" className='h-auto w-full' />
                </div>
                <div className='md:w-[45%] max-md:w-[90%] mx-auto'>
                    <p className='text-[30px] max-md:text-[20px] font-bold mb-4'>Message from the Executive Director</p>
                    <p className='mb-4 text-[17px] text-[#4b4b4b]'>At PUSOM, we are driven by a mission to nurture competent, ethical, and socially responsible leaders who can contribute to national development and global progress. Our programs are designed to blend academic rigor with practical experience, ensuring that our graduates are prepared to meet the challenges of a rapidly evolving world.</p>
                    <p className=' text-[#4b4b4b]'>Mr.Prashant Kumar Lal <br />
                        Executive Director</p>
                </div>
            </section>
            <section className='container px-4 mx-auto text-center mb-[68px]'>
                <p className='text-[30px] max-md:text-[24px] font-bold mb-6'>Why PUSOM?</p>
                <p className='text-[25px] font-bold mb-4'>Reputed Academic Excellence</p>
                <p className='mb-4 text-[17px] text-[#4b4b4b]'>PUSOM is a constituent school of Purbanchal University, known for its commitment to delivering high-quality management education that blends theory with real-world application.</p>
                <p className='text-[25px] font-bold mb-4'>Industry-Oriented Programs</p>
                <p className='mb-4 text-[17px] text-[#4b4b4b]'>With updated curricula aligned with global standards and local relevance, PUSOM offers programs that equip students with the knowledge and skills demanded by today’s job market. </p>
                <p className='text-[25px] font-bold mb-4'> Experienced Faculty</p>
                <p className='mb-4 text-[17px] text-[#4b4b4b]'>Our professors and lecturers are not just academics, but also industry experts, researchers, and mentors who are dedicated to shaping the next generation of business leaders.</p>
                <p className='text-[25px] font-bold mb-4'> Practical Learning Environment</p>
                <p className='mb-4 text-[17px] text-[#4b4b4b]'>Case studies, project work, internships, workshops, and guest lectures ensure students learn by doing—not just by listening.</p>
                <p className='text-[25px] font-bold mb-4'>Leadership & Personality Development</p>
                <p className=' text-[17px] text-[#4b4b4b]'>Beyond academics, we focus on communication skills, ethics, team dynamics, and leadership through clubs, seminars, and real-life simulations.</p>
            </section>
            <section className='mb-[68px] container px-4 mx-auto'>
                <p className='text-[30px] max-md:text-[20px] font-bold mb-8 text-center'>Team of PUSOM</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-md:gap-y-6 lg:gap-16 place-content-between'>
                    {[
                        { image: "/assets/images/about/team1.svg", name: "Ms. Sonila Shakya", date: "2076.05.18 to 2077.09.20" },
                        { image: "/assets/images/about/team2.svg", name: "Prof. Dr. Biju Kr. Thapalia", date: "2075.05.10 to 2076-05.01" },
                        { image: "/assets/images/about/team3.svg", name: "Dr. Uttam Kr. Regmi", date: "2075.05.10 to 2076-05.01" },
                        { image: "/assets/images/about/team4.svg", name: "Mr. Sudhir Kumar Kafle", date: "2067.02.09 to 2071-04.28" },
                        { image: "/assets/images/about/team5.svg", name: "Mr. Dinesh Raj Subedi", date: "2064.08.12 to 2066.12.12" },
                        { image: "/assets/images/about/team6.svg", name: "Mr. Sanjesh Prasad Koirala", date: "2058.09.15 to 2064.06.20" },
                        { image: "/assets/images/about/team7.svg", name: "Mr. Dev Raj Shrestha", date: "2054.09.15 to 2058.09.14" },
                    ].map((item, idx) => (
                        <div key={idx + 1} className='text-center'>
                            <img src={item.image} alt={item.name} className='mb-2' />
                            <p className='font-semibold text-[20px]'>{item.name}</p>
                            <p className='text-[#4b4b4b]'>{item.date}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default AboutUs