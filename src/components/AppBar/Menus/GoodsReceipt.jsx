import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link } from 'react-router-dom'

function GoodsReceipt () {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box>
      <Button
        id="basic-button-goods-receipt"
        aria-controls={open ? 'basic-menu-goods-receipt' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon= {<ExpandMoreIcon />}
      >
        Phiếu Nhập
      </Button>
      <Menu
        id="basic-menu-goods-receipt"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-goods-receipt'
        }}
        sx={{
          '& .MuiListItemText-root': {
            paddingLeft: 0
          }
        }}
      >
        <MenuItem onClick={handleClose} component={Link} to='phieu-nhap-hang-hoa'>
         Phieu nhap hang hoa
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to='phieu-nhap-hang-tra-lai'>
         Phieu nhap hang tra lai
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to='phieu-thu'>
         Phieu thu
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to='phieu-chi'>
         Phieu chi
        </MenuItem>
      </Menu>
    </Box>
  )
}
export default GoodsReceipt