import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link } from 'react-router-dom'

function GoodsIssueNote () {
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
        id="basic-button-goods-issue-note"
        aria-controls={open ? 'basic-menu-goods-issue-note' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon= {<ExpandMoreIcon />}
      >
        Phiếu Xuất
      </Button>
      <Menu
        id="basic-menu-goods-issue-note"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-goods-issue-note'
        }}
        sx={{
          '& .MuiListItemText-root': {
            paddingLeft: 0
          }
        }}
      >

        <MenuItem onClick={handleClose} component={Link} to='/phieu-xuat-hang-hoa'>
          Phieu xuat hang hoa
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to='/phieu-xuat-hang-tra-lai'>
          Phieu xuat hang tra lai
        </MenuItem>
      </Menu>
    </Box>
  )
}
export default GoodsIssueNote