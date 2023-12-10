import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import { Link } from 'react-router-dom'

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
        <MenuItem>
          {/* <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon> */}
          <ListItemText>Danh muc tai khoan</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography> */}
        </MenuItem>
        <MenuItem>
          {/* <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon> */}
          <ListItemText>Danh muc tai khoan cong no KH</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography> */}
        </MenuItem>
        <MenuItem>
          {/* <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon> */}
          <ListItemText>Danh muc hang hoa</ListItemText>
          {/* <Typography variant="body2" color="text.secondary">
            ⌘V
          </Typography> */}
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}
export default Categories