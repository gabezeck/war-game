import React from 'react'
import { Center, Stat, StatGroup, StatLabel, StatNumber } from '@chakra-ui/react'

function Stats({ pLength, cLength }) {
  return (
    <Center>
      <StatGroup pos='absolute' bottom='10em' borderRadius='10px' boxShadow='md' borderColor='blue.900' width='33%' bg='white' padding='0.6em'>
        <Stat>
          <StatLabel>Computer Deck Size</StatLabel>
          <StatNumber>{cLength}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Player Deck Size</StatLabel>
          <StatNumber>{pLength}</StatNumber>
        </Stat>
      </StatGroup>
    </Center>
  )
}

export default Stats