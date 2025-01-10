/* eslint-disable no-unused-vars */
import { useState } from 'react'
import CardItem from './components/deck-item/index.jsx'
import classes from './components/deck-item/index.module.css'
import "./index.css"

import Player from "./components/player-item/index.jsx"
import { useEffect } from 'react'

const unique_card = ['Ace','2','3','4','5','6','7','8','9','10', 'King', 'Queen' , 'Jack']
const img_arr = ['/images/ace.jpeg','/images/two.jpeg']
const players = [
  {player_name :'You' , image_path:'/images/gamer.png' , left_coin:10},
  {player_name :'Opponent' , image_path:'/images/gamer_girl.png',  left_coin:7}
]

function PrepareDeck(){

console.log("prepare dec was called")
  const dec = new Array(52).fill("-1");
  


  for(let i=0;i<4;i++){
    for(let j=0;j<13;j++){
        dec[i*13 + j]  = unique_card[j]
    }
  }

  console.log(dec)
 
  const randomized_dec = []


    while(dec.length !=0){
      let r_index = getRandomInt(0,dec.length-1);

        randomized_dec.push(dec[r_index])
        dec[r_index] = dec[dec.length -1]
        dec.pop()
        
    }
  
console.log(randomized_dec)

return randomized_dec


}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function App() {

//states
const [isClicked, setIsClicked] = useState(null);
const [spaceOne, setSpaceOne] = useState(0);
const [spaceTwo, setSpaceTwo] = useState(0);
const [greet, setGreet]= useState(null);

const [coinOne, setcoinOne] = useState(players[0].left_coin);
const [coinTwo, setcoinTwo] = useState(players[1].left_coin);


console.log(isClicked);








function  startGame(dec, key ){

  let j =0;

  const intervalId = setInterval(() => {
      
      j++;
      console.log(`index: ${j}`);

      if(j%2==0){
        setSpaceOne(dec[j]);
      }else{
        setSpaceTwo(dec[j]);
      }
    

      if (dec[j] ==  unique_card[key] || j === 52 ) {
          clearInterval(intervalId); 

          if(j%2==0){
            //space 1
            // update coins
        
            setGreet('you won');
            setcoinOne(coinOne+1)
            setcoinTwo(coinTwo-1)
           

         
        
          }else{
            //space 2
            // update coins
            setGreet('Lost')
            setcoinOne(coinOne-1)
            setcoinTwo(coinTwo+1)
        
          }

          setTimeout(() => {
            setGreet('')
        }, 5000);

          console.log("Stopped!");
      }

  }, 1000);
  

    

  




}

function  setClickedButton(index){
  setIsClicked(index)
  const dec =  PrepareDeck()

  startGame(dec, index)

 



}
 
useEffect(() => {

}, [isClicked]); // Runs when is clicked changes


  return (
    <>
      <div>


      <h2 className='title-make-a-guess'>Mystery Guess</h2>
      <h4>hii from coder</h4>
      <h3>hii from coder 2nd time</h3>
      <h4>hii third time</h4>
      <h3>hii fourth time</h3>
          <h3>Rule :-  guess a card , we will randomly throw card if you win we give a coin </h3>
        
          <h3 style={{color:'red'}}>{greet}</h3>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div>
      <Player player_item ={players[0]} coins={coinOne} />
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between' }}>

      <div style={{margin:'10px', backgroundColor:'pink', padding:'30px'}}>
      <h3>{spaceOne}</h3>
      </div>

      <div style={{margin:'10px', backgroundColor:'orange', padding:'30px'}}>
      <h3>{spaceTwo}</h3>
      </div>
     
    </div>


    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Player player_item ={players[1]}  coins={coinTwo}/>
    </div>
</div>


  

  <div className={classes.buttongrid }>  
          {unique_card.length>0 && unique_card.map((ele,index)=>(<CardItem item={ele} key={index} index={index} isClicked={isClicked} setClickedButton={  setClickedButton} />))}
        </div>



       
      </div>
  
    </>
  )
}

export default App
