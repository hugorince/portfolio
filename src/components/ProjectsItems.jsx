import { useState } from 'react';

export default function ProjectsItems({projectClicked}){

    const projects = require('./ProjectsList.json');
    
    let projs = projects.map((project) => {
        return <div key={project.id} className="flex flex-col sm:w-48 h-48 lg:w-52 h-52 items-center justify-center hover:opacity-70">
                    <div onClick={() => {
                        projectClicked(project.name);
                    }}>
                        <img src={project.img} className="object-contain sm:w-48 h-48 lg:w-52 h-52" alt="" />
                    </div>
                </div>
      });
        return (
        <div id="project-line" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projs}
        </div>
    )
}