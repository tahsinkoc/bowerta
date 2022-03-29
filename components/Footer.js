import { AiOutlineCopyright, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

function Footer() {
    return (
        <div>
            <div className="w-full h-32 bg-gradient-to-r from-fr to-t flex items-center justify-center">
                <div className="h-16 flex items-center w-full justify-center">
                    <input type="mail" className='p-2 md:w-96 w-3/4 rounded-lg outline-0 shadow-lg' placeholder='Enter your email'/>
                    <button className='ml-3 p-2 rounded-lg bg-sub text-mainBg shadow-lg'>Subscribe</button>
                </div>
            </div>
            <div className='border-G border-t-[1px] w-full text-cc'>
                <div className="max-w-screen-xl mx-auto h-24 flex items-center p-4 justify-between">
                    <h2 className='flex items-center'>
                        < AiOutlineCopyright />
                        <b className='ml-2'>2022 bowerta.com  All rights reserved.</b>
                        <a className='ml-1' href="#">Pricacy Policy</a>
                    </h2>
                    <div className='flex'>
                        <a href="#" className='text-2xl mr-2'>
                            <AiFillInstagram />
                        </a>
                        <a href="#" className='text-2xl mr-2'>
                            <AiFillLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer