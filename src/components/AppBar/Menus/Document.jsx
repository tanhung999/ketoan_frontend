import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link } from 'react-router-dom'

function Document () {
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
        id="basic-button-document"
        aria-controls={open ? 'basic-menu-document' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon= {<ExpandMoreIcon />}
      >
        Chứng từ
      </Button>
      <Menu
        id="basic-menu-document"
        aria-labelledby="basic-button-document"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiListItemText-root': {
            paddingLeft: 0
          }
        }}
      >
        <MenuItem onClick={handleClose} component={Link} to='/chung-tu-ghi-so'>
          Chung tu ghi so
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to='/chung-tu-ket-chuyen'>
         Chung tu ket chuyen
        </MenuItem>

        <MenuItem onClick={handleClose} component={Link} to='/chung-tu-ngan-hang'>
         Chung tu ngan hang
        </MenuItem>

      </Menu>
    </Box>
  )
}
export default Document