import React from 'react'
import { Box, Center, Heading, Image } from '@chakra-ui/react'
import elaine from '../img/elaine-dancing.gif'
import loser from '../img/big-l-loser.gif'

function GameOver({ winner }) {
  return (
    <>
      <Center m='5em 0 10px'>
        <Heading
          color='white'
          textAlign='center'
          lineHeight='30px'
          m='0 0 10px'
          p='0'
          as='h1'
          size='lg'
        >
          Player has {winner === 'Player' ? 'won' : 'lost'} the game
        </Heading>
      </Center>
      <Center>
        <Image src={winner === 'Player' ? elaine : loser} />
      </Center>
    </>
  )
}

export default GameOver