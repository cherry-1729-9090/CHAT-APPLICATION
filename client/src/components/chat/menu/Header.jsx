import { Box, styled } from '@mui/system';
import ChatIcon from '@mui/icons-material/Chat';
import { useContext, useState } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';

// Styles
const Component = styled(Box)({
    height: '44px',
    backgroundColor: '#ededed',
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    position: 'relative', // Position relative for stacking context
    zIndex: 1200, // Set a z-index high enough to avoid being overshadowed
});

const Image = styled('img')({
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    cursor: 'pointer', // Indicate it's clickable
});

const Wrapper = styled(Box)({
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    '& > *': {
        marginLeft: '10px',
        color: 'gray',
    },
});

function Header() {
    const { account } = useContext(AccountContext);
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <Component>
            <Image src={account.picture} alt='dp' onClick={toggleDrawer} />
            <Wrapper>
                <ChatIcon />
                <HeaderMenu setOpen = {setOpenDrawer}/>
            </Wrapper>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </Component>
    );
}

export default Header;
