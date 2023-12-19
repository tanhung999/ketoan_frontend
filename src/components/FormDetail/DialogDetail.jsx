import { useState, forwardRef, useLayoutEffect } from 'react'
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

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function DialogDetail({ name = 'Chi Tiet', URL, openClick, labels, labelsDetail }) {
  const [open, setOpen] = useState(openClick || false)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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
        {labelsDetail?.tableName && Array.isArray(data?.[labelsDetail.tableName.name]) && data?.[labelsDetail.tableName.name].length > 0 && (
          <TableDetail labelsDetail={labelsDetail} data={data?.[labelsDetail.tableName.name]} />
        )}
      </Dialog>
    </>
  )
}

export default DialogDetail
