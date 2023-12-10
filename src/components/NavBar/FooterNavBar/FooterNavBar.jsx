import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function FooterNavBar () {
  return (
    <Box px={2} marginTop={2} >
      <Typography variant='span'
        sx={{ fontSize: '0.75rem', fontWeight: 'bold', color:  (theme) => (theme.palette.mode === 'dark' ? '#ffff' : '#000088') }}
      >Copyright © Hung Ngo 2023</Typography>
    </Box>
  )
}
export default FooterNavBar