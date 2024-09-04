import { Dialog, Box, styled } from "@mui/material"

// component imports
import Menu from './menu/Menu'
import Emptychat from "./chat/Emptychat";


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
  width:'75%',
  minWidth: '300px',
  height: '100%',
  borderLeft: '1px solid rgba(0,0,0,0.18)',
});

function chatDialog() {
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
            <Emptychat />
          </RightComponent>

        </Component>
      </Dialog>
    </div>
  )
}

export default chatDialog
