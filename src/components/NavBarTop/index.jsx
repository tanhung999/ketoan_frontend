import * as React from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import UndoIcon from '@mui/icons-material/Undo'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { memo } from 'react'

function NavBarTop () {
  const [age, setAge] = React.useState('')
  const handleChange = (event) => {
    setAge(event.target.value)
  }
  return (
    <Box sx={{
      display: 'flex', px: 2, borderBottom: '2px solid #00bfa5',
      bgcolor:(theme) => (theme.palette.mode === 'dark' ? 'primary' : '#FFFFCC')
    }}>
      <Box
        sx ={{
          width: '100%',
          height: 54,
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        <Box>
          <UndoIcon sx={{ fontSize: 30, color: 'primary.main' }}/>
        </Box>
        <FormControl sx={{ m: 0.5, minWidth: 120, '& .MuiSelect-select': {
          padding: 1, fontWeight: 600, marginLeft: 1
        } }}>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
                    Thuc hien hang loai
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 0.5, minWidth: 120, '& .MuiSelect-select': {
          padding: 1, fontWeight: 600, marginLeft: 1
        } }}>
          <Select
            value={''}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
                        Loc
            </MenuItem>
          </Select>
        </FormControl>
        <Box>
          <Typography
            sx={{
              fontSize: 14,
              color: 'primary.main'
            }}
          >
            {'Dau nam den hien tai'}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap:1, alignItems: 'center', justifyContent: 'space-around' }}>
        <TextField
          id="outlined-search"
          label="Tim kiem..."
          type="search"
          size='small'
          sx={{
            minWidth: 80,
            width: 120,
            '& .MuiOutlinedInput-root': {
              paddingRight: 0
            }
          }}

          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}/>
        <Box>
          <RefreshOutlinedIcon sx={{ fontSize: 30, color: 'primary.main' }} />
        </Box>
        <Box title="Settings Application">
          <SettingsOutlinedIcon sx={{ cursor: 'pointer', color: 'primary.main', fontSize: 30 }} />
        </Box>
        <FormControl sx={{ m: 0.5, minWidth: 120, '& .MuiSelect-select': {
          padding: 1,
          fontWeight: 600, marginLeft: 1
        },
        '& .MuiInputBase-root': {
          borderRadius: '15px'
        }
        }}>
          <Select
            value={''}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
                        Tien ich
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 0.5, minWidth: 120, '& .MuiSelect-select': {
          padding: 1,
          marginLeft: 1,
          color: '#fff',
          fontWeight: 600
        },
        '& .MuiInputBase-root': {
          borderRadius: '15px',
          backgroundColor: 'primary.main'
        }
        }}>
          <Select
            value={''}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="">
                        Them
            </MenuItem>
          </Select>
        </FormControl>

      </Box>
    </Box>

  )
}
export default memo(NavBarTop)