import DataGridTable from '~/components/Table/DataGridTable'
import labels from '~/utils/ConstantLabels/ConstDanhMucHangHoa/ConstDanhMucHangHoa'

function DanhMucHangHoa () {
  const URL = 'http://localhost:3000/danhmuchanghoa'
  const columns = [
    { field: 'cMaHang', headerName: 'Mã hàng', width: 160 },
    { field: 'cTenHang', headerName: 'Tên hàng', width: 160 },
    { field: 'cNhomHang', headerName: 'Nhóm hàng', width: 160 },
    { field: 'cDonViTinh', headerName: 'Đơn vị tính', width: 160 },
    { field: 'nSoLuongTonDau', headerName: 'Số lượng tồn đầu', width: 160 },
    { field: 'nThanhTienTonDau', headerName: 'Thành tiền tồn đầu', width: 160 },
    { field: 'dNgayTonDau', headerName: 'Ngày tồn đầu', width: 160 }
  ]
  return (
    <DataGridTable
      URL={URL}
      columns={columns}
      labels={labels}
      name={'Danh mục hàng hoá'}
      tableName={'_tDanhMucHangHoa'}
    />
  )
}
export default DanhMucHangHoa