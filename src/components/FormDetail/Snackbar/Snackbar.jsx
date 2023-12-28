// CustomizedSnackbars.js

import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CustomizedSnackbars({ openSnackbar, handleSnackbarClose, message }) {
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={6000}
      onClose={handleSnackbarClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{
        transform: 'translate(-50%, -50%)', // Để căn giữa Snackbar
      }}
    >
      <Alert onClose={handleSnackbarClose} severity={message.severity} sx={{ width: '100%' }}>
        {message.message}
      </Alert>
    </Snackbar>
  );
}

export default CustomizedSnackbars;
