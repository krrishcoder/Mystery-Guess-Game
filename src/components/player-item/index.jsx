/* eslint-disable react/prop-types */





export default function Player({player_item, coins}){

    return (
        <div>
            <img src={player_item.image_path} style={{width:'70px'}}/>
            <h2> {player_item.player_name}</h2>
            <h2>Left Coin :  {coins}</h2>

  
        </div>
      
    )
}