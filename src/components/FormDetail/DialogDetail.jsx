import * as React from 'react'
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

import useFetch from './useFetch'
import TableDetail from './TableDetail/TableDetail'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function DialogDetail({ name = 'Chi Tiet', URL, openClick, labels }) {
  const [open, setOpen] = React.useState(openClick || false)
  const { data } = useFetch(URL)
  React.useEffect(() => {
    setOpen(openClick)
    return () => {
    }
  }, [data])

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
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
          <List sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}>
            {labels?labels.map((label, index) => (
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
            )): ''}
          </List>
        </form>
      </Dialog>
      <TableDetail labels={labels} rows={data} />
    </React.Fragment>
  )
}
export default DialogDetail
