import React from 'react'
import Box from './box'
import Text from './text'
import Button from './button'

export function CardContainer({ children, ...props }) {
  return (
    <Button bg="white" py={16} px={12} borderRadius="normal" {...props}>
      <Box flex={1} borderLeftWidth={3} pl={12} borderLeftColor="light">
        {children}
      </Box>
    </Button>
  )
}

export function CardTitle({ children }) {
  return (
    <Text fontSize={18} fontWeight="bold">
      {children}
    </Text>
  )
}
export function CardSummary({ children }) {
  return (
    <Text color="textMedium" fontSize={14} mt={8}>
      {children}
    </Text>
  )
}
