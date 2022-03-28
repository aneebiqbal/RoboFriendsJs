import React from "react";
import Crad from "./Card";

const CardList = ({robots , a, b}) => {
  const cardArray = robots.map((user , i) =>{
      return(
      <Crad 
      key={i}
       id={robots[i].id}
        name={robots[i].name}
         email={robots[i].email}
    />
      );
     })
  return(
    <div>
    {cardArray}
    </div>
  );
}
export default CardList;