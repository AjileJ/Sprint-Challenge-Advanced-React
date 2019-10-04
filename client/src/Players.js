import React from 'react';

const Players = (props) => {
  return(
<div>
  {props.players.map(player => {
    return(
      <div className = 'wrapperD'>
    <h1>Name: {player.name}</h1>
    <p>Country: {player.country}</p>
    <p>ID: {player.id}</p>
    <p>Searches: {player.searches}</p>
    </div>
  )})}
  
</div>
  )
}

export default Players;