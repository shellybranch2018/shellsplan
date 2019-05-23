import React from 'react'
import ProjectSummary from '../projects/ProjectSummary'
import { Link } from 'react-router-dom'
 /*The && in that is part of the map function is a conditional statement that executes the code only if projects are available. */ 
const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">       
            {projects && projects.map(project => {
            
                return (
                    <Link to={'/project/' + project.id} key={project.id} >
                      <ProjectSummary project={project} />
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList