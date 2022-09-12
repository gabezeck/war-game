import { render, screen } from '@testing-library/react'
import images from './images'
import CardContainer from './card-container'

describe('Card container', () => {
  test('should render an image when a card is passed in', () => {
    const card = {
      name: 'Queen of Hearts',
      image: images.hq
    }

    render(<CardContainer card={card} />)
    const cardImage = screen.getByAltText('Queen of Hearts')
    expect(cardImage).toBeInTheDocument()
  })

  test('should render the back of the card when specified', () => {
    const card = {
      name: 'Queen of Hearts',
      image: images.hq
    }

    render(<CardContainer card={card} side='back' />)
    const cardImage = screen.getByAltText('Card back')
    expect(cardImage).toBeInTheDocument()
  })
})
