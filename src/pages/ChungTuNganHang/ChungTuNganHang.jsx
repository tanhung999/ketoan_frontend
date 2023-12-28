import DataGridTable from '~/components/Table/DataGridTable'
import labels from '~/utils/ConstantLabels/ConstChungTuKetChuyen/ConstChungTuKetChuyen'
import labelsDetail from '~/utils/ConstantLabels/ConstChungTuNganHang/ConstChungTuNganHangChiTiet'
function ChungTuNganHang () {
  const URL = 'http://localhost:3000/chungtunganhang'
  const columns = [
    { field: 'cMaChungTu', headerName: 'Mã chứng từ', width: 160 },
    { field: 'cLoaiChungTu', headerName: 'Loại chứng từ', width: 140 },
    { field: 'dNgayChungTu', headerName: 'Ngày chứng từ', width: 160 },
    { field: 'cSoChungTu', headerName: 'Số chứng từ', width: 160 },
    { field: 'cHoTen', headerName: 'Họ tên', width: 120 },
    { field: 'cMaKhachHang', headerName: 'Mã khách hàng', width: 160 },
    { field: 'cTenKhachHang', headerName: 'Tên khách hàng', width: 160 },
    { field: 'cMaSoThue', headerName: 'MST', width: 160 }
  ]
  return (
    <DataGridTable
      URL={URL}
      columns={columns}
      labels={labels}
      name={'Chứng từ ngân hàng'}
      tableName={'_tChungTuNganHang'}
      labelsDetail={labelsDetail}
    />
  )
}
export default ChungTuNganHang