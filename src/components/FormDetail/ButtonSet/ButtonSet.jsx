import Box from '@mui/material/Box'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import LastPageIcon from '@mui/icons-material/LastPage'
import FirstPageIcon from '@mui/icons-material/FirstPage'

function ButtonSet ({clickedChild}) {
    return (
        <Box sx={{
            mt: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& .MuiSvgIcon-root': {
              fontSize: 50,
              cursor: 'progress',
              mr: 8
            }
          }}>
            <FirstPageIcon 
              onClick={() =>{
                clickedChild('first')
              }}

            />
            <SkipPreviousIcon 
              onClick={() =>{
                clickedChild('prev')
              }}
            
            />
            <SkipNextIcon 
              onClick={() =>{
                clickedChild('next')
              }}
            />
            <LastPageIcon 
              onClick={() =>{
                clickedChild('last')
              }}
            
            />
          </Box>
    )
}
export default ButtonSet 