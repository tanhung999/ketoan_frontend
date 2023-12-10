
import AppBar from '~/components/AppBar'
import NavBarTop from '~/components/NavBarTop'
import Box from '@mui/material/Box'
import Home from '~/pages/Home/'
import ChungTuGhiSo from '~/pages/ChungTuGhiSo/ChungTuGhiSo'
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
