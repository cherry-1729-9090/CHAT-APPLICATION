import { Box, Typography, styled } from '@mui/material'
import { AccountContext } from '../../../context/AccountProvider'
import { useContext } from 'react'
import { setConversation } from '../../../service/conversationCalls'

// styles
const Component = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    height: '45px',
    padding: '13px 0',
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

function Conversation({ user }) {
    const { account, person, setPerson } = useContext(AccountContext);

    console.log(user);
    const getUser =  async (user) => {
        setPerson(user);
        await setConversation({senderId : account.sub, receiverId : user.sub});

    }

    return (
        <Component onClick={() => getUser(user)}>
            <Box>
                <Image src={user.picture} alt='dp' />
            </Box>
            <Box>
                <Typography>{user.name}</Typography>
            </Box>
        </Component>
    )
}

export default Conversation
