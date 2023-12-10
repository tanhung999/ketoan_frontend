import React, { useState } from 'react'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function ButtonAddFast ({ Typography_Styles }) {
  const [isActive, setIsActive] = useState(false)

  const handleButtonClick = () => {
    setIsActive(!isActive)
  }
  return (
    <Box sx={{
      marginLeft: '16px',
      height: '54px',
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      '& .MuiSvgIcon-root': {
        color: 'primary'
      },
      '&:hover': {
        bgcolor: 'primary'
      }
    }} >
      <Box sx={{ cursor: 'pointer',
        border: '1px solid #ffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 15,
        minWidth: '10rem',
        height: 40,
        '&:hover': {
          bgcolor:(theme) => (theme.palette.mode === 'light' ? '#ffff' : '#000088')
        }
      }}
      onClick={handleButtonClick}
      >
        <ControlPointIcon/>
        <Typography variant='span' sx={Typography_Styles}>Thêm Nhanh</Typography>
      </Box>
    </Box>
  )
}
export default ButtonAddFast