import React from 'react'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import CardContainer from '../cards/card-container'

const cardStack = (cards, player) => {
  let zInd = 0
  let offSet = 0

  return (
    <Box position='relative'>
      {cards.map(current => {
        if (Array.isArray(current)) {
          return current.map((card, i) => {
            zInd += i
            player === 'c' ? offSet -= i*10 : offSet += i*10
            return <CardContainer key={i} position='absolute' zIndex={zInd} left={`${offSet}px`} side='back' card={card} />
          })
        } else {
          zInd += 1
          player === 'c' ? offSet -= 10 : offSet += 10
          return <CardContainer key={zInd} position='absolute' zIndex={zInd} left={`${offSet}px`} card={current} />
        }
      })}
    </Box>
  )
}

function War({ gamestate }) {
  const PlayerStack = cardStack(gamestate.playerCardsOnBoard, 'p')
  const ComputerStack = cardStack(gamestate.computerCardsOnBoard, 'c')

  return (
    <Box width='85%'>
      <Flex>
        {ComputerStack}
        <Spacer />
        {PlayerStack}
      </Flex>
    </Box>
  )
}

export default War