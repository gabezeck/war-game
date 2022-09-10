import { Box, ChakraProvider, Heading } from '@chakra-ui/react'
import PlayArea from './playarea/playarea'

const card = {
  name: 'Ace of Spades',
  value: 1,
  image: 'sa'
}

function App () {
  return (
    <ChakraProvider>
      <Box p='2'>
        <Heading margin='0 0 0.5em 0' as='h1' size='lg'>
          WAR!
        </Heading>
        <Heading as='h3' size='sm'>
          To begin playing against the computer, simply click on the deck marked
          "Player". To play a turn, simply do the same. Keep clicking the deck
          until someone has won all the cards and victory is declared!
        </Heading>
      </Box>
      <PlayArea />
    </ChakraProvider>
  )
}

export default App
