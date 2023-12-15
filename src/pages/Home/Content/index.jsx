import Box from '@mui/material/Box'
function Content () {
  return (
    <Box>
      <Box
        sx ={{
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? theme.palette.primary : '#ffff'),
          // width: '100%',
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