import DataGridTable from '~/components/Table/DataGridTable'
import labels from '~/utils/ConstantLabels/ConstPhieuXuatHangHoa/ConstPhieuXuatHangHoa'
import labelsDetail from '~/utils/ConstantLabels/ConstPhieuXuatHangHoa/ConstPhieuXuatHangHoaChiTiet'
function PhieuXuatHangHoa () {
  const URL = 'http://localhost:3000/phieuxuathanghoa'
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
      name={'Phiếu xuất hàng hoá'}
      tableName={'_tPhieuXuatHangHoa'}
      labelsDetail={labelsDetail}
    />
  )
}

export default PhieuXuatHangHoa