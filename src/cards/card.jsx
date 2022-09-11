import React from 'react'
import images from './images'
import { Box, Image } from '@chakra-ui/react'

function Card ({ card }) {
  return (
    <Box position='relative' sx={{ cursor: 'pointer' }}>
      <Image
        minHeight='100%'
        minWidth='100%'
        src={images[card.image]}
        pos='absolute'
        alt={card.name} 
      />
    </Box>
  )
}

export default Card