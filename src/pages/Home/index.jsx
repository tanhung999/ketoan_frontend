import Box from '@mui/material/Box'
import AppBar from '~/components/AppBar'
import NavBarTop from '~/components/NavBarTop'
import ChungTuGhiSo from '../ChungTuGhiSo/ChungTuGhiSo'
import ChungTuKetChuyen from '../ChungTuKetChuyen/ChungTuKetChuyen'
import ChungTuNganHang from '../ChungTuNganHang/ChungTuNganHang'
import DanhMucTaiKhoan from '../DanhMucTaiKhoan/DanhMucTaiKhoan'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function Home () {
  return (
    <Box >
      <AppBar />
      <NavBarTop />
      {/* <Router>
        <Routes>
          <Route path="/chung-tu-ghi-so" element={<ChungTuGhiSo/>} /> 
          <Route path="/chung-tu-ket-chuyen" element={<ChungTuKetChuyen/>} /> 
          <Route path="/chung-tu-ngan-hang" element={<ChungTuNganHang/>} /> 
          <Route path="
          /danh-muc-tai-khoan"
           element= {<DanhMucTaiKhoan />}/>
        </Routes>
      </Router> */}
    </Box>
  )
}
export default Home