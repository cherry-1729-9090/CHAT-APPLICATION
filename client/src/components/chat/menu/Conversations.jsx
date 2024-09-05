import { getAllUsers } from "../../../service/userCalls"
import { useEffect, useState, useContext } from 'React'
import { Box, styled, Divider } from '@mui/material'
import Converation from './Conversation'
import { AccountContext } from '../../../context/AccountProvider'


// styled
const Component = styled(Box)({
    height: '80vh',
    overflow: 'overlay',
})

const StyledDivider = styled(Divider)({
    margin: '0 0 0 0px',
    opacity: 0.4

})


function Conversations() {

    let [Users, setUsers] = useState([]);
    const { account } = useContext(AccountContext);

    useEffect(() => {
        const fetchUsers = async () => {
            let users = await getAllUsers();
            console.log(users);
            setUsers(users);
        }
        fetchUsers();
    }, [])

    return (
        <Component>
            {/* <Converation/> */}
            {Users.map((user) => {

                return user.sub !== account.sub && 
                <>
                    <Converation key={user._id} user={user} />
                    <StyledDivider />
                </>
            })}
        </Component>
    )
}

export default Conversations
