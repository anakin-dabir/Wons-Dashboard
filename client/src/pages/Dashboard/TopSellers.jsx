// /src/components/dashboard/TopSellers.jsx
// Sunday, November 12th 2023, 10:55 pm

import React from 'react';
import {CardMedia, Divider, Rating, Stack, Typography} from '@mui/material';
import MenuButton from '../../components/MenuButton';

const TopSellers = () => {
  const sellerData = [
    {
      img: 'https://buffer.com/library/content/images/2023/10/free-images.jpg',
      name: 'Web Development',
      stars: 4,
      price: 87,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXv__ZSK0jeXIqPD-jZJm8Ce3nXLYF3Z949F6R2tzsyg&s',
      name: 'Mobile App Design',
      stars: 3,
      price: 987,
    },
  ];
  return (
    <>
      <Stack
        sx={{padding: '20px', borderRadius: '10px', height: '100%', alignSelf: 'stretch'}}
        bgcolor='neutral.main'
        gap={3}
      >
        <Stack direction='row' sx={{justifyContent: 'space-between'}}>
          <Typography variant='h5' fontWeight='medium'>
            Top Selling Services
          </Typography>
          <MenuButton type='horizontal' />
        </Stack>

        <Stack gap={3} sx={{alignSelf: ''}}>
          {sellerData.map((data, i, arr) => {
            return (
              <Stack key={i} gap={3}>
                <Stack direction='row' gap={2}>
                  <CardMedia
                    component='img'
                    src={data.img}
                    sx={{
                      width: '100px',
                      height: '120px',
                      borderRadius: '16px',
                      objectFit: 'cover',
                      bgcolor: 'black',
                    }}
                  />
                  <Stack>
                    <Typography fontWeight='bold'>{data.name}</Typography>
                    <Rating
                      name={data.name}
                      value={data.stars}
                      readOnly
                      sx={{
                        '& .MuiRating-iconFilled': {
                          color: theme => {
                            return theme.palette.pink.main;
                          },
                        },
                      }}
                    />
                    <Typography fontWeight='bold'>${data.price}</Typography>
                  </Stack>
                </Stack>

                <Divider sx={{visibility: `${i === arr.length - 1 && 'hidden'}`}} />
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
};

export default TopSellers;
