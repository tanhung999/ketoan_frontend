
import Box from '@mui/material/Box'
import Home from '~/pages/Home/'
import NavBar from './components/NavBar'


function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar />
      <Home />
    </Box>
  )
}

export default App
