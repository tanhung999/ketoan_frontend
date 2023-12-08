import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import FaceIcon from '@mui/icons-material/Face'
function NavBar () {
  const MENU_STYLES = {
    color: 'primary.main',
    bgcolor: 'white',
    border: 'none',
    paddingX: '5px',
    borderRadius: '4px',
    '& .MuiSvgIcon-root': {
      color: 'primary.main'
    },
    '&:hover':{
      bgcolor: 'primary.50'
    }
  }
  return (
    <Box
      sx ={{
        // backgroundColor: 'primary.dark',
        width: '100%',
        height:(theme) => theme.appCustom.navBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        borderTop: '2px solid #00bfa5',
        paddingX: 2
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          icon={<FaceIcon />}
          label="With Icon"
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<FaceIcon />} l
          label="With Icon"
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<FaceIcon />}
          label="With Icon"
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<FaceIcon />}
          label="With Icon"
          clickable
          sx={MENU_STYLES}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

      </Box>
    </Box>
  )
}
export default NavBar