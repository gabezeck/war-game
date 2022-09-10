import React, { useState } from 'react'
import images from './images'
import { Box, Image } from '@chakra-ui/react'

const toggleSide = current => current === 'front' ? 'back' : 'front'

function Card ({ card, position = { x: '50%', y: '50%' } }) {
  const [side, setSide] = useState('back')

  return (
    <Box
      onClick={() => setSide(toggleSide(side))}
      top={position.y}
      left={position.x}
      sx={{ cursor: 'pointer' }}
    >
      <Box pos='relative' width='100%' textAlign='center'>
        {
          side === 'back'
            ? <Image
                height='333px'
                width='234px'
                src={images['back']}
                pos='absolute'
                alt='Card back'
              />
            : <Image
                height='333px'
                width='234px'
                src={images[card.image]}
                pos='absolute'
                alt={card.name} 
          />
        }
      </Box>
    </Box>
  )
}

export default Card