import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import { Link } from 'react-router-dom'

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
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-document'
        }}
      >
        {/* <MenuItem>
          <ListItemText inset><Link to='chung-tu-ghi-so'>Chung tu ghi so</Link></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset><Link to='chung-tu-ket-chuyen'>Chung tu ket chuyen</Link></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset><Link to='chung-tu-ngan-hang'>Chung tu ngan hang</Link></ListItemText>
        </MenuItem> */}
      </Menu>
    </Box>
  )
}
export default Document