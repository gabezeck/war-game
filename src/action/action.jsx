import React from 'react'
import { Button, Center } from '@chakra-ui/react'
import { phase } from '../enums'

const getText = (current) => {
  switch (current) {
    case phase.ROUND_COMPLETE:
      return 'Collect Cards'
    case phase.ROUND_START:
      return 'Flip Card'
    case phase.WAR_COMPLETE:
      return 'Finish War'
    default:
      return 'Declare War'
  }
}

function Action({ notifyNext, phase: current }) {
  return (
    <Center>
      <Button colorScheme='telegram' variant='solid' onClick={notifyNext}>
        {getText(current)}
      </Button>
    </Center>
  )
}

export default Action