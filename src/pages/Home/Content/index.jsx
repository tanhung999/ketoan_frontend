import Box from '@mui/material/Box'
import AppBar from '~/components/AppBar'
function Content () {
  return (
    <Box>
      <AppBar />
      <Box
        sx ={{
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? theme.palette.primary : '#ffff'),
          width: '100%',
          height:(theme) => `calc(100vh - ${theme.appCustom.appBarHeight})`,
          display: 'flex',
          alignItems: 'center'
        }}
      >
      </Box>
    </Box>

  )
}
export default Content