import Box from '@mui/material/Box'
import AppBar from '~/components/AppBar'
import NavBarTop from '~/components/NavBarTop'
import ChungTuGhiSo from '../ChungTuGhiSo/ChungTuGhiSo'
import ChungTuKetChuyen from '../ChungTuKetChuyen/ChungTuKetChuyen'
import ChungTuNganHang from '../ChungTuNganHang/ChungTuNganHang'
import PhieuNhapHangHoa from '../PhieuNhapHangHoa/PhieuNhapHangHoa'
import PhieuNhapHangTraLai from '../PhieuNhapHangTraLai/PhieuNhapHangTraLai'
import DanhMucTaiKhoan from '../DanhMucTaiKhoan/DanhMucTaiKhoan'
import DanhMucTaiKhoanCongNo from '../DanhMucTaiKhoanCongNoKhachHang/DanhMucTaiKhoanCongNo'
import DanhMucHangHoa from '../DanhMucHangHoa/DanhMucHangHoa'
import { Route, Routes } from 'react-router-dom'
import Content from './Content'
function Home () {
  return (
    <Box >
      <AppBar />
      <NavBarTop />
      <Routes>
        <Route path='/' element={<Content/> }/>
        <Route path='/danh-muc-tai-khoan' element={<DanhMucTaiKhoan />}/>
        <Route path='/danh-muc-tai-khoan-cong-no-khach-hang' element={<DanhMucTaiKhoanCongNo />}/>
        <Route path='/danh-muc-hang-hoa' element={<DanhMucHangHoa />}/>
        <Route path='/chung-tu-ghi-so' element={<ChungTuGhiSo />}/>
        <Route path='/chung-tu-ket-chuyen' element={<ChungTuKetChuyen />}/>
        <Route path='/chung-tu-ngan-hang' element={<ChungTuNganHang/>}/>
        <Route path='/phieu-nhap-hang-hoa' element={<PhieuNhapHangHoa/>}/>
        <Route path='/phieu-nhap-hang-tra-lai' element={<PhieuNhapHangTraLai/>}/>
      </Routes>
    </Box>
  )
}
export default Home