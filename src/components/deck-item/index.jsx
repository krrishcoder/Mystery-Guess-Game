/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import classes from './index.module.css'


export default function CardItem({item,  setClickedButton, index, isClicked}){

    const handleClick = () => {
        console.log(index)
        setClickedButton(index)

  
      };

    return (
    
    <div className={classes.buttongrid } style={{ transform: isClicked === index ? 'scale(1.07)':'scale(1)' }}>    
        <button className={classes.btn}  style={{backgroundColor: isClicked === index ? 'blue':''}} onClick= {handleClick}>{item}</button>
    
    </div>
    

)
    

}