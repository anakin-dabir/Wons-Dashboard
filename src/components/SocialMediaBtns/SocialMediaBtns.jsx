// /src/components/SocialMediaBtns.jsx
// Thursday, November 23rd 2023, 5:52 pm

import styled from '@emotion/styled';
import {Button} from '@mui/material';

const SocialMediaBtns = styled(Button)(({theme}) => ({
  width: '164px',
  backgroundColor: theme.palette.background.main,
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.background.main,
  },
}));

export default SocialMediaBtns;
