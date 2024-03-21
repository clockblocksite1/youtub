import React from 'react'
import "./Header.css";
import discordImg from "./../img/Vector.png";
import wkImg from "./../img/Vector (1).png";
import telegaImg from "./../img/Vector (3).png"
function Header() {
  return (
    <div className='Header'>
        <div className='head'>
        Eternity
        </div>
        <div className='img'>
            <img src={discordImg} alt='' className='disc'/>
            <img src={wkImg} alt='' className='wk'/>
            <img src={telegaImg} alt='' className='tg'/>
            <button className='skach'>Скачать </button>
        </div>
        
    </div>
  )
}

export default Header