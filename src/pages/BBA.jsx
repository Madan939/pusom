import React, { useEffect } from 'react'
import Ribbon from '../components/Ribbon';
import { Link } from 'react-router-dom';

const BBA = () => {
    const text1 = "Bachelor of Business Administration";
    const text2 = "Course";
    const text3 = "bba";
    const link="/course";
       useEffect(()=>{
            document.title="PUSOM Bba | Purbanchal University School of Management"
        },[]);
    return (
        <>
            <Ribbon text1={text1} text2={text2} text3={text3} link={link}/>
            <section className='container my-[68px] mx-auto px-4 pb-[60px] border-b-2 grid grid-cols-1 md:grid-cols-2 place-items-center'>
                <div className='max-md:mb-10'>
                    <p className='text-[40px] font-bold text-[#4678B2] mb-12'>Bachelor of Business Administration (BBA)</p>
                    <Link to="" className='border-[1.5px] text-[17px] rounded-md py-3 px-8 border-[#4678B2] font-semibold text-[#4678B2] hover:bg-[#4678B2] hover:text-white transition duration-300 ease-in-out' >APPLY NOW</Link>
                </div>
                <div className=' '>
                    <img src="/assets/images/course/Group1.svg" alt="bba" className='w-full' />
                   
                </div>
            </section>
            <section className='container mb-[68px] mx-auto px-4 grid grid-cols-1 md:grid-cols-5 place-items-center md:gap-3'>
                <div className='col-span-3 max-md:mb-10'>
                    <p className='text-[30px] max-md:text-[20px] font-bold mb-6'>Introduction</p>
                    <p className='mb-6 text-[17px] text-[#4b4b4b]'>The BBA program specifically aims to provide adequate basic understanding about Management Education among the students, prepare students to exploit opportunities being newly created in the Management Profession, train the students in communication skills effectively, inculcate knowledge, skill, and attitude in students so that they become scientifically approached, result oriented, and socially responsive management professionals as well as inculcate entrepreneurial skills.</p>
                    <p className='text-[30px] max-md:text-[20px] font-bold mb-6'>Curricular Structure of BBA</p>
                    <p className='mb-6 text-[17px] text-[#4b4b4b]'>The BBA program has been designed at 120 credit hours with 40 course components including internship. Each course component has a weight of 2 or 3 credit hours requiring a minimum of 32 or 48 direct class contact hours per semester and 5 credit hours for Internship.</p>
                    <p className='text-[30px] max-md:text-[20px] font-bold mb-6'>Eligibility for Admission</p>
                    <p className=' text-[17px] text-[#4b4b4b]'>The candidate applying for BBA program must have successfully completed a twelve-year schooling or its equivalent from any University, board or institution recognized byPurbanchal University and secured at least 40 % in the 10+2, PCL or equivalent program. Similarly for MBA program, the candidate must have successfully completed Bachelor or equivalent program with at least 45% in addition to meeting other parameters of entrance as decided by Management Campus.</p>

                </div>
                <div className='bg-[#4678B226] flex items-center h-full col-span-2 w-full max-md:py-6'>
                    <div className='w-[85%] mx-auto'>
                    <p className='text-[30px] max-md:text-[20px] font-bold mb-6'>Why BBA In PUSOM?</p>
                    <p className='mb-6 text-[17px]'>Academic Excellence and Legacy</p>
                    <ul className='list-disc space-y-4 text-[17px]'>
                        <li>PUSOM holds the distinction of being the first campus of Purbanchal University and the first to introduce the BBA program in Nepal, establishing a strong foundation in management education.Its legacy of academic innovation continues to inspire excellence across undergraduate, postgraduate, and research-level programs nationwide.</li>
                        <li>Comprehensive Curriculum: The BBA program spans four years (eight semesters), encompassing 120 credit hours. It integrates foundational courses, core management subjects, and specialization options, ensuring a well-rounded business education. </li>
                    </ul>
                    </div>  
                </div>
            </section>
        </>
    )
}

export default BBA