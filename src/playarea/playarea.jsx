import React, { useState } from 'react'
import { Center, Container, Flex, Spacer, Stat, StatGroup, StatLabel, StatNumber } from '@chakra-ui/react'
import Deck from '../deck/deck'


function PlayArea ({ children }) {

  return (
    <Container padding='2.5em' pos='fixed' bg='blue.400' minW='full' minH='full'>
      <Flex margin='2.5em 0'>
        <Deck player={{ name: 'Computer', type: 'c' }} />
        <Spacer />
        <Deck player={{ name: 'Player', type: 'p' }} />
      </Flex>
      <Center>
        <StatGroup pos='absolute' bottom='10em' borderRadius='10px' boxShadow='md' borderColor='blue.900' width='33%' bg='white' padding='0.6em'>
          <Stat>
            <StatLabel>Player Deck Size</StatLabel>
            <StatNumber>345,670</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Computer Deck Size</StatLabel>
            <StatNumber>45</StatNumber>
          </Stat>
        </StatGroup>
      </Center>
    </Container>
  )
}

export default PlayArea