import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import {BsDribbble } from 'react-icons/bs'


const HeaderSocials = () => {
  return (
      <div className='header__socials'>
          <a href={"https://linkedin.com"} target="_blank" rel="noopener noreferrer" alt=''><BsLinkedin /></a>
          <a href={"https://github.com" }target="_blank" rel="noopener noreferrer" alt='' > <AiFillGithub /></a>
          <a href={"https://dribble.com"} target="_blank" rel="noopener noreferrer" alt=''> <BsDribbble /></a>
        
    </div>
  )
}

export default HeaderSocials