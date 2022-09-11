import React from 'react'
import { Container, Flex, Spacer } from '@chakra-ui/react'
import Deck from '../deck/deck'
import CardContainer from '../cards/card-container'
import Notify from '../notify/notify'
import Stats from '../stats/stats'
import logger from 'debug'

const log = logger('playarea')

function PlayArea ({ gamestate, notifyNext, notifyPlayerMoved }) {
  const {
    computerCardsOnBoard,
    computerDeck,
    playerCardsOnBoard,
    playerDeck,
    roundWinner
  } = gamestate

  log('The winner is: ', roundWinner)
  
  return (
    <Container padding='2.5em' pos='fixed' bg='blue.400' minW='full' minH='full'>
      <Flex margin='2.5em 0'>
        <Deck player={{ name: 'Computer' }} />
        <Spacer />
        <CardContainer card={computerCardsOnBoard[0]} />
        <Spacer />
        <CardContainer card={playerCardsOnBoard[0]} />
        <Spacer />
        <Deck player={{ name: 'Player' }} notifyPlayerMoved={notifyPlayerMoved} />
      </Flex>

      { roundWinner ? <Notify winner={roundWinner} notifyNext={notifyNext} /> : null }

      <Stats pLength={playerDeck.length} cLength={computerDeck.length} />
    </Container>
  )
}

export default PlayArea