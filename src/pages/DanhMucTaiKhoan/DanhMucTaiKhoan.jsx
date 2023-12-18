import DataGridTable from '~/components/Table/DataGridTable'
import columns from '~/utils/ConstantLabels/ConstDanhMucTaiKhoan/ConstDanhMucTaiKhoan'

function DanhMucTaiKhoan () {
  const URL = 'http://localhost:3000/danhmuctaikhoan'
  return (
    <DataGridTable
      URL={URL}
      columns={columns}
      labels={columns}
      name={'Danh mục tài khoản'}
    />
  )
}

export default DanhMucTaiKhoan