import TechLogos from './TechLogos';

export default function Home(){
    return (
        <>
        <div className="flex flex-col justify-center items-center pt-24 pb-24 sm:pb-0 sm:pt-0 h-screen">
            <div className="flex flex-col space-y-2 w-10/12 sm:w-7/12">
                <div>
                    <div className="animate-bounce">👋</div>
                    <h1 className="font-bold text-2xl text-zinc-800">Hi, I'm Hugo </h1>
                    <p className=" text-2xl text-zinc-800 italic ">a <a className='font-bold text-yellow-400'>student software developer</a>.</p>
                </div>
                <p className='text-xl'>From an artistic background, I've worked 7 years as a <a className='font-bold'>video editor</a> and <a className='font-bold'>motion designer</a>. <br></br>In october 2022, I joined <a className="text-rose-400 font-bold hover:text-rose-600" href="https://adatechschool.fr/" target="_blank">ada tech school</a>, an inclusive programing school where I'm self-learning computer science by making projects on several technologies. I like <a className='font-semibold text-blue-400'>clean</a> and <a className='font-semibold text-green-400'>well-organized</a> code.<br></br>I'm looking for a <a className='font-bold'>one year apprenticeship</a> in Paris as a full-stack developer.</p>
            
                <p className="text-zinc-800 text-2xl">Feel free to <a className="font-bold text-purple-400 hover:text-purple-600" href="https://www.linkedin.com/in/hugorince/" target="_blank">contact me</a></p>
                <div className='flex flex-col space-y-2'>
                    <p></p>
                    <div className='hidden sm:block sm:flex sm:space-x-4'>
                        <TechLogos />
                    </div>
                </div>
                
            </div>

        </div>
        </>
    )
}