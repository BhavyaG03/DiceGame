import React, { useState } from 'react'
import styled from 'styled-components'

const Play = () => {
    const[selected,setSelected]=useState(false)
    const[currentDice,setCurrentDice]=useState(1)
    const[score,setScore]=useState(0)
    const[error,setError]=useState('')
    const[rules,setRules]=useState(false)
    const nums=[1,2,3,4,5,6]

    const Box=styled.div`
    height:50px;
    width:50px;
    border:1px solid black;
    display:grid;
    place-items:center;
    font-size:24px;
    font-weight:700;
    background-color:${(props)=>props.isSelected? "black":"white"};
    color:${(props)=>props.isSelected? "white":"black"};
    cursor:pointer;
    `
    const generateRandomNumber=(max,min)=>{
       return Math.floor(Math.random()*(max-min)+min)
}
const roleDice=()=>{
    if (!selected) {
        setError('You have not selected a number')
        return;
    }
    const randomNumber=generateRandomNumber(7,1)
    setCurrentDice((prev)=>randomNumber)
    if (selected===randomNumber) {
        setScore((prev)=>prev+randomNumber)
    } else {
        setScore((prev)=>prev-2)
    }
    setSelected(undefined)

}
const handleReset=()=>{
    setScore('0')

}
const handleNumber=(value)=>{
    setSelected(value);
    setError('');
}

  return (
    <div className="main-container">
    <div className='main'>
        <div className="score">
            <h1 className="text">{score}</h1>
            <p className="total-score">Total Score</p>
        </div>
        <div className="select-number">
            <p className="red">{error}</p>
            <div className="select">
                {
                    nums.map((value,i)=>(
                        <Box isSelected={value===selected} key={i} onClick={()=>handleNumber(value)}>{value}</Box>
                    ))
          
          }
            </div>
            <p className="num-text">Select Number</p>
        </div>
        </div>
        <div className="dice">
            <img src={`images/dice/dice_${currentDice}.png`} onClick={roleDice} alt="" className="dice-num" />
            <p className="dice-text">Click on dice to roll</p>
            <button className="reset" onClick={handleReset}>Reset Score</button>
            <button className="playnow" onClick={()=>setRules(prev=>!prev)}>{rules?'Hide':'Show'} Rules</button>
            { rules?
                <div className="rules">
                     <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>If you get wrong guess then 2 point will be dedcuted </p>
      </div>
                </div> : null
            }            
        </div>
    </div>
  )
}

export default Play