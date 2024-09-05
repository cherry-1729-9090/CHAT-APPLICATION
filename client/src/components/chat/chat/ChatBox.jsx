import { Box, styled } from '@mui/material'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { AccountContext } from '../../../context/AccountProvider'
import { useContext } from 'react'


function ChatBox() {

  const { person } = useContext(AccountContext);

  return (
    <Box style={{ Height: '75%' }}>
      <ChatHeader person = {person}/>
      <Messages person = {person} />
    </Box>
  )
}

export default ChatBox
