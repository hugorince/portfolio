import TechLogos from './TechLogos';

export default function Home(){
    return (
        <>
        <div id="home" className="flex flex-col space-y-4 h-screen justify-center items-center lg:pb-48">
            <div className="flex flex-col space-y-2 w-7/12">
                <div>
                    <div className="animate-bounce">👋</div>
                    <h1 className="font-bold text-4xl text-zinc-800">Hi, I'm Hugo </h1>
                    <p className=" text-2xl text-zinc-800 italic ">a student software developer at <a className="hover:text-rose-400 font-bold" href="https://adatechschool.fr/" target="_blank">ada tech school.</a></p>
                </div>
                <p className='text-2xl'>From an artistic background, I've worked 7 years as a <a className='font-bold hover:text-pink-800'>visual artist</a>, <a className='font-bold hover:text-yellow-600'>video editor</a> and <a className='font-bold hover:text-purple-800'>motion designer</a>. <br></br>In october 2022, I joined <a className="font-bold hover:text-rose-400" href="https://adatechschool.fr/" target="_blank">ada tech school</a>, an inclusive programing school where I'm self-learning computer science by doing projects using several different technologies. <br></br>I'm looking for a one year apprenticeship in <a className='font-bold'>Paris</a> as a full-stack developer.</p>
            
                <p className="text-zinc-800 text-2xl">Feel free to <a className="text-rose-400 hover:text-zinc-400" href='#contact'>contact me</a> !</p>
                <div className='flex flex-col space-y-2'>
                    <p></p>
                    <div className='flex space-x-4'>
                        <TechLogos />
                    </div>
                </div>
                
            </div>

        </div>
        </>
    )
}