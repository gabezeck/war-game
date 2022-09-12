import { Box, ChakraProvider, Heading } from '@chakra-ui/react'
import GameManager from './game-manager/game-manager'

function App () {
  return (
    <ChakraProvider>
      <Box p='2'>
        <Heading
          textAlign='center'
          lineHeight='30px'
          m='0'
          p='0'
          as='h1'
          size='lg'
        >
          WAR!
        </Heading>
      </Box>
      <GameManager />
    </ChakraProvider>
  )
}

export default App
