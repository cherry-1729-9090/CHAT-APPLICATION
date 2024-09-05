import { Box, styled } from "@mui/material"
import { chatBgImage } from "../../../constants/data"
import Footer from "./Footer"


const Wrapper = styled(Box)({
    backgroundImage: `url(${chatBgImage})`,
    backgroundSize: '40%',
})

const Component = styled(Box)({
    height: '80vh',
    overflowY: 'scroll',
})

function Messages() {
  return (
    <Wrapper>
        <Component>
            {/* <Message /> */}
        </Component>
        <Footer />
    </Wrapper>
  )
}

export default Messages
