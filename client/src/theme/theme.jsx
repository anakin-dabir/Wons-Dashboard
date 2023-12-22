// /src/theme/useSchedulePageStyle.jsx
// Friday, December 8th 2023, 8:20 pm

import {
  Typography,
  Popper,
  TextField,
  Stack,
  styled,
  Avatar,
  TableCell,
  TableRow,
  TableSortLabel,
  alpha,
  Button,
  Table,
  Tabs,
  Tab,
  AvatarGroup,
  Input,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import DoneIcon from '@mui/icons-material/Done';
import {autocompleteClasses} from '@mui/material/Autocomplete';

export const lightMode = {
  palette: {
    background: {
      default: '#F1F4FA',
      main: '#F1F4FA',
      custom: 'rgba(153, 178, 198, 0.2)',
    },
    neutral: {
      main: '#FFFFFF',
    },
    primary: {
      main: '#3A36DB',
    },
    secondary: {
      main: '#FF69B4',
      medium: 'rgba(255, 105, 180, 0.7)',
      dim: 'rgba(255, 105, 180, 0.1)',
      lid: '#FF69B4',
      bg: 'rgba(255, 105, 180, 0.1)',
    },
    tertiary: {
      main: '#03A89E',
    },
    pink: {
      main: '#FF69B4',
    },
    danger: {
      main: '#C41C1C',
    },
    text: {
      primary: '#06152B',
      secondary: '#06152B',
      custom: '#3A36DB',
      dim: '#000',
      tag: 'rgba(0, 0, 0, 0.5)',
      reverse: '#ffffff',
    },
  },
};

export const darkMode = {
  palette: {
    background: {
      default: '#1A202C',
      main: '#1A202C',
      custom: 'rgba(255, 255, 255, 0.2)',
    },
    neutral: {
      main: '#364153',
    },
    primary: {
      main: '#605CFF',
    },
    secondary: {
      main: '#605CFF',
      medium: 'rgba(95, 92, 255, 0.6)',
      dim: 'rgba(95, 92, 255, 0.1)',
      lid: '#bbb0b0',
      bg: 'rgba(26, 32, 44, 0.1)',
    },
    tertiary: {
      main: '#2FE5A7',
    },
    pink: {
      main: '#FF69B4',
    },
    danger: {
      main: '#C41C1C',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
      custom: '#605CFF',
      dim: '#fff',
      tag: 'rgba(255, 255, 255, 0.5)',
      reverse: '#000000',
    },
  },
};

export const FormButton = styled(LoadingButton)(({theme}) => ({
  '&.Mui-disabled': {backgroundColor: theme.palette.text.dim},
  '& .MuiLoadingButton-loadingIndicator': {
    color: theme.palette.text.reverse,
  },
}));

export const StyledInputField = styled(Input)(({theme, props}) => {
  const [palette, property] = (props.backgroundColor || 'background.main').split('.');
  return {
    backgroundColor: theme.palette[palette][property],
    height: props.height || 50,
    width: props.width || '100%',
    flexShrink: 0,
    borderRadius: props.borderRadius || '8px',
    padding: props.padding || '10px 15px',
    margin: props.margin || 0,
    '&.Mui-error': {
      border: `0.5px solid ${theme.palette.danger.main}`,
    },
  };
});

export const SvgIcon = styled(Stack)(({theme, color}) => {
  const [palette, property] = (color || 'text.dim').split('.');
  return {
    '& :first-of-type': {
      fill: theme.palette[palette][property],
    },
  };
});

export const SheduleInsideContainer = styled(Stack)(({theme}) => ({
  flexDirection: 'column',
  gap: 24,
  width: '100%',
  position: 'relative',
  height: '100%',
  [theme.breakpoints.up('xl')]: {
    flexDirection: 'row',
  },
}));

export const ResponsiveSideBarButtonsContainer = styled(Stack)(({theme}) => ({
  gap: 16,
  flexDirection: 'row',
  [theme.breakpoints.up('xl')]: {
    display: 'none',
  },
}));

export const PlusIconBtn = styled(Button)(({width, height}) => ({
  width: width,
  height: height,
  gap: 8,
  paddingX: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const CalenderContainer = styled(Stack)(({theme, props}) => {
  return {
    width: '100%',
    maxWidth: '385px',
    height: '100vh',
    [theme.breakpoints.up('xl')]: {
      height: 1000,
      width: '30%',
      position: 'static',
      transform: 'translateX(0)',
    },
    justifyContent: 'space-between',
    backgroundColor: theme.palette.neutral.main,
    padding: '30px 35px',
    position: 'fixed',
    top: 0,
    right: 0,
    zIndex: 60,
    transform: props.sideBarOpened ? 'translateX(0)' : 'translateX(100%)',
    transition: theme.transitions.create(['transform']),
  };
});

export const SearchDataContainer = styled(Stack)({
  gap: '10px',
  overflowY: 'auto',
  height: '240px',
});

export const SearchedUserContainer = styled(Stack)(({theme, ...rest}) => ({
  flexDirection: 'row',
  borderBottom: '1px solid',
  gap: '20px',
  padding: '0px 0px 15px 4px',
  alignItems: 'center',
  borderColor: theme.palette.background.custom,
}));

export const SearchedUserAvatar = styled(Avatar)(({theme, ...rest}) => ({
  height: '45px',
  width: '45px',
}));

export const TableParentContainer = styled(Stack)(({theme}) => ({
  width: '100%',
  [theme.breakpoints.up('xl')]: {
    width: '70%',
  },
  flex: 1,
}));

export const StyledTable = styled(Table)({
  minWidth: 800,
  borderCollapse: 'separate',
  borderSpacing: '0 14px',
});

export const StyledTableCell = styled(TableCell)(() => ({
  border: 'none',
  paddingX: '120px',
  '&:last-child': {
    borderRadius: '0px 10px 10px 0px',
    paddingRight: '40px',
  },
  '&:first-of-type': {
    borderRadius: '10px 0px 0px 10px',
    paddingLeft: '40px',
  },
}));

export const StyledTableRow = styled(TableRow)(({theme}) => ({
  backgroundColor: theme.palette.neutral.main,
  height: '80px',
}));

export const TableSortIcon = styled(TableSortLabel)({
  '& .MuiTableSortLabel-icon': {
    height: '33px',
    width: '30px',
  },
});

export const CellDataContainer = styled(Stack)({
  flexDirection: 'row',
  gap: 8,
  alignItems: 'center',
});

export const LocationTag = styled(Stack)(({theme}) => ({
  lignItems: 'center',
  flexDirection: 'row',
  gap: 8,
  borderRadius: '55px',
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  padding: '13px 0px 13px 13px',
  color: theme.palette.primary.main,
}));

export const CellButtonsContainer = styled(Stack)({
  flexDirection: 'row',
  gap: 16,
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export const CellButton = styled(Button)(({theme, bgcolor}) => ({
  height: '50px',
  width: '50px',
  backgroundColor: alpha(theme.palette[bgcolor].main, 0.1),
  borderRadius: '100%',
  padding: '14px',
  minWidth: 'auto',
}));

export const TabsHeader = styled(Tabs)({
  alignItems: 'center',
  borderRadius: '5px',
  flexShrink: 0,
});

export const TabItem = styled(Tab)(({theme, props}) => ({
  backgroundColor:
    props.activeTab === props.index ? theme.palette.primary.main : theme.palette.neutral.main,
  height: '50px',
  padding: '4px 30px',
  textTransform: 'none',
  color: props.activeTab === props.index && '#FFFFFF !important',
}));

export const TabPanel = styled(Stack)(({props}) => ({
  display: props.activeTab !== props.index && 'none',
}));

export const HeaderContainer = styled(Stack)(({theme}) => ({
  gap: 24,
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
  justifyContent: 'space-between',
}));

export const StyledPopper = styled(Popper)(({theme}) => ({
  backgroundColor: theme.palette.neutral.main,
  width: '230px',
  boxShadow: 2,
  borderRadius: '8px',
}));

export const StyledAutocompletePopper = styled('div')(({theme}) => ({
  [`& .${autocompleteClasses.listbox}`]: {
    maxHeight: 300,
    padding: 0,
    margin: 0,
    [`& .${autocompleteClasses.option}`]: {
      '&[aria-selected="true"]': {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
      },
      [`&.${autocompleteClasses.focused}`]: {
        backgroundColor: alpha(theme.palette.text.dim, 0.1),
        color: '#000000',
      },
      [`&.${autocompleteClasses.focused}[aria-selected= "true"]`]: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
      },
    },
  },
}));

export const AutoCompleteListContainer = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
  paddingX: '10px',
  height: '45px',
  width: '100%',
});

export const DottedTags = styled(Stack)(({theme, color}) => {
  const [palette, property] = (color || 'text.dim').split('.');
  return {
    width: 18,
    height: 18,
    flexShrink: 0,
    borderRadius: '3px',
    marginRight: 16,
    backgroundColor: theme.palette[palette][property],
  };
});

export const TickIcon = styled(DoneIcon)(({props}) => ({
  width: 17,
  height: 17,
  marginLeft: '10px',
  visibility: props.selected ? 'visible' : 'hidden',
}));

export const AutoCompleteTextField = styled(TextField)({
  visibility: 'hidden',
  marginTop: '30px',
  position: 'absolute',
});

export const DraggableContainer = styled(Stack)(({theme}) => ({
  cursor: 'pointer',
  backgroundColor: theme.palette.neutral.main,
  borderRadius: '8px',
  padding: '12px',
  gap: 24,
  overflow: 'hidden',
}));

export const TitleContainer = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const Title = styled(Stack)({
  flexDirection: 'row',
  gap: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const TagContainer = styled(Stack)({
  flexDirection: 'row',
  gap: 12,
  flexWrap: 'wrap',
});

export const Tag = styled(Typography)(({theme, color}) => {
  const [palette, property] = (color || 'text.tag').split('.');
  return {
    backgroundColor: theme.palette[palette][property],
    padding: '4px 18px',
    borderRadius: '25px',
    color: theme.palette.neutral.main,
    fontSize: '0.87rem',
  };
});

export const Description = styled(Typography)(({theme}) => ({
  color: alpha(theme.palette.text.dim, 0.7),
}));

export const BottomAvatarContainer = styled(AvatarGroup)({
  '& > *': {
    border: '0px !important',
  },
  '& > *:not(:first-of-type)': {
    marginLeft: '-18px',
  },
});

export const BottomAvatar = styled(Avatar)(({theme, props}) => ({
  zIndex: props.index,
  backgroundColor: theme.palette.background.main,
}));

export const BottomIconsContainer = styled(Stack)(({theme}) => ({
  flexDirection: 'row',
  gap: 16,
  color: theme.palette.text.tag,
}));

export const BottomIconsText = styled(Typography)(({theme}) => ({
  gap: 8,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.text.tag,
}));

export const EmptyContainer = styled(Stack)({
  minHeight: '100px',
  borderRadius: '8px',
  border: '1px dashed gray',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const theme = () => {
  return null;
};

export default theme;
