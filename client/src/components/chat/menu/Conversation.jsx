import { Box, Typography, styled } from '@mui/material'


// styles
const Component = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    height:'45px',
    padding:'13px 0',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.1)'
    }
})


const Image = styled('img')({
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    padding: '0 14px',
    objectFit: 'cover'
})

function Conversation({user}) {
  return (
    <Component>
        <Box>
            <Image src = {user.picture} alt='dp'/>
        </Box>
        <Box>
            <Typography>{user.name}</Typography>
        </Box>
    </Component>
  )
}

export default Conversation
