import { Drawer, Box, Typography, styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from './Profile';


// Styles
const DrawerStyle = {
    top: 32,
    left: 17,
    height: '93%',
    minWidth: '30%',
    boxShadow: 'none'
};

const Header = styled(Box)({
    backgroundColor: '#008069',
    height: '100px',
    color: 'white',
    display: 'flex',
    '& > svg, & > p': {
        marginTop: 'auto',
        padding: '15px',
        fontWeight: 600,
    },
});


const Component = styled(Box)({
    backgroundColor: '#ededed',   
    height: '86%',
})

const Text = styled(Typography)({
    fontSize: '18px',
});


function InfoDrawer({ open, setOpen }) {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Drawer
            open={open}
            onClose={handleClose}
            anchor="left"
            PaperProps={{ sx: DrawerStyle }}
            style={{ zIndex: 1300 }}
        >
            <Header>
                <ArrowBackIcon onClick={() => { setOpen(false) }} />
                <Text>Profile</Text>
            </Header>
            <Component>
                <Profile />
            </Component>
        </Drawer>
    );
}

export default InfoDrawer;
