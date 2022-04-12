function GetStarted() {
    return (
        <div>
            <div className="max-w-screen-xl	mx-auto flex items-center relative">
                <div className="md:w-3/5 w-11/12 mx-auto shadow-lg flex flex-col rounded relative">
                    <label className='text-cc text-sm font-bold mb-2 text-md my-5'>NAME</label>
                    <input type="text" className='my-5 p-2 rounded shadow-lg outline-4 outline-ou border-cc border-[1px]' placeholder='Name' />
                    <label className='text-cc text-sm font-bold mb-2 text-md my-5'>SURNAME</label>
                    <input type="text" className='my-5 p-2 rounded shadow-lg outline-4 outline-ou border-cc border-[1px]' placeholder='Surname' />
                    <label className='text-cc text-sm font-bold mb-2 text-md my-5'>E-Mail</label>
                    <input type="mail" className='my-5 p-2 rounded shadow-lg outline-4 outline-ou border-cc border-[1px]' placeholder='E-Mail' />
                    <div className='relative w-full'>
                        <label className='text-cc text-sm font-bold mb-2 text-md my-5'>Select Service</label>
                        <label className='text-cc text-sm font-bold mb-2 text-md my-5 absolute right-1 bottom-[45px]'>Select Deadline</label>
                        <div className='w-full flex'>
                            <select className="mr-2 block appearance-none w-full border border-cc text-cc py-3 px-4 pr-8 rounded outline-ou otline-4 cursor-pointer" id="grid-state">
                                <option>SELECT</option>
                                <option>INFORMATION WEBSITE</option>
                                <option>E-Commerce WEBSITE</option>
                                <option>CUSTOM WEB APPLICATION</option>
                                <option>ANOTHER SERVICE</option>
                            </select>
                            <select className="ml-2 block appearance-none w-full border border-cc text-cc py-3 px-4 pr-8 rounded outline-ou otline-4 cursor-pointer" id="grid-state">
                                <option>SELECT DEADLINE</option>
                                <option>Less then three week</option>
                                <option>Three Week</option>
                                <option>1 - 3 Months</option>
                                <option>1 - 6 Months</option>
                                <option>NOT IN THIS RANGES</option>
                            </select>
                        </div>
                    </div>
                    <label className='text-cc text-sm font-bold mb-2 text-md my-5'>Describe the service you want to receive in a few words</label>
                    <textarea className='my-5 p-2 rounded shadow-lg outline-4 outline-ou border-cc border-[1px]' cols="30" rows="5"></textarea>
                    <button className=' my-5 rounded-xl p-4 text-mainBg bg-gradient-to-r from-fr to-t w-full hover:border-sccColor mx-auto hover:bg-none hover:text-sccColor border-[2px]'>GET OFFER</button>
                </div>
            </div>
        </div>
    )
}

export default GetStarted