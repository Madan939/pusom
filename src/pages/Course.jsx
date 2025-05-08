import React, { useEffect } from 'react'
import Ribbon from '../components/Ribbon'
import { Link } from 'react-router-dom'

const Course = () => {
    const text1 = "Course";
       useEffect(()=>{
            document.title="PUSOM Course | Purbanchal University School of Management"
        },[]);
    return (
        <>
            <Ribbon text1={text1} text3={text1} />
            <section className='my-[68px] container mx-auto px-4'>
                <p className='text-center font-bold text-[30px] mb-8'>Undergraduate Program</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10  place-items-center'>
                    {[
                        {
                            image: "/assets/images/course/bba.svg",
                            name: "Bachelor of Business Admiration (BBA)",
                            quote: "“Building Business Leaders of Tomorrow”",
                            bg: "#4678B2",
                            path: "/course/bba"
                        },
                        {
                            image: "/assets/images/course/mba.svg",
                            name: "Master of Business Admiration (MBA)",
                            quote: "“Dream Big. Study Smart. Lead Strong”",
                            bg: "#11CFAF",
                            path: "/course/mba"
                        },
                        {
                            image: "/assets/images/course/mphil.svg",
                            name: "Master of Philosophy (M.phil)",
                            quote: "“Advancing Thought, One Thesis at a Time”",
                            bg: "#4678B2",
                            path: "/course/mphil"
                        },
                        {
                            image: "/assets/images/course/phd.svg",
                            name: "Doctor of Philosophy in Management",
                            quote: "“Where Strategic Thought Meets Scholarly Depth”",
                            bg: "#11CFAF",
                            path: "/course/phd"
                        },
                    ].map((item, idx) => (
                        <Link to={item.path} key={idx + 1}>
                            <div
                                style={{ backgroundColor: item.bg }}
                                className="h-[300px] container lg:w-[500px] overflow-hidden rounded-lg shadow-md"
                            >
                                <p className="bg-white my-3 border text-[20px] font-semibold text-center py-2 px-3 mx-3 rounded">
                                    {item.name}
                                </p>
                                <div className="flex items-center h-[200px] px-4 text-white font-bold">
                                    <img
                                        src={item.image}
                                        alt={`course-${idx + 1}`}
                                        className="w-[40%] object-contain h-full pr-4"
                                    />
                                    <p className="text-[20px] leading-snug">{item.quote}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Course