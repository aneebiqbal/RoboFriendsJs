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
      robots: robots,
      searchfield: ''
    }
  }
  onSearchChange =(event) =>{
    this.setState({searchfield: event.target.value})
  }
  render(){
    const filterRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
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
export default App;