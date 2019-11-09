import React from 'react'
import axios from 'axios'


class Players extends React.Component {
  state = {
    player: {}
  }

  componentDidMount = () => {
    axios.get("http://localhost:5000/api/players")
         .then(r =>{
           console.log(result)
         })
  }
}

export default Players;