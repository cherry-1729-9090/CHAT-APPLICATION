import Header from "./Header"
import Search from "./Search"
import { Box } from '@mui/system'
import Conversations from "./Conversations"
function Menu() {
  return (
    <Box>
      <Header />
      <Search />
      <Conversations />
    </Box>
  )
}

export default Menu
