import React from 'react'
import ProjectSummary from '../projects/ProjectSummary'
 /*The && in that is part of the map function is a conditional statement that executes the code only if projects are available. */ 
const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">       
            {projects && projects.map(project => {
                return (
                    <ProjectSummary project={project} key={project.id} />
                )
            })}
        </div>
    )
}

export default ProjectList