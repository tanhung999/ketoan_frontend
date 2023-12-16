
import Box from '@mui/material/Box'
import HeaderNavBar from './Menus/HeaderNavbar'
import ButtonAddFast from './Menus/ButtonAddFast'
import LineSpace from './LineSpace/LineSpace'
import ButtonMenuCommand from './Menus/ButtonMenuCommand'
import FooterNavBar from './FooterNavBar/FooterNavBar'
import { ConstantMenu } from '~/utils/Constant/ConstantMenu'
import React, { useState } from 'react'


function NavBar () {
  // const [activeMenu, setActive] = useState(1)
  

  const handleActive = (id) => {
    console.log(id);
    // Add your logic here
  }

  const MENU_STYLES = {
    marginLeft: '16px',
    height: '54px',
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    '& .MuiSvgIcon-root': {
      color: 'primary'
    },
    '&:hover': {
      bgcolor:(theme) => (theme.palette.mode === 'light' ? '#ffff' : '#000088')
    },
    '&.active': {
      // Add styles for the active state
      // For example, you can change the background color
      bgcolor: '#000088 !important', // Replace with your desired active color
    }
  }
  const Typography_Styles = {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: (theme) => (theme.palette.mode === 'dark' ? '#ffff' : '#000088')
  }
 
  return (
    <Box sx={{
      bgcolor: 'primary.main',
      width: '16rem !important',
      minHeight: '100vh'
    }}>
      <HeaderNavBar />
      <ButtonAddFast {...Typography_Styles}/>
      <LineSpace />
      
      {ConstantMenu.map((item, index) => (
        <React.Fragment key={index}>
          <ButtonMenuCommand 
            MENU_STYLES={MENU_STYLES} 
            ICon={item.icon} 
            Typography_Styles={Typography_Styles}
            LabelButton={item.label}
            // onClick={() => handleActive(item.id)}
            // // Add the 'active' class if the menu is active
            // className={activeMenu === item.id ? 'active' : ''}
            onClick = {() => handleActive(item.id)}
          />
          <LineSpace />
        </React.Fragment>
      ))}
      <FooterNavBar />
    </Box>
  )
}
export default NavBar