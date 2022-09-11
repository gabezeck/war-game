import React from 'react'
import Card from './card'
import { Box } from '@chakra-ui/react'

function CardContainer({ card }) {
  return (
    <Box border='1px' borderColor='gray.200' borderRadius='10px' boxShadow='md' height='333px' width='234px'>
      {
        card
          ? <Card card={card} />
          : null
      }
    </Box>
  )
}

export default CardContainer