import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps'
import ModeSelect from '../ModeSelect'
import { Typography } from '@mui/material'
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
// import { ReactComponent as AccountantIcon } from '~/assets/accounting-icon.svg'
// import SvgIcon from '@mui/material/SvgIcon'
function AppBar () {
  return (

    <Box
      px={2}
      sx={
        {
          // backgroundColor: 'primary.light',
          width: '100%',
          height: (theme) => theme.appCustom.appBarHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }
      }
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {/* <SvgIcon component={AccountantIcon} inheritViewBox sx={{ color: 'primary.main' }} fontSize="small" /> */}
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>Accountant</Typography>
        </Box>
        <Categories />
        <Document />
        <GoodsReceipt />
        <GoodsIssueNote />
        <Button variant='outlined' >Bảng Cân Đối</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
        <TextField id="outlined-search" label="Search..." type="search" size='small' />
        <ModeSelect />

        <Tooltip title="Notification">
          <Badge color="secondary" variant='dot' sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon  sx={{ color: 'primary.main' }}/>
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