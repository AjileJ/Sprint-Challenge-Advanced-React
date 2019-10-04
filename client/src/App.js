import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Players from './Players';
import { useDarkMode } from './useDarkMode';
import Dark from './Dark';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: []
    }
  }
  componentDidMount(){
    axios.get("http://localhost:5000/api/players")
    .then(res => {
      this.setState({
        players:res.data
      })
     
    })
    .catch(err => console.log(err))
  }
render(){
  console.log('p',this.state.players)
  return(
  <div className = 'myapp'>
      <Dark />
    <div className = "myapp2">
      <Players players={this.state.players}/>
    </div>
  </div>
  )
 }
}
export default App;


