import React from 'react'
import { assets } from '../assets/assets'
const Jobcards = ({ job }) => {
    return (
        <div className='p-6 border border-gray-200 shadow rounded '>
            <img src={assets.company_icon} alt="company_icon" />
            <h1 className='font-medium text-xl py-2'>{job.title}</h1>
            <div className='flex gap-3'>
                <button className='px-3 py-1 border border-blue-200 bg-blue-50 rounded-sm  text-gray-600 text-xs'>{job.location}</button>
                <button className='px-3 py-1 border border-red-200 bg-red-50 rounded-sm  text-gray-600 text-xs'>{job.level}</button>
            </div>
            {/* // react method ha /// dangerouslySetInnerHTM just HTML ke tags screen par nahi dikhenge — wo sirf kaam karenge formatting ke liye. */}
            <p dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) + '...' }} className='text-sm text-gray-600 my-4'></p>
            <div className='flex gap-4'>
                <button className='text-white bg-blue-600 px-2.5 py-1.5 rounded-sm'>Apply now</button>
                <button className='text-gray-600 border px-2.5 py-1.5 rounded-sm'>Learn more</button>
            </div>
        </div>
    )
}

export default Jobcards
