import React from 'react'
import Card from './card'
import { Box } from '@chakra-ui/react'

function CardContainer({ m, card, side, position, zIndex, left }) {
  return (
    <Box border='1px' m ={m} position={position} zIndex={zIndex} left={left} borderColor='gray.200' borderRadius='10px' boxShadow='md' height='333px' width='234px'>
      {
        card
          ? <Card card={card} side={side} />
          : null
      }
    </Box>
  )
}

export default CardContainer