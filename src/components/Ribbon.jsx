import React from 'react'
import { Link } from 'react-router-dom'

const Ribbon = ({ text1, text2, text3,link }) => {
    return (
        <>
            <section className='relative h-52 flex items-center justify-center'>
                <div className="absolute inset-0 bg-[url('/assets/images/ribbon/backround.svg')] bg-cover bg-center bg-no-repeat brightness-50 z-0 h-auto"></div>
                <div className='absolute text-center text-white container px-4'>
                    <p className='text-[4rem] max-md:text-[2rem] font-bold'>{text1}</p>
                    <div className='flex justify-center items-center'>
                        <Link to="/">Home &nbsp;/</Link>
                        <Link to={link}>{text2?(<> &nbsp;{text2}&nbsp;/</>):(<></>)}</Link>
                        <p className='text-[#EAB308]'>&nbsp;{text3}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ribbon