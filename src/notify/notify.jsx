import React from 'react'
import { Box, Button, Center, Heading, Highlight } from '@chakra-ui/react'

function Notify({ winner, notifyNext = () => {} }) {
  return (
    <Center>
      <Box>
        <Heading marginBottom='0.5em' lineHeight='tall'>
          <Highlight
            query={[winner]}
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'green.200' }}
          >
            {`${winner} has won the round!`}
          </Highlight>
        </Heading>
        <Center>
          <Button colorScheme='telegram' variant='solid' onClick={notifyNext}>
            Next Round
          </Button>
        </Center>
      </Box>
    </Center>
  )
}

export default Notify