
import { MenuItem } from '@mui/material';
import React from 'react';

const MenuOptions = () => {

  const aspectRatioOptions = {
    "Twitter Post – 1200:675": {'ratio': '1200:675', 'width': '1200'},
    "Twitter header – 1500:500": {'ratio': '1500:500', 'width': '1500'},
    "Facebook Post – 1200:630": {'ratio': '1200:630', 'width': '1200'},
    "Facebook Cover – 820:312": {'ratio': '820:312', 'width': '820'},
    "Instagram Post – 1080:1080": {'ratio': '1080:1080', 'width': '1080'},
    "Dribbble shot – 400:300": {'ratio': '400:300', 'width': '400'},
    "LinkedIn cover – 1584:396": {'ratio': '1584:396', 'width':'1584'}
  }

  return (
    <>
      <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
    </>
  );
};

export default MenuOptions;
