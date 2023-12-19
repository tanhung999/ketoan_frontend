import DataGridTable from '~/components/Table/DataGridTable'
import labels from '~/utils/ConstantLabels/ConstPhieuXuatHangTraLai/ConstPhieuXuatHangTraLai'
import labelsDetail from '~/utils/ConstantLabels/ConstPhieuXuatHangTraLai/ConstPhieuXuatHangTraLaiChiTiet'
function PhieuXuatHangTraLai () {
  const URL = 'http://localhost:3000/phieuxuathangtralai'
  const columns = [
    { field: 'cMaChungTu', headerName: 'Mã chứng Từ', width: 160 },
    { field: 'dNgayChungTu', headerName: 'Ngày chứng từ', width: 140 },
    { field: 'cMaKhachHang', headerName: 'Mã khách hàng', width: 120 },
    { field: 'cTenKhachHang', headerName: 'Tên khách hàng', width: 120 },
    { field: 'cMaSoThue', headerName: 'MST', width: 160 }
  ]
  return (
    <DataGridTable
      URL={URL}
      columns={columns}
      labels={labels}
      name={'Phiếu xuất hàng trả lại'}
      labelsDetail={labelsDetail}
    />
  )
}

export default PhieuXuatHangTraLai