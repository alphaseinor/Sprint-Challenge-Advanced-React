import React from 'react'
import axios from 'axios'
import Player from './Player.js'

class Players extends React.Component {
  state = {
    players: []
  }

  componentDidMount = () => {
    axios.get("http://localhost:5000/api/players")
         .then(result =>{
           //console.log(result)
           this.setState({
             players: result.data
           })
         })
         .catch(err => console.log(err))
  }

  render(){
    const {players} = this.state;
    return(
      <div>
        {players.map(player => {
          return <Player player={player} />
        })}
      </div>
    )
  }

}

export default Players;