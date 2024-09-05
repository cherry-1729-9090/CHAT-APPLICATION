import { Box, colors, InputBase, styled } from "@mui/material";
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';


// styling
const Component = styled(Box)({
    height:'55px',
    backgroundColor: '#ededed',
    display:'flex',
    width: '97.5%',
    alignItems: 'center',
    padding:'0 15px',
    '& > *':{
        marginLeft: '5px',
        color: '#919191',
    }
});

const Search = styled(Box)({
    backgroundColor: '#FFFFFF',
    borderRadius: '18px',
    padding: '5px',
    width:'calc(94% - 100px)',
})

const InputField = styled(InputBase)({
    width: '100%',
    padding:'15px',
    height:'15px',
    paddingLeft: '15px',
    fontSize: '14px',
})


function Footer() {
  return (
    <Component>
        <SentimentSatisfiedOutlinedIcon />
        <AttachFileOutlinedIcon />
        <Search>
            <InputField
                placeholder="Type a message"
            />
        </Search>
        <MicNoneOutlinedIcon />
    </Component>
  )
}

export default Footer
