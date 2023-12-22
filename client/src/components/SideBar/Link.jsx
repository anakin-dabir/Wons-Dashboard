// /src/components/SideBar/Link.jsx
// Thursday, November 23rd 2023, 5:52 pm

import {Typography, Stack, Box} from '@mui/material';
import {NavLink} from 'react-router-dom';
import React from 'react';

const LinkData = [
  {
    to: '/dashboard',
    name: 'Dashboard',
    icon: `M2.54 0H5.92C7.33 0 8.46 1.15 8.46 2.561V5.97C8.46 7.39 7.33 8.53 
	5.92 8.53H2.54C1.14 8.53 0 7.39 0 5.97V2.561C0 1.15 1.14 0 2.54 0ZM2.54 
	11.4697H5.92C7.33 11.4697 8.46 12.6107 8.46 14.0307V17.4397C8.46 18.8497
	 7.33 19.9997 5.92 19.9997H2.54C1.14 19.9997 0 18.8497
	 0 17.4397V14.0307C0 12.6107 1.14 11.4697 2.54 11.4697ZM17.4601
	  0H14.0801C12.6701 0 11.5401 1.15 11.5401 2.561V5.97C11.5401 7.39
	  12.6701 8.53 14.0801 8.53H17.4601C18.8601 8.53 20.0001 7.39 20.0001 5.97V2.561C20.0001
	1.15 18.8601 0 17.4601 0ZM14.0801 11.4697H17.4601C18.8601
	 11.4697 20.0001 12.6107 20.0001 14.0307V17.4397C20.0001 18.8497
	  18.8601 19.9997 17.4601 19.9997H14.0801C12.6701 19.9997 11.5401
	   18.8497 11.5401 17.4397V14.0307C11.5401 12.6107 12.6701 11.4697 14.0801 11.4697Z`,
  },
  {
    to: '/analytics',
    name: 'Analytics',
    icon: `M7.86874 2.97266H17.7137C21.2989 2.97266 23.3229 5.01036 23.3335
	 8.60301V18.4693C23.3335 22.0609 21.2989 24.0997 17.7137 24.0997H7.86874C4.2835
	  24.0997 2.25 22.0609 2.25 18.4693V8.60301C2.25 5.01036 4.2835 2.97266 7.86874
	   2.97266ZM12.8438 19.7258C13.2981 19.7258 13.6766 19.3878 13.7188
	    18.9336V8.16933C13.7609 7.84186 13.6039 7.51334 13.3192 7.33481C13.023
		 7.15523 12.6646 7.15523 12.381 7.33481C12.0953 7.51334 11.9383 7.84186
		  11.9688 8.16933V18.9336C12.0226 19.3878 12.401 19.7258 12.8438
		   19.7258ZM17.6935 19.726C18.1363 19.726 18.5147 19.388 18.5685
		    18.9337V15.4689C18.5991 15.1298 18.442 14.8139 18.1563 14.6344C17.8727
			 14.4548 17.5143 14.4548 17.2192 14.6344C16.9335 14.8139 16.7764 15.1298
			  16.8186 15.4689V18.9337C16.8607 19.388 17.2392 19.726 17.6935 19.726ZM8.80637
			   18.9349C8.7642 19.3891 8.38576 19.7271 7.93141 19.7271C7.47811 19.7271
			    7.09861 19.3891 7.0575 18.9349V11.6355C7.02587 11.307 7.18294 10.9805
				 7.46863 10.801C7.7522 10.6214 8.11167 10.6214 8.3963 10.801C8.67987
				  10.9805 8.83905 11.307 8.80637 11.6355V18.9349Z`,
  },
  {
    to: '/invoice',
    name: 'Invoice',
    icon: `M23.1092 12.0355C22.9664 12.1744 22.7727 12.2538 22.5688 12.2538C21.8144
	 12.2538 21.2027 12.8493 21.2027 13.5738C21.2027 14.3032 21.8072 14.8957 22.5546
	  14.9037C22.9756 14.9077 23.3335 15.1935 23.3335 15.6034V18.149C23.3335 20.2918
	   21.5493 22.0296 19.3472 22.0296H16.0236C15.68 22.0296 15.4017 21.7586 15.4017
	    21.4242V19.2804C15.4017 18.8636 15.0652 18.5361 14.637 18.5361C14.219 18.5361
		 13.8724 18.8636 13.8724 19.2804V21.4242C13.8724 21.7586 13.5941 22.0296
		  13.2515 22.0296H6.23628C4.04434 22.0296 2.25 20.2928 2.25 18.149V15.6034C2.25
		   15.1935 2.60785 14.9077 3.02891 14.9037C3.77723 14.8957 4.38077 14.3032
		    4.38077 13.5738C4.38077 12.8691 3.78946 12.3332 3.01463 12.3332C2.81073
			 12.3332 2.61702 12.2538 2.47429 12.1149C2.33156 11.9759 2.25 11.7874 2.25
			  11.5889V9.01838C2.25 6.87863 4.04841 5.12793 6.24648 5.12793H13.2515C13.5941
			   5.12793 13.8724 5.39887 13.8724 5.73333V8.27403C13.8724 8.68094 14.219
			    9.01838 14.637 9.01838C15.0652 9.01838 15.4017 8.68094 15.4017
				 8.27403V5.73333C15.4017 5.39887 15.68 5.12793 16.0236
				  5.12793H19.3472C21.5493 5.12793 23.3335 6.86474 23.3335
				   9.00846V11.5095C23.3335 11.708 23.2519 11.8965 23.1092
				    12.0355ZM14.6373 16.611C15.0655 16.611 15.4019 16.2735
					 15.4019 15.8666V11.8968C15.4019 11.4899 15.0655 11.1524
					  14.6373 11.1524C14.2193 11.1524 13.8727 11.4899 13.8727
					   11.8968V15.8666C13.8727 16.2735 14.2193 16.611 14.6373 16.611Z`,
  },
  {
    to: '/schedule',
    name: 'Schedule',
    icon: `M8.37428 3.05957H17.2093C20.4656 3.05957 22.2788 4.93988 22.2788
	 8.16175V19.0739C22.2788 22.3486 20.4656 24.1866 17.2093 24.1866H8.37428C5.1696
	  24.1866 3.30371 22.3486 3.30371 19.0739V8.16175C3.30371 4.93988 5.1696 3.05957
	   8.37428 3.05957ZM8.65858 7.9835V7.97294H11.8095C12.2638 7.97294 12.6328
	    8.34266 12.6328 8.79584C12.6328 9.26169 12.2638 9.63141 11.8095
		 9.63141H8.65858C8.20423 9.63141 7.83632 9.26169 7.83632 8.80746C7.83632
		  8.35322 8.20423 7.9835 8.65858 7.9835ZM8.65858 14.4064H16.9233C17.3766
		   14.4064 17.7455 14.0367 17.7455 13.5825C17.7455 13.1282 17.3766
		    12.7575 16.9233 12.7575H8.65858C8.20423 12.7575 7.83632 13.1282
			 7.83632 13.5825C7.83632 14.0367 8.20423 14.4064 8.65858 14.4064ZM8.65874
			  19.2336H16.9235C17.3441 19.1913 17.6614 18.8311 17.6614 18.4096C17.6614
			   17.9765 17.3441 17.6174 16.9235 17.5751H8.65874C8.34249 17.5434
			    8.03678 17.6913 7.86811 17.966C7.69944 18.2301 7.69944 18.5787 7.86811
				 18.8533C8.03678 19.1174 8.34249 19.2758 8.65874 19.2336Z`,
  },
  {
    to: '/calender',
    name: 'Calender',
    icon: `M17.4411 3.91447L17.4421 4.70634C20.346 4.93439 22.2642 6.91723 22.2674
	 9.958L22.2788 18.8586C22.283 22.1739 20.2045 24.2137 16.8728 24.219L8.73469
	  24.2296C5.42386 24.2338 3.31933 22.1454 3.31517 18.8206L3.30372 10.0245C3.29955
	   6.96369 5.15012 4.98613 8.05399 4.71901L8.05295 3.92714C8.05191 3.46258 8.39538
	    3.1131 8.85334 3.1131C9.3113 3.11204 9.65477 3.46047 9.65581 3.92503L9.65685
		 4.6641L15.8393 4.65566L15.8382 3.91658C15.8372 3.45202 16.1807 3.1036 16.6386
		  3.10254C17.0862 3.10149 17.4401 3.44991 17.4411 3.91447ZM4.90732 10.3513L20.6652
		   10.3302V9.96067C20.6205 7.69065 19.4839 6.49968 17.4439 6.32231L17.445
		    7.13529C17.445 7.58929 17.0921 7.94933 16.6446 7.94933C16.1866 7.95039 15.8421
			 7.59141 15.8421 7.1374L15.8411 6.28219L9.65864 6.29063L9.65968 7.14479C9.65968
			  7.59985 9.31725 7.95883 8.85929 7.95883C8.40134 7.95989 8.05683 7.60196 8.05683
			   7.1469L8.05579 6.33392C6.0262 6.53769 4.90316 7.73289 4.90628 10.023L4.90732
			    10.3513ZM16.2067 15.1495V15.1611C16.2171 15.6468 16.6126 16.0153 17.0925
				 16.0047C17.5608 15.9931 17.9345 15.5908 17.9241 15.1051C17.9022 14.6406
				  17.5265 14.2615 17.0591 14.2626C16.5804 14.2732 16.2057 14.6638 16.2067
				   15.1495ZM17.0657 19.8899C16.5869 19.8793 16.2008 19.4792 16.1997
				    18.9935C16.1893 18.5078 16.5734 18.1055 17.0521 18.0939H17.0626C17.5517
					 18.0939 17.9483 18.4941 17.9483 18.9903C17.9493 19.4866 17.5538 19.8888
					  17.0657 19.8899ZM11.918 15.1675C11.9388 15.6532 12.3353 16.0323 12.8141
					   16.0111C13.2825 15.989 13.6561 15.5878 13.6353 15.1021C13.6239 14.627
					    13.2388 14.2574 12.7704 14.2585C12.2916 14.2796 11.9169 14.6819 11.918
						 15.1675ZM12.8182 19.8425C12.3394 19.8636 11.9439 19.4846 11.9221
						  18.9989C11.9221 18.5132 12.2957 18.112 12.7745 18.0898C13.2429 18.0888
						   13.629 18.4583 13.6394 18.9324C13.6613 19.4191 13.2866 19.8203 12.8182
						    19.8425ZM7.63024 15.2047C7.65106 15.6904 8.04761 16.0704 8.52638
							 16.0483C8.99475 16.0272 9.3684 15.6249 9.34655 15.1392C9.33614 14.6641
							  8.95104 14.2946 8.48163 14.2956C8.00285
							   14.3167 7.6292 14.719 7.63024
							   15.2047ZM8.53082 19.8484C8.05204
							    19.8706 7.65653 19.4905 7.63468
							    19.0048C7.63363 18.5191 8.00833
								 18.1168 8.4871 18.0957C8.95547 18.0947
								 9.34161 18.4642 9.35202
								  18.9393C9.37388 19.425 9.00022
								   19.8273 8.53082 19.8484Z`,
  },
  {
    to: '/messages',
    name: 'Messages',
    icon: `M17.1801 4.41C17.1801 3.08 18.2601 2 19.5901 2C20.9201 2 22.0001
	 3.08 22.0001 4.41C22.0001 5.74 20.9201 6.82 19.5901 6.82C18.2601 6.82
	  17.1801 5.74 17.1801 4.41ZM13.33 14.7593L16.22 11.0303L16.18 11.0503C16.34
	   10.8303 16.37 10.5503 16.26 10.3003C16.151 10.0503 15.91 9.8803 15.651
	    9.8603C15.38 9.8303 15.111 9.9503 14.95 10.1703L12.531 13.3003L9.76
		 11.1203C9.59 10.9903 9.39 10.9393 9.19 10.9603C8.991 10.9903 8.811
		  11.0993 8.69 11.2593L5.731 15.1103L5.67 15.2003C5.5 15.5193 5.58
		   15.9293 5.88 16.1503C6.02 16.2403 6.17 16.3003 6.34 16.3003C6.571
		    16.3103 6.79 16.1893 6.93 16.0003L9.44 12.7693L12.29 14.9103L12.38
			 14.9693C12.7 15.1393 13.1 15.0603 13.33 14.7593ZM15.45 3.7803C15.41
			  4.0303 15.39 4.2803 15.39 4.5303C15.39 6.7803 17.21 8.5993 19.45
			   8.5993C19.7 8.5993 19.94 8.5703 20.19 8.5303V16.5993C20.19 19.9903
			    18.19 22.0003 14.79 22.0003H7.401C4 22.0003 2 19.9903 2
				 16.5993V9.2003C2 5.8003 4 3.7803 7.401 3.7803H15.45Z`,
  },
  {
    to: '/notification',
    name: 'Notification',
    icon: `M19.8619 9.36778C19.8619 10.6945 20.2119 11.4765 20.9819 12.3776C21.5655
	 13.0415 21.752 13.8937 21.752 14.8182C21.752 15.7417 21.4492 16.6184 20.8426
	  17.3301C20.0484 18.1834 18.9284 18.7281 17.7854 18.8228C16.129 18.9643 14.4715
	   19.0835 12.792 19.0835C11.1115 19.0835 9.45512 19.0122 7.7987 18.8228C6.65461
	    18.7281 5.53462 18.1834 4.74151 17.3301C4.13489 16.6184 3.83105 15.7417
		 3.83105 14.8182C3.83105 13.8937 4.01859 13.0415 4.60112 12.3776C5.39527
		  11.4765 5.72216 10.6945 5.72216 9.36778V8.91775C5.72216 7.14101 6.16429
		   5.97921 7.07474 4.84188C8.42837 3.18324 10.5982 2.18848 12.7449
		    2.18848H12.8392C15.032 2.18848 17.272 3.23111 18.6026 4.96104C19.4659
			 6.07496 19.8619 7.18782 19.8619 8.91775V9.36778ZM9.70622 21.2669C9.70622
			  20.7349 10.1934 20.4913 10.6439 20.387C11.1709 20.2753 14.3821 20.2753
			   14.9091 20.387C15.3596 20.4913 15.8468 20.7349 15.8468 21.2669C15.8206
			    21.7733 15.5241 22.2223 15.1145 22.5074C14.5833 22.9223 13.9599 23.1851
				 13.3082 23.2798C12.9478 23.3266 12.5937 23.3277 12.2458 23.2798C11.5931
				  23.1851 10.9697 22.9223 10.4396 22.5063C10.0289 22.2223
				   9.73241 21.7733 9.70622 21.2669Z`,
  },
  {
    to: '/settings',
    name: 'Settings',
    icon: `M21.6495 14.464C22.0266 14.6647 22.3174 14.9816 22.5221 15.2985C22.9207
	 15.9534 22.8884 16.7563 22.5006 17.464L21.7465 18.7316C21.3479 19.4077 20.6045
	  19.8302 19.8396 19.8302C19.4626 19.8302 19.0424 19.7246 18.6977 19.5133C18.4176
	   19.3338 18.0944 19.2704 17.7496 19.2704C16.6831 19.2704 15.7889 20.1472 15.7566
	    21.1929C15.7566 22.4077 14.7654 23.3585 13.5265 23.3585H12.0614C10.8117 23.3585
		 9.82054 22.4077 9.82054 21.1929C9.79899 20.1472 8.90482 19.2704 7.83827
		  19.2704C7.48276 19.2704 7.15956 19.3338 6.89023 19.5133C6.54549 19.7246
		   6.11456 19.8302 5.74827 19.8302C4.9726 19.8302 4.22925 19.4077 3.83064
		    18.7316L3.08729 17.464C2.68868 16.7774 2.66714 15.9534 3.06575
			 15.2985C3.23812 14.9816 3.56131 14.6647 3.9276 14.464C4.22925 14.3161
			  4.42317 14.0731 4.60631 13.7879C5.14497 12.8795 4.82178 11.6858 3.90605
			   11.147C2.83951 10.5449 2.49477 9.20336 3.10884 8.15757L3.83064
			    6.91108C4.45549 5.86529 5.79136 5.49557 6.86868 6.10825C7.80595
				 6.6153 9.02332 6.27727 9.57276 5.37937C9.74513 5.08359 9.84209
				  4.76669 9.82054 4.44978C9.79899 4.0378 9.9175 3.64696 10.1222
				   3.33005C10.5208 2.67511 11.2426 2.25257 12.029
				    2.23145H13.5481C14.3453 2.23145 15.0671 2.67511 15.4657
					 3.33005C15.6596 3.64696 15.7889 4.0378 15.7566 4.44978C15.735
					  4.76669 15.832 5.08359 16.0044 5.37937C16.5538 6.27727
					   17.7712 6.6153 18.7192 6.10825C19.7857 5.49557 21.1324
					    5.86529 21.7465 6.91108L22.4683 8.15757C23.0931 9.20336
						 22.7484 10.5449 21.6711 11.147C20.7553 11.6858 20.4321
						  12.8795 20.9816 13.7879C21.1539 14.0731 21.3479 14.3161
						   21.6495 14.464ZM9.74477 12.8052C9.74477 14.4637 11.113
						    15.7841 12.8044 15.7841C14.4957 15.7841 15.8316 14.4637
							 15.8316 12.8052C15.8316 11.1467 14.4957 9.81571 12.8044
							  9.81571C11.113 9.81571 9.74477 11.1467 9.74477 12.8052Z`,
  },
];

