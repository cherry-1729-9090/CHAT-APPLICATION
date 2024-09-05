import React from 'react';
import { Box, styled } from '@mui/system';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Styles
const Component = styled(Box)({
  backgroundColor: '#fff',
  height: '44px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  position: 'relative',
});

const InputField = styled(InputBase)({
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  border: '1px solid #ccc',
  backgroundColor: '#f0f0f0',
  borderRadius: '4px',
  padding: '5px 10px 5px 40px', // Added left padding for icon
});

const Icon = styled(Box)({
  position: 'absolute',
  left: '10px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'gray',
  zIndex: 1,
});

function Search({ setText }) {
  return (
    <Component>
      <Icon>
        <SearchIcon />
      </Icon>
      <InputField
        placeholder="Search or Start new chat"
        onChange={(e) => setText(e.target.value)}
      />
    </Component>
  );
}

export default Search;