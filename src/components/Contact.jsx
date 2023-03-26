import { Icon } from '@iconify/react';

export default function Contact() {
    return (
        <>
        <div id="contact" className="flex flex-col space-y-4 h-screen justify-center items-center">
            <h1 className='text-2xl text-zinc-800'>You can email me via this form</h1>
            
            <div className='border border-2 border-black py-8 px-8'>
                <form action="" className='flex flex-col space-y-8'>
                    <div className='flex flex-col'>
                    <label htmlFor="">Your email :</label>
                    <input type="text" />
                    </div>
                    <div className='flex flex-col'>
                    <label htmlFor="">Your message</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </form>
            </div>
            <p>or simply contact me on Linkedin 🙃</p>
            <div className="flex space-x-4">
                <a href="https://github.com/hugorince" id="profile-link" target="_blank" className="text-black hover:text-gray-500"><i className="fab fa-github"> GitHub</i></a>
                <a href="https://www.linkedin.com/in/hugorince/" target="_blank" className="text-blue-800 hover:text-blue-500"><i className="fab fa-linkedin-in"> Linkedin</i></a>
                <a href="https://www.codewars.com/users/hugorince" target="_blank" className="flex items-center text-red-800 hover:text-red-500"><Icon icon="simple-icons:codewars" />&nbsp;Codewars</a>
            </div>
        </div>
        </>
    )
}