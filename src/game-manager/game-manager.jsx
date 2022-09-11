import React, { useState } from 'react'
import cards from '../rules-engine/cards/cards'
import logger from 'debug'
import PlayArea from '../playarea/playarea'

const log = logger('gamemanager')

const initialState = {
  computerDeck: cards(),
  playerDeck: cards(),
  playerCardsOnBoard: [],
  computerCardsOnBoard: [],
  roundWinner: null
}

const winner = {
  TIED: 'Tied',
  COMPUTER: 'Computer',
  PLAYER: 'Player'
}

function GameManager () {
  const [gamestate, setGamestate] = useState(initialState)

  const notifyNext = () => {
    log('Completing the round')

    setGamestate(prevState => {
      const { playerCardsOnBoard, computerCardsOnBoard, computerDeck, playerDeck, roundWinner } = prevState
      const cardsToWin = [...playerCardsOnBoard, ...computerCardsOnBoard]
      return {
        ...prevState,
        computerDeck: roundWinner === winner.COMPUTER ? [...computerDeck, ...cardsToWin] : computerDeck,
        playerDeck: roundWinner === winner.PLAYER ? [...playerDeck, ...cardsToWin] : playerDeck,
        playerCardsOnBoard: [],
        computerCardsOnBoard: [],
        roundWinner: null
      }
    })
  }

  const notifyPlayerMoved = () => {
    log('The player has moved')

    setGamestate(prevState => {
      log('Updating previous game state: ', prevState)
      let roundWinner

      const pDeck = [...prevState.playerDeck]
      const cDeck = [...prevState.computerDeck]
      const pCard = pDeck.shift()
      const cCard = cDeck.shift()
      
      const pCardsOnBoard = [pCard]
      const cCardsOnBoard = [cCard]
      
      if (pCard.value > cCard.value) roundWinner = winner.PLAYER
      if (pCard.value < cCard.value) roundWinner = winner.COMPUTER
      if (pCard.value === cCard.value) roundWinner = winner.TIED

      return {
        ...prevState,
        computerDeck: cDeck,
        playerDeck: pDeck,
        playerCardsOnBoard: pCardsOnBoard,
        computerCardsOnBoard: cCardsOnBoard,
        roundWinner
      }
    })

  }

  log(gamestate)
  return (
    <PlayArea
      gamestate={gamestate}
      notifyPlayerMoved={notifyPlayerMoved}
      notifyNext={notifyNext}
    />
  )
}

export default GameManager