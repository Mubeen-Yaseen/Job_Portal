import React from 'react'
import { assets } from "../assets/assets"
import { Link } from 'react-router-dom'

import { useClerk, useUser, UserButton } from '@clerk/clerk-react'

const Navbar = () => {
    // used to show sign-in pop-up by clerk
    const { openSignIn } = useClerk()
    // To check user is Login or Not
    const { user } = useUser()
    return (
        <div className='shadow py-4'>
            <div className='container mx-auto px-4 2xl:px-20 flex justify-between items-center'>
                <img src={assets.logo} alt="" />
                {
                    user ?
                        <div className='flex items-center gap-3'>
                            <Link to='/applications'>Applied Jobs</Link>
                            <p>|</p>
                            <p>Hi, {user.firstName + " " + user.lastName}</p>
                            <UserButton /> {/*it show the user profile button/picture */}

                        </div>
                        : <div className='flex gap-4 mx-sm:text-xd'>
                            <button className='text-gray-600 text-xs md:text-lg'>Recruiter Login</button>
                            <button onClick={() => openSignIn()} className='bg-blue-600 text-xs md:text-lg text-white px-6 sm:px-9 py-2 rounded-full cursor-pointer'>Login</button>
                        </div>
                }

            </div>
        </div>

    )
}

export default Navbar
