import React from 'react'

import Tile from './ProjectTile'
import projData from '../../public/data/projects'

class Projects extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      proj: props.match.params.name
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      proj: nextProps.match.params.name
    })
  }

  renderProjTiles() {
    return projData.map((proj) => (
      Tile(proj)
    ))
  }

  renderTileboard() {
    return (
      <div id='projects-container'>
        <h2>Projects</h2>
        <div id='tile-board'>
          {this.renderProjTiles()}
        </div>
      </div>
    )
  }

  renderProj(proj) {
    return (
      <div>{proj}</div>
    )
  }

  render() {
    if(this.state.proj) {
      return(
        this.renderProj(this.state.proj)
      )
    }
    return (
      this.renderTileboard()
    )
  }
}



export default Projects
