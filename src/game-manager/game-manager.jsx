import React, { useState } from 'react'
import cards from '../cards/cards'
import { winner, phase } from '../enums'
import logger from 'debug'
import PlayArea from '../playarea/playarea'

const log = logger('gamemanager')

const getInitialState = () => {
  const deck = cards()
  const mid = deck.length/2

  return {
    computerDeck: deck.slice(0, mid),
    playerDeck: deck.slice(mid),
    playerCardsOnBoard: [],
    computerCardsOnBoard: [],
    roundWinner: null,
    phase: phase.ROUND_START,
    gameWinner: null
  }
}

function GameManager () {
  const [gamestate, setGamestate] = useState(getInitialState())

  const notifyNext = () => {
    const { phase: current } = gamestate
    switch (current) {
      case phase.ROUND_COMPLETE:
      case phase.WAR_COMPLETE:
        return moveToNextRound()
      case phase.ROUND_START:
        return startRound()
      default:
        return startWar()
    }
  }

  const moveToNextRound = () => {
    log('Completing the round')

    setGamestate(prevState => {
      const { playerCardsOnBoard, computerCardsOnBoard, computerDeck, playerDeck, roundWinner } = prevState
      const cardsToWin = [...playerCardsOnBoard.flatMap(c => c), ...computerCardsOnBoard.flatMap(c => c)]
      return {
        ...prevState,
        computerDeck: roundWinner === winner.COMPUTER ? [...computerDeck, ...cardsToWin] : computerDeck,
        playerDeck: roundWinner === winner.PLAYER ? [...playerDeck, ...cardsToWin] : playerDeck,
        playerCardsOnBoard: [],
        computerCardsOnBoard: [],
        roundWinner: null,
        phase: phase.ROUND_START
      }
    })
  }

  const startRound = () => {
    log('The player has moved')

    const gameOver = gamestate.computerDeck.length === 0 || gamestate.playerDeck.length === 0
    if (gameOver) {
      setGamestate(prevState => {
        log('Updating previous game state: ', prevState)

        return {
          ...prevState,
          phase: phase.GAME_OVER,
          gameWinner: gamestate.computerDeck.length > gamestate.playerDeck.length ? winner.COMPUTER : winner.PLAYER
        }
      })
    } else {
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
          phase: roundWinner === winner.TIED ? phase.WAR : phase.ROUND_COMPLETE,
          roundWinner
        }
      })
    }
  }

  const startWar = () => {
    log('Starting a war')

    setGamestate(prevState => {
      let roundWinner

      const pDeck = [...prevState.playerDeck]
      const cDeck = [...prevState.computerDeck]
      const pStack = pDeck.splice(0, 3)
      const cStack = cDeck.splice(0, 3)
      const pFinal = pDeck.shift()
      const cFinal = cDeck.shift()

      log('The player war stack is: ', pStack)
      log('The player\'s final war card is: ', pFinal)

      if (pFinal.value > cFinal.value) roundWinner = winner.PLAYER
      if (pFinal.value < cFinal.value) roundWinner = winner.COMPUTER
      if (pFinal.value === cFinal.value) roundWinner = winner.TIED

      return { 
        ...prevState,
        computerDeck: cDeck,
        playerDeck: pDeck,
        playerCardsOnBoard: [...prevState.playerCardsOnBoard, pStack, pFinal],
        computerCardsOnBoard: [...prevState.computerCardsOnBoard, cStack, cFinal],
        phase: roundWinner === winner.TIED ? phase.WAR : phase.WAR_COMPLETE,
        roundWinner
      }
    })
  }

  log(gamestate)
  return (
    <PlayArea
      gamestate={gamestate}
      notifyNext={notifyNext}
    />
  )
}

export default GameManager