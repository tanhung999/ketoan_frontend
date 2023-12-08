import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
// import { red } from '@mui/material/colors'
// Create a theme instance.
const theme = extendTheme({
  appCustom: {
    appBarHeight: '58px',
    navBarHeight: '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        // The best part is that you can refer to the variables wherever you like 🤩
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: 8,
            height: 8
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#00b894'
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor:  theme.palette.primary.light
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor:  theme.palette.primary.main
            }
          },
          '& fieldset': {
            borderWidth: '1px !important'
          }
        })
      }
    }
  }
})

export default theme