import { Icon } from '@iconify/react';

export default function Home(){
    return (
        <>
        <div id="home" className="flex flex-col space-y-4 h-screen justify-center items-center lg:pb-12">
            <div className="flex flex-col space-y-2 w-7/12">
                <div>
                    <div className="animate-bounce">👋</div>
                    <h1 className="font-bold text-2xl text-zinc-800">Hi, I'm Hugo </h1>
                    <p className="text-zinc-800 italic lg:w-96">a student software developer at <a className="hover:text-rose-400" href="https://adatechschool.fr/" target="_blank">ada tech school.</a></p>
                </div>
                <p>From an artistic background, I've worked 7 years as a visual artist, video editor and motion designer. In october 2022 I joined <a className="hover:text-rose-400" href="https://adatechschool.fr/" target="_blank">ada tech school</a>, an inclusive programing school where I'm self-learning computer science by doing projects using various technologies. I'm currently looking for a one year apprenticeship in Paris as a full-stack developer.</p>
            
                <p className="text-zinc-800">Feel free to <a className="hover:text-zinc-400" href='#contact'>contact me</a> !</p>
                <div className='flex flex-col space-y-2'>
                    <p></p>
                    <div className='flex space-x-4'>
                        <div className='grayscale hover:scale-105 hover:grayscale-0'>
                        <Icon icon="logos:react" width="30"/>
                        </div>
                        <div className='grayscale hover:scale-105 hover:grayscale-0'>
                        <Icon icon="logos:python" width="30"/>
                        </div>
                        <div className='grayscale hover:scale-110 hover:grayscale-0'>
                        <Icon icon="vscode-icons:file-type-php2" width="30"/>
                        </div>
                        <div className='grayscale hover:scale-105 hover:grayscale-0'>
                        <Icon icon="logos:mysql" width="30"/>
                        </div>
                        <div className='grayscale hover:scale-105 hover:grayscale-0'>
                        <Icon icon="logos:javascript" width="30"/>
                        </div>
                        <div className='grayscale hover:scale-105 hover:grayscale-0'>
                        <Icon icon="simple-icons:phpmyadmin" width="30"/>
                        </div>
                        <div className='grayscale hover:scale-105 hover:grayscale-0'>
                        <Icon icon="logos:apache" height="30"/>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
        </>
    )
}