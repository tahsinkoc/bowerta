import Link from 'next/link'
function Content(props) {

    
    

  return (
    <div className='h-full z-0'>
        <div className="max-w-screen-xl h-screen mx-auto flex items-center justify-center flex-col md:h-screen">
            <h2 className='text-center text-6xl m-5 text-gr'>
                Data to enrich <b className='text-sccColor'>your online business</b>
            </h2>
            <p className='m-5 text-lg text-center text-cc'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className='flex items-center justify-center mt-10'>
                <Link href='/getstarted'>
                    <a>
                        <button className='text-lg p-3 w-44 text-mainBg border-[2px] border bg-gradient-to-r from-fr to-t mr-2 rounded-md hover:bg-after'>Get Started</button>
                    </a>
                </Link>
                <button className='text-lg p-3 w-44 text-sccColor ml-2 rounded-md shadow-lg'>Live Demo</button>
            </div>
        </div>
    </div>
  )
}

export default Content