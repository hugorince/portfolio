import { Icon } from '@iconify/react';

export default function Contact() {
    return (
        <>
        <div id="contact" className="flex flex-col space-y-4 h-screen justify-center items-center">
            <h1 className='text-2xl'>Always a pleasure 🙃</h1>
            <p>hugo.rince@gmail.com</p>
            <p>06.88.38.65.87</p>
            <div className="flex space-x-4">
                <a href="https://github.com/hugorince" id="profile-link" target="_blank" className="text-blue-800 hover:text-blue-500"><i className="fab fa-github"> GitHub</i></a>
                <a href="https://www.linkedin.com/in/hugorince/" target="_blank" className="text-blue-800 hover:text-blue-500"><i class="fab fa-linkedin-in"> Linkedin</i></a>
                <a href="https://www.codewars.com/users/hugorince" target="_blank" className="flex items-center text-blue-800 hover:text-blue-500"><Icon icon="simple-icons:codewars" />&nbsp;Codewars</a>
            </div>
        </div>
        </>
    )
}