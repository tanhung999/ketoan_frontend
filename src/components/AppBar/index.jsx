import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'
import ModeSelect from '../ModeSelect'
import Typography from '@mui/material/Typography'
import Categories from './Menus/Categories'
import Document from './Menus/Document'
import Profiles from './Menus/Profiles'
import GoodsReceipt from './Menus/GoodsReceipt'
import GoodsIssueNote from './Menus/GoodsIssueNote'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import MoreOutlinedIcon from '@mui/icons-material/MoreOutlined'

function AppBar () {
  return (

    <Box
      px={2}
      sx={
        {
          // backgroundColor: 'primary.light',
          width: '110%',
          height: (theme) => theme.appCustom.appBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          overflowX: 'auto',
          borderBottom: '2px solid #00bfa5'
        }
      }
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <MenuIcon sx={{ color: 'primary.main' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* <SvgIcon component={AccountantIcon} inheritViewBox sx={{ color: 'primary.main' }} fontSize="small" /> */}
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>Company Hung Ngo</Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Categories />
          <Document />
          <GoodsReceipt />
          <GoodsIssueNote />
          <Button variant='outlined' startIcon={ <AddToPhotosIcon />}>Bảng Cân Đối</Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
        <TextField
          id="outlined-search"
          label="Search..."
          type="search"
          size='small'
          sx={{
            minWidth: 120,
            '& .MuiOutlinedInput-root': {
              paddingRight: 0
            }
          }}

          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <ModeSelect />
        <Tooltip title="More Infomation">
          <MoreOutlinedIcon sx={{ cursor: 'pointer', color: 'primary.main' }} />
        </Tooltip>
        <Tooltip title="Settings Application">
          <SettingsOutlinedIcon sx={{ cursor: 'pointer', color: 'primary.main' }} />
        </Tooltip>
        <Tooltip title="Message">
          <CommentOutlinedIcon sx={{ cursor: 'pointer', color: 'primary.main' }} />
        </Tooltip>
        <Tooltip title="Notification">
          <Badge color="secondary" variant='dot' sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: 'primary.main' }}/>
          </Badge>
        </Tooltip>

        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'primary.main' }} />
        </Tooltip>

        <Profiles />
      </Box>
    </Box>

  )
}
export default AppBar