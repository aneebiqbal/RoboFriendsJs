import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import 'tachyons';
import Scroll from './Scroll';
import { robots } from "./Robots";
import { render } from "react-dom";

const state = {
  
}

class App extends Component {
  constructor(){
    super()
    this.state ={
      robots: [],
      searchfield: ''
    }
  }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then (Response =>Response.json())
  .then (users =>this.setState({robots:users}));
}
  onSearchChange =(event) =>{
    this.setState({searchfield: event.target.value})
  }
  render(){
    const filterRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if(this.state.robots.length===0){
      return <h1 className="tc">/LOADING/</h1>
    }
    else{
      return(
        <div className="tc">
        <h1>ROBO FRIENDS</h1>
        <SearchBox searchChange ={this.onSearchChange} />
        <Scroll>
        <CardList robots ={filterRobots}/>
        </Scroll>
        </div>
      );
    }
    
  }
  
}
export default App;