const Link = () => {
  return (
    <>
      <Stack
        sx={{alignItems: 'flex-start', justifyContent: 'center', paddingLeft: '25px', gap: '5px'}}
      >
        {LinkData.map(({to, name, icon}, i) => {
          return (
            <NavLink
              key={i}
              to={to}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                alignItems: 'center',
                position: 'relative',
              }}
              children={({isActive}) => (
                <Stack
                  direction='row'
                  sx={{
                    height: '50px',
                    alignItems: 'center',
                    color: isActive ? 'text.custom' : 'text.dim',
                    gap: '14px',
                    opacity: isActive ? 1 : 0.6,
                    '& svg': {
                      fill: theme => {
                        return isActive ? theme.palette.primary.main : theme.palette.text.dim;
                      },
                    },
                  }}
                >
                  {isActive && (
                    <Box
                      sx={{
                        backgroundColor: 'background.custom',
                        left: -25,
                        height: '53px',
                        width: '54px',
                        position: 'absolute',
                        borderRadius: '0px 8px 8px 0px',
                      }}
                    ></Box>
                  )}

                  <Box
                    className='box-center'
                    sx={{
                      paddingLeft: name === 'Dashboard' && '4px',
                      paddingTop: name === 'Dashboard' && '7px',
                    }}
                  >
                    <svg height={28} width={24} viewBox='0 0 24 28'>
                      <path fillRule='evenodd' clipRule='evenodd' d={icon} />
                    </svg>
                  </Box>
                  <Typography sx={{display: {sm: 'none', lg: 'flex'}}}>{name}</Typography>
                </Stack>
              )}
            ></NavLink>
          );
        })}
      </Stack>
    </>
  );
};

export default Link;