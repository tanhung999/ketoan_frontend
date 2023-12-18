import Box from '@mui/material/Box'
import DialogDetail from '~/components/FormDetail/DialogDetail'
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
        <DialogDetail />
      </Box>
    </Box>

  )
}
export default Content