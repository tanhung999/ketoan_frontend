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
import PhieuChi from '../PhieuChi/PhieuChi'
import PhieuThu from '../PhieuThu/PhieuThu'
import PhieuXuatHangHoa from '../PhieuXuatHangHoa/PhieuXuatHangHoa'
import PhieuXuatHangTraLai from '../PhieuXuatHangHoaTraLai/PhieuXuatHangHoaTraLai'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { Route, Routes, useLocation } from 'react-router-dom'
import Content from './Content'
import '~/assets/css/App.css'
function Home () {
  const location = useLocation()
  return (
    <Box >
      <AppBar />
      <NavBarTop />
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
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
            <Route path='/phieu-chi' element={<PhieuChi />}/>
            <Route path='/phieu-thu' element={<PhieuThu />}/>
            <Route path='/phieu-xuat-hang-hoa' element={<PhieuXuatHangHoa/>}/>
            <Route path='/phieu-xuat-hang-tra-lai' element={<PhieuXuatHangTraLai/>}/>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </Box>
  )
}
export default Home