import AppsIcon from '@mui/icons-material/Apps'
import Avatar from '@mui/material/Avatar'
import AccountLogo from '~/assets/images/logo_accountant.jpg'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function HeaderNavBar () {
  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', height: '58px' }}
      px={1}
      gap={1}
    >
      <AppsIcon/>
      <Avatar
        sx={{ width: 36, height: 36 }}
        src={AccountLogo}
      />
      <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color:  (theme) => (theme.palette.mode === 'dark' ? '#ffff' : '#000088') }}>Accountant</Typography>
    </Box>
  )
}
export default HeaderNavBar