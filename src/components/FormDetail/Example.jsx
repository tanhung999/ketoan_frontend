import React, { useState, useEffect } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


function Example() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://example.com/data");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div >
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Mã chứng từ</TableCell>
                <TableCell>Mã khách hàng</TableCell>
                <TableCell>Loại chứng từ</TableCell>
                <TableCell>Số chứng từ</TableCell>
                <TableCell>Ngày chứng từ</TableCell>
                <TableCell>Thuế suất</TableCell>
                <TableCell>Số tiền</TableCell>
                <TableCell>Tài khoản nợ</TableCell>
                <TableCell>Tài khoản có</TableCell>
              </TableRow>
            </TableHead>
            {/* <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.ma_chung_tu}</TableCell>
                  <TableCell>{row.ma_khach_hang}</TableCell>
                  <TableCell>{row.loai_chung_tu}</TableCell>
                  <TableCell>{row.so_chung_tu}</TableCell>
                  <TableCell>{row.ngay_chung_tu}</TableCell>
                  <TableCell>{row.thue_suat}</TableCell>
                  <TableCell>{row.so_tien}</TableCell>
                  <TableCell>{row.tai_khoan_no}</TableCell>
                  <TableCell>{row.tai_khoan_co}</TableCell>
                </TableRow>
              ))}
            </TableBody> */}
          </Table>
        </TableContainer>
      </Paper>
    </div>
  )}
  export default Example