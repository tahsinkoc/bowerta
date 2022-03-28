import { AiOutlineCheck } from 'react-icons/ai'

function Services() {
    return (
        <div className='mb-20'>
            <div className="flex items-center justify-center flex-col text-center my-20">
                <h2 className='text-xl text-scColor'>Services</h2>
                <h3 className='text-4xl mt-5'>Trusted by companys from over 80 planets</h3>
                <p className='text-cc text-xl mt-4 mb-4'>Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
            </div>
            <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-around flex-col md:flex-row">
                <div className="my-10 md:my-0 w-96 h-auto shadow-xl border-sccColor shadow-scS rounded-xl p-4 border-sccColor border-[1px] flex flex-col items-center">
                    <h2 className='p-1 rounded-3xl text-scColor bg-b w-28 flex items-center justify-center'>BASIC</h2>
                    <h2 className='p-1 mt-5 text-6xl flex justify-center'>
                        € 250
                    </h2>
                    <h2 className='text-lg text-cc p-1 my-10'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                    <h3 className='p-1 flex items-center w-full text-lg my-2'>
                        <p className='text-ll'>
                            <AiOutlineCheck />
                        </p>
                        <p className='ml-2'>Pariatur quod similuque</p>
                    </h3>
                    <h3 className='p-1 flex items-center w-full text-lg my-2'>
                        <p className='text-ll'>
                            <AiOutlineCheck />
                        </p>
                        <p className='ml-2'>Pariatur quod similuque</p>
                    </h3>
                    <h3 className='p-1 flex items-center w-full text-lg my-2'>
                        <p className='text-ll'>
                            <AiOutlineCheck />
                        </p>
                        <p className='ml-2'>Pariatur quod similuque</p>
                    </h3>
                    <h3 className='p-1 flex items-center w-full text-lg my-2'>
                        <p className='text-ll'>
                            <AiOutlineCheck />
                        </p>
                        <p className='ml-2'>Pariatur quod similuque</p>
                    </h3>
                    <button className=' my-5 rounded-xl p-4 text-mainBg bg-gradient-to-r from-fr to-t w-11/12 hover:border-sccColor hover:bg-none hover:text-sccColor border-[2px]'>GET STARTED</button>
                </div>
                <div className="my-10 md:my-0 w-96 h-auto shadow-xl border-sccColor shadow-scS rounded-xl p-4 border-sccColor border-[1px] flex flex-col items-center">
                    <h2 className='p-1 rounded-3xl text-scColor bg-b w-28 flex items-center justify-center'>STANDARD</h2>
                    <h2 className='p-1 mt-5 text-6xl flex justify-center'>
                        € 350
                    </h2>
                    <h2 className='text-lg text-cc p-1 my-10'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                    <h3 className='p-1 flex items-center w-full text-lg my-2'>
                        <p className='text-ll'>
                            <AiOutlineCheck />
                        </p>
                        <p className='ml-2'>Pariatur quod similuque</p>
                    </h3>
                    <h3 className='p-1 flex items-center w-full text-lg my-2'>
                        <p className='text-ll'>
                            <AiOutlineCheck />
                        </p>
                        <p className='ml-2'>Pariatur quod similuque</p>
                    </h3>
                    <h3 className='p-1 flex items-center w-full text-lg my-2'>
                        <p className='text-ll'>
                            <AiOutlineCheck />
                        </p>
                        <p className='ml-2'>Pariatur quod similuque</p>
                    </h3>
                    <h3 className='p-1 flex items-center w-full text-lg my-2'>
                        <p className='text-ll'>
                            <AiOutlineCheck />
                        </p>
                        <p className='ml-2'>Pariatur quod similuque</p>
                    </h3>
                    <button className=' my-5 rounded-xl p-4 text-mainBg bg-gradient-to-r from-fr to-t w-11/12 hover:border-sccColor hover:bg-none hover:text-sccColor border-[2px]'>GET STARTED</button>
                </div>
                <div className="my-10 md:my-0 w-96 h-auto shadow-xl border-sccColor shadow-scS rounded-xl p-4 border-sccColor border-[1px] flex flex-col items-center">
                    <h2 className='p-1 rounded-3xl text-scColor bg-b w-28 flex items-center justify-center'>ENTERPRISE</h2>
                    <h2 className='p-1 mt-5 text-6xl flex justify-center'>
                        € 1250
                    </h2>
                    <h2 className='text-lg text-cc p-1 my-10'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                    <h3 className='p-1 flex items-center w-full text-lg my-2'>
                        <p className='text-ll'>
                            <AiOutlineCheck />
                        </p>
                        <p className='ml-2'>Pariatur quod similuque</p>
                    </h3>
                    <h3 className='p-1 flex items-center w-full text-lg my-2'>
                        <p className='text-ll'>
                            <AiOutlineCheck />
                        </p>
                        <p className='ml-2'>Pariatur quod similuque</p>
                    </h3>
                    <h3 className='p-1 flex items-center w-full text-lg my-2'>
                        <p className='text-ll'>
                            <AiOutlineCheck />
                        </p>
                        <p className='ml-2'>Pariatur quod similuque</p>
                    </h3>
                    <h3 className='p-1 flex items-center w-full text-lg my-2'>
                        <p className='text-ll'>
                            <AiOutlineCheck />
                        </p>
                        <p className='ml-2'>Pariatur quod similuque</p>
                    </h3>
                    <button className=' my-5 rounded-xl p-4 text-mainBg bg-gradient-to-r from-fr to-t w-11/12 hover:border-sccColor hover:bg-none hover:text-sccColor border-[2px]'>GET STARTED</button>
                </div>
            </div>
        </div>
    )
}

export default Services