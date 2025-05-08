
import React, { useEffect, useState } from 'react';
import Ribbon from '../components/Ribbon';
import { Link } from 'react-router-dom';

const Contact = () => {
    const text1 = "Contact";

    useEffect(() => {
        document.title = "PUSOM Contact | Purbanchal University School of Management";
    }, []);

    const countryOptions = [
        { img: "/assets/images/contact/Nepal.svg", phn: "+977", name: "Nepal" },
        { img: "/assets/images/contact/USA.svg", phn: "+1", name: "USA" },
        { img: "/assets/images/contact/India.svg", phn: "+91", name: "India" },
        { img: "/assets/images/contact/UK.svg", phn: "+44", name: "UK" },
        { img: "/assets/images/contact/Australia.svg", phn: "+61", name: "Australia" },
        { img: "/assets/images/contact/UAE.svg", phn: "+971", name: "UAE" },
    ];

    const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const card = [
        {
            img: "/assets/images/contact/niranjan.png",
            name: "Niranjan Sharma",
            field: "Project Manager",
            app: "Telegram",
            link: "https://t.me/niranjanpm",
        },
        {
            img: "/assets/images/contact/madan.jpg",
            name: "Madan Golay Tamang",
            field: "Project Leader",
            app: "Telegram",
            link: "https://t.me/madantamang",
        },
        {
            img: "/assets/images/contact/bitisha.jpg",
            name: "Bitisha Thapa",
            field: "Front-end Developer",
            app: "Telegram",
            link: "https://t.me/bitishathapa",
        },
    ];
    return (
        <>
            <Ribbon text1={text1} text3={text1} />
            <section className='container px-4 mx-auto my-[68px] grid grid-cols-1 md:grid-cols-2 gap-14'>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14287.234610209616!2d87.26996774953912!3d26.461896190394263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spusom!5e0!3m2!1sen!2snp!4v1743489837212!5m2!1sen!2snp"
                        className="w-full h-full border-0 max-md:h-[450px]"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className='bg-[#D9D9D92B] w-full h-full'>
                    <p className='text-center font-semibold text-[20px] mt-10 mb-2'>Contact Us</p>
                    <form className='mx-10 max-md:mx-2 mb-10 border border-[#4B4B4B] rounded-xl p-5 space-y-3'>
                        <section className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div>
                                <label htmlFor="fname">First Name</label>
                                <input type="text" id="fname" className='focus:outline-none w-full rounded-md p-2 border' placeholder='First name' />
                            </div>
                            <div>
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" id="lname" className='focus:outline-none w-full rounded-md p-2 border' placeholder='Last name' />
                            </div>
                        </section>

                        <section>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className='focus:outline-none w-full rounded-md p-2 border' placeholder='Enter email address' />
                        </section>

                        <section>
                            <label htmlFor="phone">Phone</label>
                            <div className='relative border p-2 w-full rounded-md flex items-center bg-white'>
                                <div className='relative w-40'>
                                    <div
                                        className="flex items-center justify-between gap-2 cursor-pointer w-full "
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                    >
                                        <img src={selectedCountry.img} alt="flag" className="w-6 h-6" />
                                        <span className='text-sm'>{selectedCountry.phn}</span>
                                        <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    {dropdownOpen && (
                                        <div className="absolute left-0 top-full mt-1 h-52 bg-white border rounded-md shadow-md w-full  overflow-y-auto scrollbar-hide z-10 transition-all duration-200">
                                            {countryOptions.map((country, idx) => (
                                                <div
                                                    key={idx}
                                                    onClick={() => {
                                                        setSelectedCountry(country);
                                                        setDropdownOpen(false);
                                                    }}
                                                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                >
                                                    <img src={country.img} alt={country.name} className="w-5 h-5" />
                                                    <span>{country.phn}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <input
                                    type="text"
                                    id="phone"
                                    className='focus:outline-none px-2 ml-4 w-full  bg-none'
                                    placeholder='Phone number'
                                />
                            </div>
                        </section>
                        <section>
                            <label htmlFor="msg">Any Remarks/Feedbacks</label>
                            <textarea name="" id="msg" className='h-28 w-full p-2 focus:outline-none border rounded-md' placeholder='Any Remarks/Feedbacks'></textarea>
                        </section>
                        <div className='text-center'>
                            <button type='submit' className='bg-[#EAB308] hover:bg-[#efc74f] px-6 py-2 text-white font-semibold rounded-md'>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
            <section className=" w-full mb-[56px]  bg-[#efefef] py-[40px]">
                <div className="container  mx-auto flex flex-wrap justify-around">
                    {card.map((item, index) => (
                        <div
                            key={index + 1}
                            className="w-[28%] max-md:w-[85%]  p-[25px] text-[#333] text-center rounded-md "
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="mb-3 h-[250px] w-[250px] mx-auto  rounded-[50%] object-cover"
                            />
                            <p className="text-[1.1rem] font-semibold mb-3">{item.name}</p>
                            <p className="mb-5">{item.field}</p>
                            <Link
                                to={item.link}
                                target="_blank"
                                className="border-[1.5px] rounded-md border-[#8b181b] hover:bg-[#8b181b] hover:text-white transition duration-300 ease-in-out font-semibold py-2 px-3"
                            >
                                {item.app}
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Contact

