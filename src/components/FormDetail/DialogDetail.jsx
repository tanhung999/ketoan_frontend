import { useState, forwardRef, useEffect } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Slide from '@mui/material/Slide'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import TableDetail from './TableDetail/TableDetail'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function DialogDetail({ name = 'Chi Tiet',tableName, URL,openClick, labels, labelsDetail, currentRowData }) {
  const [open, setOpen] = useState(openClick || false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentURL, setCurrentURL] = useState(URL)
  const [inputValues, setInputValues] = useState({})
  const [showTableDetail, setShowTableDetail] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(URL)
        const result = await response.json()
        setData(result)
        setCurrentURL(URL)
      } catch (error) {
       throw new Error(error.message)
      } finally {
        setLoading(false)
        setOpen(openClick)
      }
    }

    fetchData()
  }, [URL, openClick,currentURL])
  useEffect(() => {
    if (
      labelsDetail?.tableName &&
      Array.isArray(data?.[labelsDetail.tableName.name]) &&
      data?.[labelsDetail.tableName.name].length > 0
    ) {
      setShowTableDetail(true);
    } else {
      setShowTableDetail(false);
    }
  }, [data, labelsDetail]);
  const handleInputChange = (e, labelField) => {
    const value = e.target.value;
    setInputValues(prevValues => ({
      ...prevValues,
      [tableName]: {
        [labelField]: value,
      }
    }))
  }
  const hanldeUpdate = async () => {
    const updatedChungTuGhiSo = 'update'
    const updatedURL = URL.replace('bymachungtu', updatedChungTuGhiSo)+'?maso=1'
    console.log(updatedURL)
    console.log(inputValues)
    try {
      const response = await fetch(updatedURL, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputValues), // Send updated values to the server
      });
  
      if (response) {
        console.log('Data updated successfully');
        // Optionally, if you want to fetch new data after updating
        const newResponse = await fetch(URL); // Fetch the updated data again
        const newData = await newResponse.json(); // Parse the updated data
        setData(newData) // Update the local data with the new values
      } else {
        console.error('Failed to update data');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  
  const handleClose = () => {
    setOpen(false)
  }
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2,  }} variant="h6" component="div">
            {name}
          </Typography>
          <Box sx={{
            display: 'flex',
            alignItems: 'center', // Căn các biểu tượng theo chiều dọc
            '& .MuiSvgIcon-root': {
              fontSize: 40,
              cursor: 'pointer',
              marginX: 1, // Thêm khoảng cách giữa các biểu tượng theo chiều ngang
            },
            flex: 1, // Để giữ các biểu tượng căn giữa
            justifyContent: 'center', 
          }}>
            
          </Box>
          <Button autoFocus color="inherit" onClick={hanldeUpdate}>
            SAVE
          </Button>
        </Toolbar>
      </AppBar>
      <form>
        <List sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {labels &&
            labels.map((label, index) => (
              <ListItem key={index} sx={{ display: 'flex', maxWidth: '500px', gap: 3, flexDirection: 'row' }}>
                <ListItemText primary={label.headerName} />
                <Input
                  key={data ? data[label.field] : 'no-data'} 
                  sx={{ '& .MuiInputBase-input': { padding: '4px !important' }, width: 300 }}
                  defaultValue={data ? data[label.field] || '' : ''}
                  onChange={(e) => handleInputChange(e, label.field)}
                ></Input>
              </ListItem>
            ))}
        </List>
      </form>
      {showTableDetail && (
            <TableDetail labelsDetail={labelsDetail} data={data?.[labelsDetail.tableName.name]} />
        )}
    </Dialog>
  )
}

export default DialogDetail
