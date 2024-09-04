import { AppBar, Toolbar, styled, Box } from '@mui/material';
import LoginDialog from './account/LoginDialog';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import ChatDialog from './chat/chatDialog';

const LoginHeader = styled(AppBar)({
    height: '30vh',
    backgroundColor: '#00bfa5',
    boxShadow: 'none',
});

const Header = styled(AppBar)({
    height: '15vh',
    backgroundColor: '#00bfa5',
    boxShadow: 'none',
});



const Div = styled(Box)({
    height: '100vh',
    backgroundColor: '#DCDCDC',
});

function Messenger() {
    const { account } = useContext(AccountContext);

    return (
        <Div>
            {account ? (<>
                <Header>
                    <Toolbar>
                    </Toolbar>
                </Header>
                <ChatDialog />
            </>
            ) : (
                <div>
                    <LoginHeader>
                        <Toolbar></Toolbar>
                    </LoginHeader>
                    <LoginDialog />
                </div>
            )}
        </Div>
    );
}

export default Messenger;
