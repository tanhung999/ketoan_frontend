import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function ButtonMenuCommand ( props ) {
  return (
    <Box 
      sx={props.MENU_STYLES}
    >
      <props.ICon/>
      <Typography variant='span'
        sx={props.Typography_Styles}
      >{props.LabelButton}</Typography>
    </Box>
  )
}
export default ButtonMenuCommand