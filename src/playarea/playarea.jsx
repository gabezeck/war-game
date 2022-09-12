import React from 'react'
import { Box, Center, Container, Flex, Spacer } from '@chakra-ui/react'
import Action from '../action/action'
import CardContainer from '../cards/card-container'
import GameOver from '../game-over/game-over'
import Notify from '../notify/notify'
import Stats from '../stats/stats'
import War from '../war/war'
import { phase } from '../enums'

function PlayArea ({ gamestate, notifyNext }) {
  const {
    computerCardsOnBoard,
    computerDeck,
    gameWinner,
    phase: current,
    playerCardsOnBoard,
    playerDeck,
    roundWinner
  } = gamestate

  const roundResults = (
    <Flex>
      <CardContainer m='1.5em 0 0' card={computerCardsOnBoard[0]} />
      <Spacer />
      <CardContainer m='1.5em 0 0' card={playerCardsOnBoard[0]} />
    </Flex>
  )
  
  return (
    <Container padding='2.5em' pos='relative' bg='blue.400' minW='full' sx={{ height: '100vh' }}>
      {current === phase.GAME_OVER
        ? <GameOver winner={gameWinner} />
        : <>
            <Center>
              <Box h='350px' width='60%'>
                {current === phase.ROUND_START && roundResults}
                {current === phase.ROUND_COMPLETE && roundResults}
                {(current === phase.WAR || current === phase.WAR_COMPLETE) && <War gamestate={gamestate} />}
              </Box>
            </Center>
            <Box w='100%' m='2.5em 0'>
              <Action notifyNext={notifyNext} phase={current} />
            </Box>
            <Box w='100%'>
              { roundWinner ? <Notify winner={roundWinner} /> : null }
              <Stats pLength={playerDeck.length} cLength={computerDeck.length} />
            </Box>
          </>
      }
    </Container>
  )
}

export default PlayArea