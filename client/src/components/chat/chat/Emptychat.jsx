import { emptyChatImage } from "../../../constants/data"
import { Box, styled, Typography } from '@mui/material'

const Component = styled(Box)({
  backgroundColor: '#f8f9fa',
  padding: '30px 0',
  textAlign: 'center',
  height: '100%',
})

const Container = styled(Box)({
  padding: '0 200px',
})

const Image = styled('img')({
  width: 600,
  height: 400,
  padding: '20px',
})

const Title = styled(Typography)({
  fontSize: '32px',
  margin: '25px 0 10px 0',
  fontWeight: 300,
  color: '#41525d',
})

const SubTitle = styled(Typography)({
  fontSize: '18px',
  fontWeight: 200,
  color: '#41525d',
})

function Emptychat() {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="empty chat" />
        <Title variant="h6">Chatgram</Title>
        <SubTitle>Keeps your friends connected</SubTitle>
      </Container>
    </Component>
  )
}

export default Emptychat
