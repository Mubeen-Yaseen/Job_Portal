import React, { useContext } from 'react'
import { AppContext } from '../AppContext/context'
import { assets, JobCategories, JobLocations } from '../assets/assets';
import Jobcards from './Jobcards';
import { jobsData } from '../assets/assets';
import { useState } from 'react';

const { cross_icon } = assets;


const Job_Listing = () => {
    const { search, setsearch, issearch } = useContext(AppContext)
    // Toggle Function
    const [isVisible, setisVisible] = useState(false)
    const onToggle = () => {
        setisVisible((prev) => !prev)

    }


    return (
        <div className='container mx-auto flex flex-col lg:flex-row py-8'>

            {/* ---------------------Side Bar ----------------- */}
            <div className='w-full lg:w-1/4 px-4'>
                {/* ----------------Current Search-------------- */}
                <div>
                    {
                        issearch && (search.title !== '' || search.location !== '') && (
                            <>
                                <h1 className='py-4 font-semibold text-lg'>Current Search</h1>

                                <div className='flex gap-2 mb-4'>
                                    {search.title && (
                                        <div className='flex items-center gap-2 px-3 py-1 border border-blue-200 bg-blue-50 rounded-sm'>
                                            <p>{search.title}</p>
                                            <img className='h-2.5 cursor-pointer' onClick={() => setsearch(prev => ({ ...prev, title: '' }))} src={cross_icon} alt="" />
                                        </div>
                                    )}
                                    {search.location && (
                                        <div className='flex items-center gap-2 px-3 py-1 border border-red-200 bg-red-50 rounded-sm'>
                                            <p>{search.location}</p>
                                            <img className='h-2.5 cursor-pointer' onClick={() => setsearch(prev => ({ ...prev, location: '' }))} src={cross_icon} alt="" />
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                </div>
                {/* ----------------Toggle Button --------------------*/}
                <button onClick={onToggle} className='lg:hidden text-gray-600 border px-5 py-1.5 font-semibold  rounded-sm'>{isVisible ? 'Close' : 'Filters'}</button>
                {/* ----------------Search By Categories-------------- */}
                <div className={`${isVisible ? 'block' : 'hidden'} lg:block`}>
                    <h1 className='py-4 font-semibold text-lg '>Search by Categories</h1>
                    <ul className='space-y-4'>
                        {
                            JobCategories.map((category, index) => (
                                <li key={index} className='flex gap-3 font-medium items-center text-gray-500'>
                                    <input type="checkbox" className='scale-125' />
                                    {category}
                                </li>
                            ))
                        }
                    </ul>
                </div>


                {/* ----------------Search By Location-------------- */}
                <div className={`${isVisible ? 'block' : 'hidden'} lg:block`}>
                    <h1 className='font-semibold text-lg pb-4 pt-14'>Search by Location</h1>
                    <ul className='space-y-4'>
                        {
                            JobLocations.map((category, index) => (
                                <li key={index} className='flex gap-3 font-medium items-center text-gray-500'>
                                    <input type="checkbox" className='scale-125' />
                                    {category}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {/* ----------------Job Listing Cards-------------- */}
            <section className='w-full lg:w-3/4 px-4 lg:px-0 my-8 lg:my-0 '>
                <h1 className='font-medium text-3xl py-1.5'>Latest jobs</h1>
                <p className='mb-8'>Get your desired job from top companies</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
                    {
                        jobsData.map((job, index) => (
                            // console.log(job)
                            <Jobcards key={index} job={job} />
                        ))
                    }


                </div>

            </section>


        </div >
    )
}

export default Job_Listing


