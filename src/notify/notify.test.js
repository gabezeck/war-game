import { render, screen } from '@testing-library/react'
import Notify from './notify'

describe('Notify', () => {
  test('should render the expected text when the computer wins the round', () => {
    render(<Notify winner='Computer' />)

    const headerElement = screen.getByText(/Computer/i)
    expect(headerElement).toBeInTheDocument()
  })

  test('should render the expected text when the player wins the round', () => {
    render(<Notify winner='Player' />)

    const headerElement = screen.getByText(/Player/i)
    expect(headerElement).toBeInTheDocument()
  })

  test('should render the expected text when the round is tied', () => {
    render(<Notify winner='Tied' />)

    const headerElement = screen.getByText(/Round is tied. Prepare for War!/i)
    expect(headerElement).toBeInTheDocument()
  })
})
