import { HiViewBoards } from 'react-icons/hi'
import { BsCalendarMinus } from 'react-icons/bs'
import { AiOutlineTeam } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'

function About() {
    return (
        <div>
            <div className="flex items-center justify-center flex-col text-center mb-10">
                <h2 className='text-xl text-scColor'>About Us</h2>
                <h3 className='text-4xl mt-5'>A better way to send money</h3>
                <p className='text-cc text-xl mt-4 mb-4'>Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
            </div>
            <div className="max-w-screen-xl mx-auto z-0 flex-col flex md:flex-row md:flex">
                <div className="flex flex-col w-full">
                    <div className="w-50 border-G shadow-lg m-4 h-72 p-4">
                        <div className="w-full h-full">
                            <div className="text-mainBg bg-gradient-to-r from-fr to-t rounded-lg w-16 h-16 flex items-center justify-center text-3xl">
                                <HiViewBoards />
                            </div>
                            <div className="flex flex-col mt-6">
                                <h2 className='text-2xl'>Competitive exchange rates</h2>
                                <p className='mt-3 text-lg'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-50 border-G shadow-lg m-4 h-72 p-4">
                        <div className="w-full h-full">
                            <div className="text-mainBg bg-gradient-to-r from-fr to-t rounded-lg w-16 h-16 flex items-center justify-center text-3xl">
                                <AiOutlineTeam />
                            </div>
                            <div className="flex flex-col mt-6">
                                <h2 className='text-2xl'>Competitive exchange rates</h2>
                                <p className='mt-3 text-lg'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="w-50 border-G shadow-lg m-4 h-72 p-4">
                        <div className="w-full h-full">
                            <div className="text-mainBg bg-gradient-to-r from-fr to-t rounded-lg w-16 h-16 flex items-center justify-center text-3xl">
                                <BsCalendarMinus />
                            </div>
                            <div className="flex flex-col mt-6">
                                <h2 className='text-2xl'>Competitive exchange rates</h2>
                                <p className='mt-3 text-lg'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-50 border-G shadow-lg m-4 h-72 p-4">
                        <div className="w-full h-full">
                            <div className="text-mainBg bg-gradient-to-r from-fr to-t rounded-lg w-16 h-16 flex items-center justify-center text-3xl">
                                <FiSettings />
                            </div>
                            <div className="flex flex-col mt-6">
                                <h2 className='text-2xl'>Competitive exchange rates</h2>
                                <p className='mt-3 text-lg'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col text-center my-10">
                <h2 className='text-xl text-scColor'>Stats</h2>
                <h3 className='text-4xl mt-5'>Trusted by companys from over 80 planets</h3>
                <p className='text-cc text-xl mt-4 mb-4'>Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
            </div>
            <div className="max-w-screen-xl mx-auto h-auto flex md:flex-row flex-col items-center justify-between mt-10 p-4">
                <div className="md:w-64 w-full my-5 h-32 flex items-center justify-center bg-gradient-to-r from-sccColor to-t flex-col rounded-xl">
                    <h2 className='text-3xl text-mainBg'>
                        24/7
                    </h2>
                    <h3 className='text-xl text-mainBg'>
                        Live Support
                    </h3>
                </div>
                <div className="md:w-64 w-full my-5 h-32 flex items-center justify-center bg-gradient-to-r from-sccColor to-t flex-col rounded-xl">
                    <h2 className='text-3xl text-mainBg'>
                        1800+
                    </h2>
                    <h3 className='text-xl text-mainBg'>
                        Done Works!
                    </h3>
                </div>
                <div className="md:w-64 w-full my-5 h-32 flex items-center justify-center bg-gradient-to-r from-sccColor to-t flex-col rounded-xl">
                    <h2 className='text-3xl text-mainBg'>
                        1200+
                    </h2>
                    <h3 className='text-xl text-mainBg'>
                        Happy Customers
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default About