import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Ribbon from '../components/Ribbon'

const PHD = () => {
    const text1 = "Doctor of Philosophy in Management";
    const text2 = "Course";
    const text3 = "phd"
    const link="/course";
    useEffect(()=>{
        document.title="PUSOM Phd | Purbanchal University School of Management"
    },[]);
    return (
        <>
            <Ribbon text1={text1} text2={text2} text3={text3} link={link}/>
            <section className='container my-[68px] mx-auto px-4 pb-[60px] border-b-2 grid grid-cols-1 md:grid-cols-2 place-items-center'>
                <div className='max-md:mb-10'>
                    <p className='text-[40px] font-bold text-[#11CFAF] mb-12'>Doctor of Philosophy in Management
                        (Ph.D In Management)</p>
                    <Link to="" className='border-[1.5px] text-[17px] rounded-md py-3 px-8 border-[#11CFAF] font-semibold text-[#11CFAF] hover:bg-[#11CFAF] hover:text-white transition duration-300 ease-in-out' >APPLY NOW</Link>
                </div>
                <div className=''>
                    <img src="/assets/images/course/Group4.svg" alt="bba" className='w-full' />
                   
                </div>
            </section>
            <section className='container mb-[68px] mx-auto px-4 grid grid-cols-1 md:grid-cols-5 place-items-center gap-6'>
                <div className='col-span-3 max-md:mb-10'>
                    <p className='text-[30px] max-md:text-[20px] font-bold mb-6'>Introduction</p>
                    <p className='mb-6 text-[17px] text-[#4b4b4b]'>The Doctoral Program (Ph.D. Program) in Management of the Purbanchal University aims at developing high quality of research students in the field of management. The Ph.D. program will help in the advancement of knowledge responding to global, regional, national and local needs and enhancing quality of teaching and faculty development in the field of management through independent and original research. </p>
                    <p className='text-[30px] max-md:text-[20px] font-bold mb-6'>Objective </p>
                    <p className='mb-6 text-[17px] text-[#4b4b4b]'>The Ph.D. program of the Faculty of Management (FOM) shall be conducted by the Research Committee (hereafter called Management Research Committee or MRC) constituted under the chairmanship of the Dean of the FOM, Purbanchal University and member secretary will be PhD Program Director, Purbanchal University.</p>
                    <p className='text-[30px] max-md:text-[20px] font-bold mb-6'>Eligibility for Admission</p>
                    <p className=' text-[17px] text-[#4b4b4b]'>Candidates, who satisfy the following conditions from any groups mentioned below, are eligible to seek enrollment for Ph.D., which opens once a year. Not with standing anything stated in this by-law. </p>

                </div>
                <div className='bg-[#11CFAF2B]  flex items-center h-full col-span-2 w-full max-md:py-6'>
                    <div className='w-[85%] mx-auto'>
                        <p className='text-[30px] max-md:text-[20px] font-bold mb-6'>Why Ph.D In PUSOM?</p>
                        <p className='mb-6 text-[17px]'>Deep Expertise & Academic Contribution</p>
                        <ul className='list-disc space-y-8 text-[17px]'>
                            <li>A Ph.D. allows scholars to deeply explore complex management theories, leading to the creation of innovative frameworks that enhance both academic literature and industry practices.It cultivates critical thinking and sharpens the ability to evaluate and develop advanced managerial concepts.</li>
                            <li>Through rigorous research and critical analysis, candidates contribute unique insights to the field, addressing contemporary challenges and shaping the future of management thinking. Their findings often influence academic discourse, business policies, and strategic decision-making at organizational levels.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PHD