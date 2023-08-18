import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const HomePage = () => {
    const navigate = useNavigate()
    const playNow=()=>{
        navigate('/play')

    }
    
  return (
    <div className='container'>
        <img src="/images/dices.png" alt="" className="dices" />
        <div className="home-text">
            <h1 className="text">DICE GAME</h1>
            <button onClick={playNow} className="playnow">PLAY NOW</button>
        </div>
    </div>
  )
}

export default HomePage