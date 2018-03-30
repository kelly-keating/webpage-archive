import React from 'react'

const ProjectTile = (proj) => (
  <div className='project-tile' key={proj.alias}>
    <a href={proj.href} target="_blank">
      <img src={proj.image} className='proj-img'/>
      <h3>{proj.name}</h3>
    </a>
    {proj.blurb}
  </div>
)

export default ProjectTile
