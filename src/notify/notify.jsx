import React from 'react'
import { Box, Center, Heading, Highlight } from '@chakra-ui/react'
import { winner } from '../enums'

function Notify({ winner: current }) {
  return (
    <>
      {
        current !== winner.TIED
        ? <Center>
            <Box>
              <Heading color='white' marginBottom='0.5em' lineHeight='tall'>
                <Highlight
                  query={[current]}
                  styles={{ px: '5', py: '1', rounded: 'full', bg: 'green.200', color: 'white' }}
                >
                  {`${current} has won the round!`}
                </Highlight>
              </Heading>
            </Box>
          </Center>
        : <Center>
          <Box>
            <Heading color='white' marginBottom='0.5em' lineHeight='tall'>
              Round is tied. Prepare for War!
            </Heading>
          </Box>
        </Center>
      }
    </>
  )
}

export default Notify