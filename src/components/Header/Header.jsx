import React from 'react'

import { FaHashtag } from 'react-icons/fa'

import { FiCoffee } from 'react-icons/fi'

import { AiOutlineSetting } from 'react-icons/ai'

import { HeaderContent, HeaderIcons, IconsContent } from './style'

import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderContent>
      <HeaderIcons>
        <Link to='/'>
          <IconsContent>
            <FiCoffee className='icons' />
            Coffeee
          </IconsContent>
        </Link>
        <IconsContent>
          <FaHashtag className='icons' />
          Explore
        </IconsContent>
        <IconsContent>
          <AiOutlineSetting className='icons' />
          Settings
        </IconsContent>
      </HeaderIcons>
    </HeaderContent>
  )
}
