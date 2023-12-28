import DataGridTable from '~/components/Table/DataGridTable'
import labels from '~/utils/ConstantLabels/ConstPhieuChi/ConstPhieuChi'
import labelsDetail from '~/utils/ConstantLabels/ConstPhieuChi/ConstPhieuChiChiTiet'
function PhieuChi () {
  const URL = 'http://localhost:3000/phieuchichitiet'
  const columns = [
    { field: 'cMaChungTu', headerName: 'Mã chứng Từ', width: 160 },
    { field: 'cLoaiChungTu', headerName: 'Loại chứng từ', width: 120 },
    { field: 'cSoChungTu', headerName: 'Số chứng từ', width: 120 },
    { field: 'dNgayChungTu', headerName: 'Ngày chứng từ', width: 140 },
    { field: 'cHoTen', headerName: 'Họ tên', width: 120 },
    { field: 'cDiaChi', headerName: 'Địa chỉ', width: 120 },
    { field: 'cMaKhachHang', headerName: 'Mã khách hàng', width: 160 },
    { field: 'cTenKhachHang', headerName: 'Tên khách hàng', width: 130 }
  ]
  return (
    <DataGridTable
      URL={URL}
      columns={columns}
      labels={labels}
      name={'Phiếu chi'}
      labelsDetail={labelsDetail}
      tableName={'_tPhieuChi'}
    />
  )
}
export default PhieuChi