import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <div>
        <div className="w100 p-3">
            <div className="max-w-screen-xl flex mx-auto justify-between items-center">
                <div className="w-64 relative h-14 cursor-pointer">
                    <Image src={'/logo_bw.png'} layout='fill'></Image>
                </div>
                <div className="text-cc">
                    <nav className='text-lg'>
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
            </div>
        </div>
    </div>
  )
}

export default Navbar