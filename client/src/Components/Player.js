import React from 'react'

class Player extends React.Component {
  render(){
  return(
    <article key={this.props.id}>
      <h3>{this.props.player.name}</h3>
      <p>{this.props.player.country}</p>
    </article>
  )}
}

export default Player;