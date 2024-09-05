import { Box, styled, Typography } from "@mui/material"
import { Search, MoreVert } from '@mui/icons-material'
import { defaultProfilePicture } from "../../../constants/data"

const Header = styled(Box)({
    height: '44px',
    backgroundColor: '#ededed',
    padding: '8px 18px',
    display: 'flex',
    alignItems: 'center',
})

const Image = styled('img')({
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: '50%',
})


const Name = styled(Typography)({
    marginLeft: '12px !important',
});


const Status = styled(Typography)({
    marginLeft: '12px !important',
    fontSize: '12px ',
    color: 'rgba(0,0,0,0.6)',
});

const RightContainer = styled(Box)({
    marginLeft: 'auto',
    '& > svg': {
        padding: '8px',
        fontSize: '22px',
        color: 'rgba(0,0,0,0.6)',
    }
})

function ChatHeader({ person }) {
    return (
        <Header>
            <Image src={person.picture} alt="Avatar" />
            <Box>
                <Name >{person.name}</Name>
                <Status >Last seen</Status>
            </Box>
            <RightContainer>
                <Search />
                <MoreVert />
            </RightContainer>
        </Header>
    )
}

export default ChatHeader
