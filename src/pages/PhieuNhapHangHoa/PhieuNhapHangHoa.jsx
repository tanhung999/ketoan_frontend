import DataGridTable from '~/components/Table/DataGridTable'
import labels from '~/utils/ConstantLabels/ConstPhieuNhapHangHoa/ConstPhieuNhapHangHoa'
function PhieuNhapHangHoa () {
  const URL ='http://localhost:3000/phieunhaphanghoa'
  const columns = [
    { field: 'cMaChungTu', headerName: 'Mã chứng Từ', width: 160 },
    { field: 'cLoaiChungTu', headerName: 'Loại chứng từ', width: 120 },
    { field: 'cSoChungTu', headerName: 'Số chứng từ', width: 120 },
    { field: 'dNgayChungTu', headerName: 'Ngày chứng từ', width: 140 },
    { field: 'cMaNguoiBan', headerName: 'Mã người bán', width: 120 },
    { field: 'cTenNguoiBan', headerName: 'Tên người bán', width: 120 },
    { field: 'cMaSoThueNguoiBan', headerName: 'MST người bán', width: 160 },
    // { field: 'cTaiKhoanNo', headerName: 'TK Nợ', width: 130 },
    // { field: 'cTaiKhoanNoGTGT', headerName: 'TK Nợ GTGT', width: 100 },
    // { field: 'cTaiKhoanCo', headerName: 'TK Có ', width: 160 },
    // { field: 'cDienGiai', headerName: 'Diễn giải', width: 95 },
    // { field: 'cSoSeRi', headerName: 'Số SeRi', width: 160 }
  ]
  return (
    <DataGridTable
      URL={URL}
      columns={columns}
      labels={labels}
      name={'Phiếu nhập hàng hoá'}
    />
  )
}
export default PhieuNhapHangHoa