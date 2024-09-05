import { useEffect, useState, useContext } from 'react';
import { Box, styled, Divider } from '@mui/material';
import Converation from './Conversation';
import { AccountContext } from '../../../context/AccountProvider';
import { getAllUsers } from "../../../service/userCalls";

// styled
const Component = styled(Box)({
    height: '80vh',
    overflow: 'overlay',
});

const StyledDivider = styled(Divider)({
    margin: '0 0 0 0px',
    opacity: 0.4,
});

function Conversations({ text }) {
    const [Users, setUsers] = useState([]);
    const [allUsers, setAllUsers] = useState([]); 
    const { account } = useContext(AccountContext);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getAllUsers();
            setAllUsers(users);
        };
        fetchUsers();
    }, []);

    useEffect(() => {
        const filteredUsers = allUsers.filter(user => 
            user.name.toLowerCase().includes(text.toLowerCase())
        );
        setUsers(filteredUsers);
    }, [text, allUsers]); 

    return (
        <Component>
            {Users.map((user) => (
                user.sub !== account.sub &&
                (
                    <div key={user._id}>
                        <Converation user={user} />
                        <StyledDivider />
                    </div>
                )
            ))}
        </Component>
    );
}

export default Conversations;
