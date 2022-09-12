import React from 'react'
import { Box, Text } from '@chakra-ui/react'

function Deck ({ player, height, width, position, left, right }) {
  return (
    <Box height={height} width={width} position={position} left={left} right={right}>
      <Text as='h5' color='whiteAlpha.900'>{player.name}</Text>
      <Box 
        bgImage='url("/card-back.svg")' 
        p='4' 
        border='1px' 
        borderColor='gray.200' 
        borderRadius='10px' 
        boxShadow='md' 
        height='333px' 
        width='234px'
      />
    </Box>
  )
}

export default Deck