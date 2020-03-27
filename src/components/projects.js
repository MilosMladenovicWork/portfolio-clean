import React from 'react'

import Project from './project'

function Projects({data,projectNum}){
  
  return(
    <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', alignItems:'flex-start'}}>
      {
        data.allProjectsJson.nodes.map((project, i) => {
          if( i >= projectNum){
            return
          }
          return (
          <Project 
            text={project.name} 
            img={project.img && project.img.publicURL} 
            href={project.href}
            slug={project.slug}
          />
          )
        })
      }
    </div>
  )
}

export default Projects