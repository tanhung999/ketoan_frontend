import DataGridTable from '~/components/Table/DataGridTable'

function DanhMucTaiKhoanCongNo () {
  const URL = 'http://localhost:3000/danhmuctaikhoancongnokhachhang'
  const columns = [
    { field: 'cTaiKhoan', headerName: 'Tài Khoản', width: 160 },
    { field: 'cMaKhachHang', headerName: 'Mã khách hàng', width: 160 },
    { field: 'nSoDuNoDau', headerName: 'Số Dư Nợ Đầu', width: 160 },
    { field: 'nSoDuCoDau', headerName: 'Số Dư Có Đầu', width: 160 },
    { field: 'dNgaySoDu', headerName: 'Ngày Số Dư', width: 160 }
  ]
  return (
    <DataGridTable
      URL={URL}
      columns={columns}
      labels={columns}
      name={'Danh mục tài khoản công nợ khách hàng'}
    />
  )
}
export default DanhMucTaiKhoanCongNo