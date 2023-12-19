import DataGridTable from '~/components/Table/DataGridTable'
import labels from '~/utils/ConstantLabels/ConstPhieuNhapHangTraLai/ConstPhieuNhapHangTraLai'
import labelsDetail from '~/utils/ConstantLabels/ConstPhieuNhapHangTraLai/ConstPhieuNhapHangTraLaiChiTiet'
function PhieuNhapHangTraLai () {
  const URL = 'http://localhost:3000/phieunhaphangtralai'
  const columns = [
    { field: 'cMaChungTu', headerName: 'Mã chứng Từ', width: 160 },
    { field: 'cLoaiChungTu', headerName: 'Loại chứng từ', width: 120 },
    { field: 'cSoChungTu', headerName: 'Số chứng từ', width: 120 },
    { field: 'cDienGiai', headerName: 'Diễn giải', width: 140 },
    { field: 'cMaKhachHang', headerName: 'Mã khách hàng', width: 120 },
    { field: 'cTenKhachHang', headerName: 'Tên khách hàng', width: 120 },
    { field: 'cMaSoThue', headerName: 'MST', width: 160 }
  ]
  return (
    <DataGridTable
      URL={URL}
      columns={columns}
      labels={labels}
      name={'Phiếu nhập hàng trả lại'}
      labelsDetail={labelsDetail}
    />
  )
}
export default PhieuNhapHangTraLai