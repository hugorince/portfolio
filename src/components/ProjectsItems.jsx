import { useState } from 'react';

export default function ProjectsItems({projectClicked}){

    const projects = require('./ProjectsList.json');
    console.log(projectClicked)
    
    let projs = projects.map((project) => {
        return <div key={project.id} className="flex flex-col w-52 h-52 items-center justify-center border-solid border-2 border-indigo-600 hover:opacity-70">
                    <div onClick={() => {
                        projectClicked(project.name);
                    }}>
                        <img src={project.img} className="object-contain w-52 h-52" alt="" />
                    </div>
                </div>
      });
        return (
        <div id="project-line" className="grid grid-cols-3 gap-8">
            {projs}
        </div>
    )
}