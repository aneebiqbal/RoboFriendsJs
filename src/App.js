import React, {useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import 'tachyons';
import Scroll from './Scroll';
import { robots } from "./Robots";
import { render } from "react-dom";

function App () {
  // constructor(){
  //   super()
  //   this.state ={
  //     robots: [],
  //     searchfield: ''
  //   }
  // }
  const [robots, setRobots] = useState([])
  const [searchfield , setSearchfield] = useState('')
  const [count , setCount ]= useState(0)

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then (Response =>Response.json())
  .then (users =>setRobots(users));
  console.log(count)
},[count])
  const onSearchChange =(event) => {
    setSearchfield(event.target.value)
  }
 
  {
    const filterRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    console.log(robots,searchfield)
    if(robots.length===0){
      return <h1 className="tc">/LOADING/</h1>
    }
    else{
      return(
        <div className="tc">
        <h1>ROBO FRIENDS</h1>
        <button onClick={()=>setCount(count+1)}>ClickMe!!</button>
        <SearchBox searchChange ={onSearchChange} />
        <Scroll>
        <CardList robots ={filterRobots}/>
        </Scroll>
        </div>
      );
    }
  } 
  
}
export default App;