// /src/pages/Settings/BoardView/FilterBtn.jsx
// Thursday, December 7th 2023, 12:49 am

import * as React from 'react';
import {Autocomplete, ClickAwayListener, Button, Typography, Stack} from '@mui/material';
import {
  AutoCompleteListContainer,
  AutoCompleteTextField,
  DottedTags,
  StyledAutocompletePopper,
  StyledPopper,
  TickIcon,
} from '../../theme/theme';
import Filtericon from '../../assets/Filtericon.svg';

const PopperComponent = props => {
  const {...other} = props;
  return <StyledAutocompletePopper {...other} />;
};

const FilterBtn = ({tags, filterValues, setfilterValues}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'tags-label' : undefined;

  return (
    <>
      <Button onClick={handleClick} className='box-center' sx={{gap: 2}}>
        <Typography>Filter</Typography>
        <Filtericon />
      </Button>
      <StyledPopper id={id} open={open} anchorEl={anchorEl} placement='bottom-start'>
        <ClickAwayListener onClickAway={handleClose}>
          <Stack>
            <Typography fontWeight={600} sx={{padding: 2}}>
              Apply types
            </Typography>
            <Autocomplete
              open
              multiple
              onClose={(event, reason) => {
                if (reason === 'escape') {
                  handleClose();
                }
              }}
              value={filterValues}
              onChange={(event, newValue, reason) => {
                if (
                  event.type === 'keydown' &&
                  event.key === 'Backspace' &&
                  reason === 'removeOption'
                ) {
                  return;
                }
                setfilterValues(newValue);
              }}
              disableCloseOnSelect
              PopperComponent={PopperComponent}
              renderTags={() => null}
              noOptionsText='No labels'
              renderOption={(props, option, {selected}) => (
                <Stack {...props} sx={{bgcolor: 'neutral.main'}}>
                  <AutoCompleteListContainer>
                    <DottedTags color={option.color} />
                    <Stack>{option.tag}</Stack>
                    <TickIcon props={{selected}} />
                  </AutoCompleteListContainer>
                </Stack>
              )}
              options={tags}
              getOptionLabel={tag => tag.tag}
              renderInput={params => (
                <AutoCompleteTextField ref={params.InputProps.ref} inputProps={params.inputProps} />
              )}
            />
          </Stack>
        </ClickAwayListener>
      </StyledPopper>
    </>
  );
};

export default FilterBtn;
