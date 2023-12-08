
import AppBar from '~/components/AppBar'
import NavBar from '~/components/NavBar'
import Box from '@mui/material/Box'

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar />
      <AppBar />
    </Box>
  )
}

export default App
