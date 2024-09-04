import { Dialog, Typography, Box, List, ListItem, styled } from '@mui/material';
import { qrCodeImage } from '../../constants/data';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';


const DialogBox = {
    color: 'black',
    height: '96vh',
    marginTop: '20%',
    width: '60%',
    maxWidth: 'none',
    boxShadow: 'none',
};

const Component = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    fontSize: 20,
    fontFamily: 'Roboto',
})

const QrCode = styled('img')({
    width: 264,
    height: 264,
    margin: '50px 0 0 50px'
})


const Child = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px'
})

const StyledList = styled(List)`
    & > li {
        padding:  0;
        margin-top: 18px;
        font-size: 20px;
        line-height: 28px;
        color : #4a4a4a;
    }
`

function LoginDialog() {

    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = (res) => {
        console.log("Full response object:", res);

        if (res && typeof res.credential === 'string') {
            try {
                const decoded = jwtDecode(res.credential);
                console.log("Decoded JWT:", decoded);
                setAccount(decoded);
            } catch (error) {
                console.error("Error decoding JWT:", error);
            }
        } else {
            console.error("Invalid response structure or credential:", res);
        }
    };


    const onLoginError = (res) => {
        console.log(res);
    }

    return (
        <Dialog
            open={true}
            PaperProps={{ sx: DialogBox }}
            fullWidth={true}
            hideBackdrop={true}
        >
            <Component>
                <Child>
                    <Typography variant='h4' style={{ color: '#4a4a4a' }}>To use Whatsapp in your computer:</Typography>
                    <StyledList>
                        <ListItem>1. Open whatsapp in your phone.</ListItem>
                        <ListItem>2. Tap Menu : on Android, or Settings on iPhone.</ListItem>
                        <ListItem>3. Tap Linked Devices and then Link a device.</ListItem>
                        <ListItem>4. Point your phone at the screen to capture the QR code.</ListItem>
                    </StyledList>
                </Child>
                <Box style={{ position: 'relative' }}>
                    <QrCode src={qrCodeImage} alt='qr code' />
                    <Box style={{ position: 'absolute', top: '50%', marginLeft: '85px' }}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog


// Typography is an element in material ui that is used instead of tags like h1, h2, h3, h4, h5, h6, p, span, etc.
// for Dialog components we can over write the styling of those components using styled module