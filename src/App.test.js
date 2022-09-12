import { render, screen } from '@testing-library/react'
import App from './App'

describe('On initial load', () => {
  beforeEach(() => {
    render(<App />)
  })

  test('should render the expected header', () => {
    const headerElement = screen.getByText(/War!/i)
    expect(headerElement).toBeInTheDocument()
  })
})
