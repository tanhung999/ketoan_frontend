import Container from '@mui/material/Container'
import Header from '../../components/Header'
import Content from './Content'

function Home () {
  return (
    <>
      <Container disableGutters maxWidth= {false} sx={{ height: '100vh' }}>
        <Header />
        <Content />
      </Container>
    </>

  )
}
export default Home