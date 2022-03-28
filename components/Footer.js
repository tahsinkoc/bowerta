import {AiOutlineCopyright, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'

function Footer() {
  return (
    <div className='border-G border-t-[1px] w-full text-cc'>
        <div className="max-w-screen-xl mx-auto h-24 flex items-center p-4 justify-between">
            <h2 className='flex items-center'>
                < AiOutlineCopyright /> 
                <b className='ml-2'>2022 bowerta.com  All rights reserved.</b> 
                <a className='ml-1' href="#">Pricacy Policy</a>
            </h2>
            <div className='flex'>
                <a href="#" className='text-2xl mr-2'>
                    <AiFillInstagram/>
                </a>
                <a href="#" className='text-2xl mr-2'>
                    <AiFillLinkedin/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer