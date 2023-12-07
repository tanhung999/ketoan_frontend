import Box from '@mui/material/Box'

function Content () {
  return (
    <Box
      sx ={{
        backgroundColor: 'primary.main',
        width: '100%',
        height:(theme) => `calc(100vh - ${theme.appCustom.appBarHeight}  -  ${theme.appCustom.navBarHeight})`,
        display: 'flex',
        alignItems: 'center'
      }}
    >Section</Box>
  )
}
export default Content