import React, { useState } from 'react';
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import Input from '@mui/material/Input'

function FormDetail() {
  const [open, setOpen] = useState(true);
  const [formData, setFormData] = useState({
    cMaChungTu: '',
    cLoaiChungTu: '',
    cSoChungTu: '',
    dNgayChungTu: '',
    cHoTen: '',
    cMaKhachHangNo: '',
    cTenKhachHangNo: '',
    cMaSoThueNo: '',
    cMaKhachHangCo: '',
    cTenKhachHangCo: '',
    cMaSoThueCo: '',
    cDienGiai: '',
    cBieuThue: '',
    cSoSeRi: '',
    cSoHoaDon: '',
    dNgayHoaDon: '',
    nThueSuat: '',
    nThueGTGT: '',
    cMatHang: '',
  });
  const labels = [
    { field: 'cMaChungTu', headerName: 'Mã chứng Từ'},
    { field: 'cLoaiChungTu', headerName: 'Loại chứng từ'},
    { field: 'cSoChungTu', headerName: 'Số chứng từ'},
    { field: 'dNgayChungTu', headerName: 'Ngày chứng từ'},
    { field: 'cHoTen', headerName: 'Họ tên'},
    { field: 'cMaKhachHangNo', headerName: 'Mã KH Nợ'},
    { field: 'cTenKhachHangNo', headerName: 'Tên KH Nợ' },
    { field: 'cMaSoThueNo', headerName: 'MST Nợ' },
    { field: 'cMaKhachHangCo', headerName: 'Mã KH Có' },
    { field: 'cTenKhachHangCo', headerName: 'Tên KH Có' },
    { field: 'cMaSoThueCo', headerName: 'MST Có' },
    { field: 'cDienGiai', headerName: 'Diễn giải' },
    { field: 'cBieuThue', headerName: 'Biểu thuế'},
    { field: 'cSoSeRi', headerName: 'Số SeRi'},
    { field: 'cSoHoaDon', headerName: 'Số hoá đơn' },
    { field: 'dNgayHoaDon', headerName: 'Ngày hoá đơn'},
    { field: 'nThueSuat', headerName: 'Thuế suất'},
    { field: 'nThueGTGT', headerName: 'Thuế GTGT'},
    { field: 'cMatHang', headerName: 'Mặt hàng' }
  ]

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data, perform actions, etc.
    console.log('Form submitted:', formData);
    handleClose();
  };

  return (
    <Box>
      {/* <Button onClick={handleOpen}>Open Form Modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="form-modal-label"
        aria-describedby="form-modal-input"
        sx={{
        //   backgroundColor: (theme=>theme.palette.secondary),
          // border: '2px solid #000',
          // boxShadow: 5,
          p: 3,
          maxWidth: '100%',
          width: '100%',
          '& > *': {
            marginBottom: 2,
          },
        }}
      >
        <Box 
            // bgcolor={'#cccc'}
        >
          <Typography 
            id="form-modal-title"
            sx={{
                fontSize: 30,
                color: 'red',
                textAlign: 'center',
                color: 'red'
            }}
          > Chung tu ghi so
          </Typography>
          
          <form onSubmit={handleSubmit}>
            {
              labels.map(label => {
                return {}
                
                
              })
            }
              <Box sx={{ width: 400 }}>
                <InputLabel id="form-modal-label">Text in a modal</InputLabel>
                <Input id="form-modal-input"/>
              </Box>
              <Box sx={{ width: 400 }}>
                <InputLabel id="form-modal-label">Text in a modal</InputLabel>
                <Input id="form-modal-input"/>
              </Box>
              <Box sx={{ width: 400 }}>
                <InputLabel id="form-modal-label">Text in a modal</InputLabel>
                <Input id="form-modal-input"/>
              </Box>
              <Box sx={{ width: 400 }}>
                <InputLabel id="form-modal-label">Text in a modal</InputLabel>
                <Input id="form-modal-input"/>
              </Box>
           
            <Box >
              <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                
              >
                Submit
              </Button>
              <Button 
                type="submit" 
                variant="contained" 
                color="error"
              >
                Close
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}

export default FormDetail;