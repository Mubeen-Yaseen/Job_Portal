import React, { useState, useRef, useContext } from 'react'
import { AppContext } from '../AppContext/context'
import { assets } from '../assets/assets';
const { search_icon, location_icon, microsoft_logo, walmart_logo, accenture_logo, samsung_logo, amazon_logo, adobe_logo } = assets;



const Hero = () => {
    const { setsearch, setissearch } = useContext(AppContext)

    const titlevalue = useRef(null)
    const locationvalue = useRef(null)

    const clickbtn = () => {
        setsearch({
            title: titlevalue.current.value,
            location: locationvalue.current.value
        })
        setissearch(true)    //mai ny confirm kr diya ha ka......user ny search button dabaya empty input pe ya filled input pe....
    }

    return (
        <div className='container mx-auto my-10'>
            <div className='text-center bg-gradient-to-r from-purple-800 to-purple-950 rounded-xl mx-2 py-16'>
                <h1 className='text-white font-bold text-2xl md:text-4xl mb-4'>Over 10,000+ jobs to apply</h1>
                <p className=' text-white mx-auto text-base text-wrap max-w-xl px-5 mb-7'>Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>

                {/* ----------------------Search-Bar------------------- */}
                {/* <div className='flex items-center justify-between bg-white rounded max-w-xl mx-4 sm:mx-auto p-1 '> */}
                <div className='flex items-center justify-between bg-white rounded max-w-xl mx-4 sm:mx-auto p-1'>

                    {/* Title Input */}
                    <div className='flex items-center rounded-md px-3 py-2 w-auto'>
                        <img src={search_icon} alt="" className='mr-2 ' />
                        <input
                            type="text"
                            placeholder='Search for jobs'
                            ref={titlevalue}
                            className='outline-none text-sm w-full'
                        />
                    </div>

                    {/* Location Input */}
                    <p className='text-gray-300 text-xl mb-1'>|</p>
                    <div className='flex items-center rounded-md px-3 py-2 w-full'>
                        <img src={location_icon} alt="" className='mr-2' />
                        <input
                            type="text"
                            placeholder='Location'
                            ref={locationvalue}
                            className='outline-none text-sm w-full'
                        />
                    </div>

                    {/* Search Button */}
                    <button
                        onClick={clickbtn}
                        className='bg-blue-600  text-white rounded-md px-6 py-2 text-sm font-semibold hover:bg-blue-700'>
                        Search
                    </button>
                </div>
                {/* -------------Company Logos Trusted By--------------- */}
            </div>
            <div className='border border-gray-300 rounded-md mt-5 flex gap-10 lg:gap-16 items-center shadow-md p-6 mx-2 flex-wrap justify-center'>
                <h1 className='font-bold'>Trusted by</h1>
                <img className='h-6' src={microsoft_logo} alt="" />
                <img className='h-6' src={walmart_logo} alt="" />
                <img className='h-6' src={accenture_logo} alt="" />
                <img className='h-6' src={samsung_logo} alt="" />
                <img className='h-6' src={amazon_logo} alt="" />
                <img className='h-6' src={adobe_logo} alt="" />
            </div>
        </div>
    )
}

export default Hero
