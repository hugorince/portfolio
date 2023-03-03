import ProjectsItems from "./ProjectsItems"
import ProjectModal from "./ProjectModal"
import { useState } from "react"

export default function Projects() {
    const [projectClicked, setProjectClicked] = useState(false)
    const [reponse, setReponse] = useState('');

    return (
        <>
        <div id="projects" className="flex flex-col space-y-8 h-screen justify-center items-center">
            <div style={{display: projectClicked ? 'block' : 'none'}}>
                <ProjectModal
                projectView={reponse} 
                modalClicked={()=>
                setProjectClicked(false)
                }/>
            </div>
            <div style={{display: projectClicked ? 'none' : 'block'}}>
                <ProjectsItems 
                projectClicked={(name)=>{
                    setReponse(name)
                    setProjectClicked(true)
                }}/>
            </div>
        </div>
        </>
    )
};