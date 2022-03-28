import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
    return (
        <div>
            <div className="w100 p-3 shadow-md">
                <div className="max-w-screen-xl flex mx-auto justify-between items-center">
                    <div className='flex items-center'>
                        <div className="w-64 relative h-14 cursor-pointer">
                            <Image src={'/logo_bw.png'} layout='fill'></Image>
                        </div>
                    </div>
                    <button className='block md:hidden'>AÇ</button>
                    <div className='hidden items-center md:flex'>
                        <div className="text-cc flex items-center">
                            <nav className='text-lg mr-5'>
                                <Link href={'#'}>
                                    <a className='mr-5 p-3 text-sccColor bg-ca hover:text-sccColor'>
                                        Home
                                    </a>
                                </Link>
                                <Link href={'#'}>
                                    <a className='mr-5 p-2 hover:text-sccColor'>
                                        About
                                    </a>
                                </Link>
                                <Link href={'#'}>
                                    <a className='mr-5 p-2 hover:text-sccColor'>
                                        Services
                                    </a>
                                </Link>
                                <Link href={'#'}>
                                    <a className='mr-5 p-2 hover:text-sccColor'>
                                        Contact
                                    </a>
                                </Link>
                            </nav>
                        </div>
                        <button className='border-[2px] border-sccColor text-sccColor transition-colors duration-100 hover:bg-sccColor hover:text-mainBg p-2 rounded-3xl w-32'>Get Start</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar