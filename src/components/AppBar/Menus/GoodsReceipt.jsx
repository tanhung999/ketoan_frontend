import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Check from '@mui/icons-material/Check'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

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
      >
        <MenuItem>
          <ListItemText inset>Phieu nhap hang hoa</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Phieu nhap hang tra lai</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Phieu thu</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Phieu chi</ListItemText>
        </MenuItem>
        
      </Menu>
    </Box>
  )
}
export default GoodsReceipt