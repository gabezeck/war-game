import { render, screen } from '@testing-library/react'
import cards from '../cards/cards'
import { phase } from '../enums'
import Playarea from './playarea'

describe('Playarea', () => {
  describe('Initial game state', () => {
    beforeEach(() => {
      const deck = cards()
      const mid = deck.length / 2

      const gamestate = {
        computerDeck: deck.slice(0, mid),
        playerDeck: deck.slice(mid),
        playerCardsOnBoard: [],
        computerCardsOnBoard: [],
        roundWinner: null,
        phase: phase.ROUND_START,
        gameWinner: null
      }

      render(<Playarea gamestate={gamestate} notifyNext={() => {}} />)
    })

    test('should render two card containers', () => {
      const cardContainer = screen.getAllByTestId('card-container')
      expect(cardContainer.length).toBe(2)
    })

    test('should render a "flip card" button', () => {
      const button = screen.getByText(/Flip card/i)
      expect(button).toBeInTheDocument()
    })

    test('should render two 26 card deck counts', () => {
      const deckCount = screen.getAllByText(/26/i)
      expect(deckCount.length).toBe(2)
    })
  })

  describe('After a normal turn', () => {
    const deck = cards()
    const mid = deck.length / 2
    const cDeck = deck.slice(0, mid)
    const pDeck = deck.slice(mid)
    const pCard = pDeck.shift()
    const cCard = cDeck.shift()

    beforeEach(() => {
      const gamestate = {
        computerDeck: cDeck,
        playerDeck: pDeck,
        playerCardsOnBoard: [pCard],
        computerCardsOnBoard: [cCard],
        roundWinner: 'Player',
        phase: phase.ROUND_COMPLETE,
        gameWinner: null
      }

      render(<Playarea gamestate={gamestate} notifyNext={() => {}} />)
    })

    test('should render two card containers', () => {
      const cardContainer = screen.getAllByTestId('card-container')
      expect(cardContainer.length).toBe(2)

      const card1Image = screen.getByAltText(pCard.name)
      expect(card1Image).toBeInTheDocument()

      const card2Image = screen.getByAltText(cCard.name)
      expect(card2Image).toBeInTheDocument()
    })

    test('should render a "collect cards" button', () => {
      const button = screen.getByText(/Collect Cards/i)
      expect(button).toBeInTheDocument()
    })

    test('should render two 25 card deck counts', () => {
      const deckCount = screen.getAllByText(/25/i)
      expect(deckCount.length).toBe(2)
    })
  })

  describe('After a war is declared', () => {
    const deck = cards()
    const mid = deck.length / 2
    const cDeck = deck.slice(0, mid)
    const pDeck = deck.slice(mid)
    const pCard = pDeck.shift()
    const cCard = cDeck.shift()

    beforeEach(() => {
      const gamestate = {
        computerDeck: cDeck,
        playerDeck: pDeck,
        playerCardsOnBoard: [pCard],
        computerCardsOnBoard: [cCard],
        roundWinner: 'Tied',
        phase: phase.WAR,
        gameWinner: null
      }

      render(<Playarea gamestate={gamestate} notifyNext={() => {}} />)
    })

    test('should render two card containers', () => {
      const cardContainer = screen.getAllByTestId('card-container')
      expect(cardContainer.length).toBe(2)

      const card1Image = screen.getByAltText(pCard.name)
      expect(card1Image).toBeInTheDocument()

      const card2Image = screen.getByAltText(cCard.name)
      expect(card2Image).toBeInTheDocument()
    })

    test('should render a "declare war" button', () => {
      const button = screen.getByText(/Declare War/i)
      expect(button).toBeInTheDocument()
    })
  })

  describe('After a war is played', () => {
    const deck = cards()
    const mid = deck.length / 2
    const cDeck = deck.slice(0, mid)
    const pDeck = deck.slice(mid)
    const pCard = pDeck.shift()
    const cCard = cDeck.shift()
    const pStack = pDeck.splice(0, 3)
    const cStack = cDeck.splice(0, 3)

    beforeEach(() => {
      const gamestate = {
        computerDeck: cDeck,
        playerDeck: pDeck,
        playerCardsOnBoard: [pCard, pStack, pCard],
        computerCardsOnBoard: [cCard, cStack, cCard],
        roundWinner: 'Computer',
        phase: phase.WAR_COMPLETE,
        gameWinner: null
      }

      render(<Playarea gamestate={gamestate} notifyNext={() => {}} />)
    })

    test('should render ten card containers', () => {
      const cardContainer = screen.getAllByTestId('card-container')
      expect(cardContainer.length).toBe(10)
    })

    test('should render a "finish war" button', () => {
      const button = screen.getByText(/Finish War/i)
      expect(button).toBeInTheDocument()
    })
  })

  describe('When a deck is exhausted', () => {
    const deck = cards()
    const mid = deck.length / 2
    const cDeck = deck.slice(0, mid)
    const pDeck = deck.slice(mid)

    beforeEach(() => {
      const gamestate = {
        computerDeck: [],
        playerDeck: [...pDeck, ...cDeck],
        playerCardsOnBoard: [],
        computerCardsOnBoard: [],
        roundWinner: '',
        phase: phase.GAME_OVER,
        gameWinner: 'Player'
      }

      render(<Playarea gamestate={gamestate} notifyNext={() => {}} />)
    })

    test('should render a the proper header', () => {
      const headerElement = screen.getByText(/Player has won the game/i)
      expect(headerElement).toBeInTheDocument()
    })

    test('should render the winning gif', () => {
      const winnerImage = screen.getByAltText('Elaine from Seinfeld dancing')
      expect(winnerImage).toBeInTheDocument()
    })
  })
})
