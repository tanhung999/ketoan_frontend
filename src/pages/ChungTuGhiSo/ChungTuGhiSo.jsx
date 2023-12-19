import DataGridTable from '~/components/Table/DataGridTable'
import labels from '~/utils/ConstantLabels/ConstantChungTuGhiSo/ConstChungTuGhiSo'
import labelsDetail from '~/utils/ConstantLabels/ConstantChungTuGhiSo/ConstChungTuGhiSoChiTiet'
function ChungTuGhiSo () {

  const URL = 'http://localhost:3000/chungtughiso'
  const columns = [
    { field: 'cMaChungTu', headerName: 'Mã chứng Từ', width: 160 },
    { field: 'cLoaiChungTu', headerName: 'Loại chứng từ', width: 120 },
    { field: 'cSoChungTu', headerName: 'Số chứng từ', width: 120 },
    { field: 'dNgayChungTu', headerName: 'Ngày chứng từ', width: 140 },
    { field: 'cHoTen', headerName: 'Họ tên', width: 120 },
    { field: 'cMaKhachHangNo', headerName: 'Mã KH Nợ', width: 120 },
    { field: 'cTenKhachHangNo', headerName: 'Tên KH Nợ', width: 160 },
    { field: 'cMaSoThueNo', headerName: 'MST Nợ', width: 130 }

  ]
  return (
    <DataGridTable
      URL={URL}
      columns={columns}
      labels={labels}
      name={'Chứng Từ Ghi Sổ'}
      labelsDetail={labelsDetail}
    />
  )
}
export default ChungTuGhiSo