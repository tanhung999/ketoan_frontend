import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link } from 'react-router-dom'

function Categories () {
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
        id="basic-button-categories"
        aria-controls={open ? 'basic-menu-categories' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon= {<ExpandMoreIcon />}
      >
        Danh Mục
      </Button>
      <Menu
        id="basic-menu-categories"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-categories'
        }}
      >
        <MenuItem component={Link} to='danh-muc-tai-khoan'>
          <ListItemText>Danh muc tai khoan</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to='danh-muc-tai-khoan-cong-no-khach-hang'>
          <ListItemText>Danh muc tai khoan cong no KH</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to='danh-muc-hang-hoa'>
          <ListItemText>Danh muc hang hoa</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}
export default Categories