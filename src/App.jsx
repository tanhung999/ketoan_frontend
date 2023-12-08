
import AppBar from '~/components/AppBar'
import NavBar from '~/pages/NavBar'
import Box from '@mui/material/Box'
import Home from '~/pages/Home/Content'

function App() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'initial' }}>
      <NavBar />

      {/* <AppBar /> */}
      <Home />

    </Box>
  )
}

export default App
