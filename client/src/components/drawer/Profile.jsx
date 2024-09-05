import { Box, styled, Typography } from '@mui/material'
import { AccountContext } from '../../context/AccountProvider'
import { useContext } from 'react'


// styles
const ImageContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0',
});

const Image = styled('img')({
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    
});

const BoxWrapper = styled(Box)({
    backgroundColor: '#FFFFFF',
    padding:'12px 30px 2px',
    boxShadow: '0 1px 3px rgb(0, 0, 0, 0.08)',
    '& : first-child':{
        fontSize : '13px',
        color: '#009688',
        fontWeight: 200,
    },

    '& : last-child':{
        margin: '14px 0',
        color: '#4A4A4A',

    }

});

const DescriptionContainer = styled(Box)({
    padding: '12px 20px 28px 30px',
    '& > p':{
        fontSize: '13px',
        color: '#8696a0'
    }
});

function Profile() {
    const { account } = useContext(AccountContext);

    return (
        <div>
            <ImageContainer>
                <Image src={account.picture} />
            </ImageContainer>
            <BoxWrapper>
                <Typography >Your Name :</Typography>
                <Typography >{account.name}</Typography>
            </BoxWrapper>
            <DescriptionContainer>
                <Typography>This is not your username or pin. This will be visible to your Whatsapp contacts.</Typography>
            </DescriptionContainer>
            <BoxWrapper>
                <Typography>About</Typography>
                <Typography>Coding is fun😉</Typography>
            </BoxWrapper>
        </div>
    )
}

export default Profile
