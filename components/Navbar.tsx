import React from 'react'

const Navbar = () => {
    return (
            <header className="w-full bg-white">
                <div className="mx-5  flex justify-between items-center py-3 ">

                    <div className="flex justify-between items-center  gap-10"    >
                        <img src="https://amento-bucket-poc-2.s3.amazonaws.com/optionbuilder/uploads/logo-default.svg" alt="" width={110} />
                        <nav className="flex space-x-6 text-gray-500 gap-4 font-bold">
                            <a href="#" className="hover:text-green-600">Home</a>
                            <a href="#" className="hover:text-green-600">Find Tutors</a>
                            <a href="#" className="hover:text-green-600">Courses</a>
                            <a href="#" className="hover:text-green-600">About</a>
                            <a href="#" className="hover:text-green-600">How it Works</a>
                            <a href="#" className="hover:text-green-600">More</a>
                        </nav>
                    </div>
                    <div className="mx-5  flex justify-between items-center py-3 gap-10" >
                        <div className='flex justify-between items-center  gap-1'>
                            <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f1ec-1f1e7.svg" alt="" width={20}/>
                            <p className='font-bold text-gray-500'>ENGLISH</p>
                        </div>
                        <div><img className='rounded-xl' src="https://amento-bucket-poc-2.s3.amazonaws.com/thumbnails/profile_images/Msbqe1728390739-36x36.png" alt="" /></div>
                    </div>
                </div>
            </header>
    )
}

export default Navbar