import Image from 'next/image'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'

function Navbar() {

    const [isOpen, setOpen] = useState(false)

    const scA = (e) => {
        let a = parseInt(e.target.id)
        window.scrollTo({ top: a, behavior: 'smooth' });
    }

    return (
        <div>
            <div className="w-full p-3 shadow-md top-0 left-0 fixed z-10 bg-mainBg z-10">
                <div className="max-w-screen-xl flex mx-auto justify-between items-center">
                    <div className='flex items-center'>
                        <div className="w-64 relative h-14 cursor-pointer">
                            <Image src={'/logo_bw.png'} layout='fill'></Image>
                        </div>
                    </div>
                    <button className='block fixed right-5 top-5 text-sccColor text-3xl md:hidden z-50' onClick={() => setOpen(!isOpen)}>
                        <FaBars />
                    </button>
                    <div className='z-40 flex-col top-0 left-0 fixed md:relative w-full items-center md:h-auto md:w-auto md:flex-row md:flex'>
                        {
                            isOpen ? <div className="text-cc flex bg-mainBg  h-screen md:h-auto w-full">
                            <nav className='text-lg mx-auto md:mr-5 flex-col md:flex-row flex w-full items-center justify-evenly'>
                                    <a onClick={scA} id='0' className='cursor-pointer mr-5 p-3 text-sccColor bg-ca hover:text-sccColor'>
                                        Home
                                    </a>
                                    <a onClick={scA} id='600' className='cursor-pointer mr-5 p-2 hover:text-sccColor'>
                                        About
                                    </a>
                                    <a onClick={scA} id='1900' className='cursor-pointer mr-5 p-2 hover:text-sccColor'>
                                        Services
                                    </a>
                                    <a onClick={scA} id='3000' className='cursor-pointer mr-5 p-2 hover:text-sccColor'>
                                        Contact
                                    </a>
                            </nav>
                            </div> : <div className="hidden md:block text-cc bg-mainBg">
                            <nav className='text-lg mx-auto md:mr-5 flex-col md:flex-row flex w-full items-center justify-evenly'>
                                    <a onClick={scA} id='0' className='cursor-pointer mr-5 p-3 text-sccColor bg-ca hover:text-sccColor'>
                                        Home
                                    </a>
                                    <a onClick={scA} id='600' className='cursor-pointer mr-5 p-2 hover:text-sccColor'>
                                        About
                                    </a>
                                    <a onClick={scA} id='1900' className='cursor-pointer mr-5 p-2 hover:text-sccColor'>
                                        Services
                                    </a>
                                    <a onClick={scA} id='3000' className='cursor-pointer mr-5 p-2 hover:text-sccColor'>
                                        Contact
                                    </a>
                            </nav>
                        </div>
                        }
                        <Link href={'/getstarted'}>
                            <a>
                                <button className='hidden md:block border-[2px] border-gradient-to-r from-fr to-t text-sccColor transition-colors duration-100 hover:bg-gradient-to-r from-fr to-t hover:text-mainBg p-2 rounded-3xl w-32'>Get Start</button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar