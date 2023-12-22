// /src/pages/Schedule/CalenderSide/SearchPeople.jsx
// Thursday, November 30th 2023, 5:00 am

import {Stack, Typography} from '@mui/material';
import React, {useState, useTransition} from 'react';
import InputField from '../../components/InputField';
import {
  SearchDataContainer,
  SearchedUserAvatar,
  SearchedUserContainer,
  SvgIcon,
} from '../../theme/theme';
import Searchicon from '../../assets/Searchicon.svg';

const data = [
  {
    name: 'Eddie Lobanovskiy',
    email: 'lobanovsiky@gmail.com',
    img: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
  },
  {
    name: 'Alexey Stave',
    email: 'lobanovsiky@gmail.com',
    img: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
  },
  {
    name: 'Ageon Targayreyn',
    email: 'lobanovsiky@gmail.com',
    img: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png',
  },
];

const SearchPeople = () => {
  const [searchData, setSearchData] = useState(data);
  const [isPending, startTransition] = useTransition();
  const searchFunction = e => {
    startTransition(() => {
      if (e.target.value.length === 0) {
        setSearchData(data);
        return;
      }
      const result = data.filter(item =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchData(result);
    });
  };
  return (
    <Stack gap={4}>
      <Typography fontWeight='600'>Community</Typography>
      <InputField
        height='60px'
        padding='15px 30px'
        startIcon={
          <SvgIcon color='text.dim'>
            <Searchicon />
          </SvgIcon>
        }
        onChange={searchFunction}
        placeholder='Search for People'
      />
      <SearchDataContainer>
        {isPending ? (
          <Typography>Loading...</Typography>
        ) : searchData.length === 0 ? (
          <Typography>No People Found</Typography>
        ) : (
          searchData.map((item, index) => {
            return (
              <SearchedUserContainer key={index}>
                <SearchedUserAvatar alt={item.name} src={item.img} />
                <Stack>
                  <Typography>{item.name}</Typography>
                  <Typography variant='body2' sx={{opacity: '0.4'}}>
                    {item.email}
                  </Typography>
                </Stack>
              </SearchedUserContainer>
            );
          })
        )}
      </SearchDataContainer>
    </Stack>
  );
};

export default SearchPeople;
