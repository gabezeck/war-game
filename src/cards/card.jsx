import React from 'react'
import images from './images'
import { Box, Image } from '@chakra-ui/react'

function Card ({ card, side = 'front' }) {
  return (
    <Box sx={{ cursor: 'pointer' }} >
      <Box pos='relative' width='100%' textAlign='center'>
        {
          side === 'back'
            ? <Image
                height='333px'
                width='234px'
                src={images['back']}
                alt='Card back'
              />
            : <Image
                height='333px'
                width='234px'
                src={images[card.image]}
                alt={card.name} 
          />
        }
      </Box>
    </Box>
  )
}

export default Card