import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Ribbon from '../components/Ribbon'

const MPHIL = () => {
    const text1 = "Master of Philosophy";
    const text2 = "Course";
    const text3 = "mphil"
    const link="/course";
       useEffect(()=>{
            document.title="PUSOM MPhil | Purbanchal University School of Management"
        },[]);
    return (
        <>
            <Ribbon text1={text1} text2={text2} text3={text3} link={link}/>
            <section className='container my-[68px] mx-auto px-4 pb-[60px] border-b-2 grid grid-cols-1 md:grid-cols-2 place-items-center'>
                <div className='max-md:mb-10'>
                    <p className='text-[40px] font-bold text-[#4678B2] mb-12'>Master of Philosophy (MPhil)</p>
                    <Link to="" className='border-[1.5px] text-[17px] rounded-md py-3 px-8 border-[#4678B2] font-semibold text-[#4678B2] hover:bg-[#4678B2] hover:text-white transition duration-300 ease-in-out' >APPLY NOW</Link>
                </div>
                <div className=''>
                    <img src="/assets/images/course/Group3.svg" alt="bba" className='w-full' />
                </div>
            </section>
            <section className='container mb-[68px] mx-auto px-4 grid grid-cols-1 md:grid-cols-5 place-items-center gap-6'>
                <div className='col-span-3 max-md:mb-10'>
                    <p className='text-[30px] max-md:text-[20px] font-bold mb-6'>Introduction</p>
                    <p className='mb-6 text-[17px] text-[#4b4b4b]'>The M. Phil program is a pre-requisite course to the Ph.D. program of the Faculty of Management, Purbanchal University. The program develops knowledge and skill among students necessary for pursuing research in different areas of management. </p>
                    <p className='text-[30px] max-md:text-[20px] font-bold mb-6'>Objective </p>
                    <p className='mb-6 text-[17px] text-[#4b4b4b]'>The M. Phil program aims at preparing students for research and consultancy and thereby making them eligible for the enrollment in the Ph.D. Program of the Faculty of Management, Purbanchal University. This Program also aims at producing the research graduates and consultants in management through a continual learning process.</p>
                    <p className='text-[30px] max-md:text-[20px] font-bold mb-6'>Eligibility for Admission</p>
                    <p className=' text-[17px] text-[#4b4b4b]'>The candidate applying for this program must meet the following criteria: (1) Master degree in Management or Commerce or Business Administration or Economics with second division or CGPA of B, and (2) At least three years of Bachelor level teaching or equivalent professional work experience.</p>

                </div>
                <div className='bg-[#4678B226]  flex items-center h-full col-span-2 w-full max-md:py-6'>
                    <div className='w-[85%] mx-auto'>
                        <p className='text-[30px] max-md:text-[20px] font-bold mb-6'>Why M.Phil In PUSOM?</p>
                        <p className='mb-6 text-[17px]'>Comprehensive Curriculum</p>
                        <ul className='list-disc space-y-8 text-[17px]'>
                            <li>Subjects like Research Methodology, Advanced Management Theory, Statistical Methods, Organizational Behavior, and Economics for Managers lay a strong foundation for research and practical application.</li>
                            <li>Students can tailor their studies by choosing specializations in areas such as Marketing Management, Financial Management, Human Resource Management, or Operations and Supply Chain Management</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MPHIL