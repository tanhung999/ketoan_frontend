import DataGridTable from '~/components/Table/DataGridTable'
import labels from '~/utils/ConstantLabels/ConstChungTuKetChuyen/ConstChungTuKetChuyen'
import labelsDetail from '~/utils/ConstantLabels/ConstChungTuKetChuyen/ConstChungTuKetChuyenChiTiet'
function ChungTuKetChuyen() {
  const columns = [
    { field: 'cMaChungTu', headerName: 'Mã Chứng Từ', width: 160 },
    { field: 'cLoaiChungTu', headerName: 'Loại Chứng Từ', width: 160 },
    { field: 'cSoChungTu', headerName: 'Số Chứng Từ', width: 160 },
    { field: 'dNgayChungTu', headerName: 'Ngày Chứng Từ', width: 160 },
    { field: 'cDienGiai', headerName: 'Diễn Giải', width: 250 }
  ]
  const URL = 'http://localhost:3000/chungtuketchuyen'
  return (
    <DataGridTable
      URL={URL}
      columns={columns}
      labels={labels}
      name={'Chứng Từ Kết Chuyển'}
      tableName={'_tChungTuKetChuyen'}
      labelsDetail={labelsDetail}
    />
  )
}

export default ChungTuKetChuyen