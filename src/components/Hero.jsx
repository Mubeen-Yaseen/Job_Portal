import React, { useState, useRef, useContext } from 'react'
import { AppContext } from '../AppContext/context'
import { assets } from '../assets/assets';
const { search_icon, location_icon, microsoft_logo, walmart_logo, accenture_logo, samsung_logo, amazon_logo, adobe_logo } = assets;



const Hero = () => {
    const { setsearch } = useContext(AppContext)

    const titlevalue = useRef(null)
    const locationvalue = useRef(null)

    const clickbtn = () => {
        const data = ({
            title: titlevalue.current.value,
            location: locationvalue.current.value
        })
        setsearch(data)
        console.log(data)
    }

    return (
        <>
            <div className='container text-center mx-auto h-auto bg-gradient-to-r from-[#4F0487] to-[#130121] rounded-2xl pt-16 mt-3'>
                <h1 className='text-white font-bold text-2xl md:text-4xl'>Over 10,000+ jobs to apply</h1>
                <p className='s text-white mt-3 text-sm md:text-base'>Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities <br />and Take the First Step Toward Your Future!</p>

                {/* ----------------------Search-Bar------------------- */}
                <div className='flex justify-center items-center mt-10 '>
                    <div className='flex flex-col w-full md:flex-row md:w-auto gap-2 items-center bg-white rounded-sm p-2 m-7 '>
                        <div className='flex w-full items-center md:w-auto'>
                            <img src={search_icon} alt="" className='px-3.5' />
                            <input
                                type="text"
                                placeholder='Search for jobs'
                                ref={titlevalue}
                                className='
                                max-[768px]:w-full max-[768px]:border max-[768px]:border-gray-400 
                                max-[768px]:rounded-md max-[768px]:px-2 max-[768px]:py-1 outline-0
                                '

                            />
                        </div>
                        <div className='flex w-full items-center md:w-auto'>
                            <p className='text-gray-300 text-2xl hidden md:block mb-1.5'>|</p>
                            <img src={location_icon} alt="" className='px-4' />
                            <input
                                type="text"
                                placeholder='Location'
                                ref={locationvalue}
                                className='
                                max-[768px]:w-full max-[768px]:border max-[768px]:border-gray-400 
                                max-[768px]:rounded-md max-[768px]:px-2 max-[768px]:py-1 outline-0
                                '

                            />
                        </div>
                        <button onClick={clickbtn} className='cursor-pointer bg-blue-600 text-white rounded-sm px-9 py-2 w-full md:w-auto'>Search</button>
                    </div>

                </div>

                {/* -------------Company Logos Trusted By--------------- */}
            </div>
            <div className='container mx-auto border border-gray-300 rounded-md mt-5 flex gap-10 lg:gap-16 items-center shadow-md px-10 py-5 flex-wrap'>
                <h1 className='font-bold'>Trusted by</h1>
                <img className='h-6' src={microsoft_logo} alt="" />
                <img className='h-6' src={walmart_logo} alt="" />
                <img className='h-6' src={accenture_logo} alt="" />
                <img className='h-6' src={samsung_logo} alt="" />
                <img className='h-6' src={amazon_logo} alt="" />
                <img className='h-6' src={adobe_logo} alt="" />
            </div>
        </>
    )
}

export default Hero
