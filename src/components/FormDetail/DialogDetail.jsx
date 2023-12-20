import { useState, forwardRef, useLayoutEffect, useEffect } from 'react'
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
import OutlinedInput from '@mui/material/OutlinedInput'

import TableDetail from './TableDetail/TableDetail'
import ButtonSet from './ButtonSet/ButtonSet'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function DialogDetail({ name = 'Chi Tiet', URL, openClick, labels, labelsDetail,currentRowData }) {
  const [open, setOpen] = useState(openClick || false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showTableDetail, setShowTableDetail] = useState(false)
  const [clicked, setClicked] = useState('')
  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL)
        const result = await response.json()
        setData(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
        setOpen(openClick)
      }
    }

    fetchData()
    return () => {}
  }, [URL, openClick])
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
  useLayoutEffect(() => {
    console.log(currentRowData)
    console.log(clicked)
    switch (clicked) {
      case 'next': {
        console.log('next')
        break
      }
      case 'prev': {
        console.log(currentRowData.previous)
        break
      }
      case 'first': {
        console.log(currentRowData.first)
        break
      }
      case 'last': {
        console.log(currentRowData.last)
        break
      }
      default:

    }
  },[clicked])
  const handleClose = () => {
    setOpen(false)
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {name}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <form>
          <List
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between'
            }}
          >
            {labels
              ? labels.map((label, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: 'flex',
                    maxWidth: '500px',
                    gap: 3,
                    flexDirection: 'row'
                  }}
                >
                  <ListItemText primary={label.headerName} />
                  <OutlinedInput
                    sx={{
                      '& .MuiInputBase-input': {
                        padding: '4px !important'
                      },
                      width: 300
                    }}
                    value={data ? data[label.field] || '' : ''}
                  />
                </ListItem>
              ))
              : ''}
          </List>
        </form>
        {showTableDetail ? (
            <TableDetail labelsDetail={labelsDetail} data={data?.[labelsDetail.tableName.name]} />
        ) : (
          <ButtonSet clickedChild={setClicked}/>
        )}
      </Dialog>
    </>
  )
}

export default DialogDetail
