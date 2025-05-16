import React, { useContext } from 'react'
import { AppContext } from '../AppContext/context'


const Job_Listing = () => {
    const { search, issearch } = useContext(AppContext)


    return (
        <div className='container mx-auto'>
            {/* ----------------Current Search-------------- */}
            {/* ----------------Side-Bar-------------- */}
            <div>
                {
                    issearch && (search.title !== '' || search.location !== '') ? (
                        <>
                            <h1 className='mt-10 mb-2  font-bold'>Current Search</h1>
                            <div className='flex gap-1'>
                                <p className='px-3 py-1 border border-blue-200 bg-blue-100 rounded-sm'>{search.title}</p>
                                <p className='px-3 py-1 border border-red-200 bg-red-100 not-[]:rounded-sm'>{search.location}</p>
                            </div>
                        </>
                    )
                        : (
                            <h1 className='mt-10'>No Search Results</h1>
                        )
                }
            </div>


        </div>
    )
}

export default Job_Listing
