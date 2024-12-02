import { Stack, Box } from '@mui/material'
import React from 'react'

export const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
        {/* Chat Header */}
        <Box sx={{height: 100, width:"100%", backgroundColor: "#000"}}>

        </Box>
        {/* Msg */}
        <Box width={"100%"} sx={{flexGrow: 1}}>

        </Box>
        {/* Chat Footer */}
        <Box sx={{height:100, width:"100%", backgroundColor:"#000"}}>

        </Box>
    </Stack>
  )
}
