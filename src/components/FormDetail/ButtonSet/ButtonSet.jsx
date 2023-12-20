import Box from '@mui/material/Box'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import LastPageIcon from '@mui/icons-material/LastPage'
import FirstPageIcon from '@mui/icons-material/FirstPage'

function ButtonSet () {
    return (
        <Box sx={{
            mt: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& .MuiSvgIcon-root': {
              fontSize: 55,
              cursor: 'progress',
              mr: 10
            }
          }}>
            <FirstPageIcon />
            <SkipPreviousIcon />
            <SkipNextIcon />
            <LastPageIcon />
          </Box>
    )
}
export default ButtonSet 