import { render, screen } from '@testing-library/react'
import GameOver from './game-over'

describe('Game over', () => {
  test('should render correct image and text when player loses', () => {
    render(<GameOver winner='Computer' />)

    const loserImage = screen.getByAltText('Woman making loser sign')
    expect(loserImage).toBeInTheDocument()

    const headerElement = screen.getByText(/Player has lost the game/i)
    expect(headerElement).toBeInTheDocument()
  })

  test('should render correct image and text when player wins', () => {
    render(<GameOver winner='Player' />)

    const winnerImage = screen.getByAltText('Elaine from Seinfeld dancing')
    expect(winnerImage).toBeInTheDocument()

    const headerElement = screen.getByText(/Player has won the game/i)
    expect(headerElement).toBeInTheDocument()
  })
})
