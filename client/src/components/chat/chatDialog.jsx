import { Dialog, Box, styled } from "@mui/material"
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

// component imports
import Menu from './menu/Menu'
import Emptychat from "./chat/Emptychat";
import ChatBox from "./chat/ChatBox";

// styling
const DialogBox = {
  color: 'black',
  height: '96vh',
  width: '98%',
  maxWidth: 'none',
  boxShadow: 'none',
  margin: '20px',
};

const Component = styled(Box)({
  display: 'flex',
  height: '100%',
});

const LeftComponent = styled(Box)({
  minWidth: '450px',
  height: '100%',
});

const RightComponent = styled(Box)({
  width: '75%',
  minWidth: '300px',
  height: '92%',
  borderLeft: '1px solid rgba(0,0,0,0.18)',
});

function ChatDialog() {
  const { person } = useContext(AccountContext);

  // Use a safe check to ensure person is an object before using Object.keys
  const hasPerson = person && Object.keys(person).length > 0;

  return (
    <div>
      <Dialog
        open={true}
        PaperProps={{ sx: DialogBox }}
        fullWidth={true}
        hideBackdrop={true}
      >
        <Component>
          {/* Left component is the component that shows contacts */}
          <LeftComponent>
            <Menu />
          </LeftComponent>

          {/* Right component is the component that shows the chat */}
          <RightComponent>
            {hasPerson ? <ChatBox /> : <Emptychat />}
          </RightComponent>

        </Component>
      </Dialog>
    </div>
  )
}

export default ChatDialog;
