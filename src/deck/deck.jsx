import React from 'react'
import { Box, Text } from '@chakra-ui/react'

function Deck ({ player, notifyPlayerMoved }) {
  const style = player.type === 'p' ? { cursor: 'pointer' } : {}
  return (
    <Box sx={style}>
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
        onClick={notifyPlayerMoved}
      />
    </Box>
  )
}

export default Deck