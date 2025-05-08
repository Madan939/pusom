import React, { useEffect } from 'react'
import Ribbon from '../components/Ribbon';
import { Link } from 'react-router-dom';

const MBA = () => {
    const text1 = "Master of Business Administration";
    const text2 = "Course";
    const text3 = "mba";
    const link="/course";
       useEffect(()=>{
            document.title="PUSOM Mba | Purbanchal University School of Management"
        },[]);
    return (
        <>
            <Ribbon text1={text1} text2={text2} text3={text3} link={link}/>
            <section className='container my-[68px] mx-auto px-4 pb-[60px] border-b-2 grid grid-cols-1 md:grid-cols-2 place-items-center'>
                <div className='max-md:mb-10'>
                    <p className='text-[40px] font-bold text-[#11CFAF] mb-12'>Master of Business Administration (MBA)</p>
                    <Link to="" className='border-[1.5px] text-[17px] rounded-md py-3 px-8 border-[#11CFAF] font-semibold text-[#11CFAF] hover:bg-[#11CFAF] hover:text-white transition duration-300 ease-in-out' >APPLY NOW</Link>
                </div>
                <div className=''>
                    <img src="/assets/images/course/Group2.svg" alt="bba" className='w-full' />
                    
                </div>
            </section>
            <section className='container mb-[68px] mx-auto px-4 grid grid-cols-1 md:grid-cols-5 place-items-center gap-6'>
                <div className='col-span-3 max-md:mb-10'>
                    <p className='text-[30px] max-md:text-[20px] font-bold mb-6'>Introduction</p>
                    <p className='mb-6 text-[17px] text-[#4b4b4b]'>The MBA program of Purbanchal University designed at 70 credit hours with 26 course components including internship project or thesis is a full-time program directed at preparing professional managers for the business and non-business sectors. The program’s focus is on developing managerial and entrepreneurial capabilities of students through the curricular and co-curricular activities.</p>
                    <p className='text-[30px] max-md:text-[20px] font-bold mb-6'>Objective </p>
                    <p className='mb-6 text-[17px] text-[#4b4b4b]'>The MBA program specifically aims to prepare professional managers for the business and non-business sectors, develop entrepreneurs capable of evaluating risks and taking challenges in the emerging global business environment andinculcate knowledge, skill, and attitude in students so that they become scientifically approached, result oriented, and socially responsive management professionals.</p>
                    <p className='text-[30px] max-md:text-[20px] font-bold mb-6'>Eligibility for Admission</p>
                    <p className=' text-[17px] text-[#4b4b4b]'>To be eligible for admission to the MBA program at Purbanchal University School of Management (PUSOM), applicants must have completed a Bachelor's degree or an equivalent qualification in any discipline from a recognized university, securing at least second division or a minimum CGPA as prescribed by the university. Candidates must also pass the Purbanchal University Management Admission Test (PUMAT), followed by group discussions and a personal interview conducted by the institution. </p>

                </div>
                <div className='bg-[#11CFAF2B] flex items-center h-full col-span-2 w-full max-md:py-6 mx-auto'>
                    <div className='w-[85%] mx-auto'>
                        <p className='text-[30px] max-md:text-[20px] font-bold mb-6'>Why MBA In PUSOM?</p>
                        <p className='mb-6 text-[17px]'>Comprehensive Curriculum</p>
                        <ul className='list-disc space-y-8 text-[17px]'>
                            <li>Structured Program: The MBA program spans 2 years and encompasses 70 credit hours, including 26 course components such as core courses, specializations, electives, and a mandatory internship or thesis. This structure ensures a balanced mix of theoretical knowledge and practical application.</li>
                            <li>Foundation Courses: For students from non-management backgrounds, PUSOM offers non-credit preparatory courses to build foundational knowledge in management principles, ensuring all students are equipped to succeed.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MBA