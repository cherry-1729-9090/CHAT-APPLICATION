import Header from "./Header"
import Search from "./Search"
import { Box } from '@mui/system'
import Conversations from "./Conversations"
import { useState } from "react"


function Menu() {

  const [text, setText] = useState('');


  return (
    <Box>
      <Header />
      <Search  setText = {setText}/>
      <Conversations  text = {text}/>
    </Box>
  )
}

export default Menu
