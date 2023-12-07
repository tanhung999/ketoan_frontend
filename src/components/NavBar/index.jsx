import Box from '@mui/material/Box'

function NavBar () {
  return (
    <>
      <Box
        sx ={{
          backgroundColor: 'primary.dark',
          width: '100%',
          height:(theme) => theme.appCustom.navBarHeight,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Nav Bar
      </Box>
    </>
  )
}
export default NavBar