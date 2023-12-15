export const MENU_STYLES = {
  marginLeft: '16px',
  height: '54px',
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  '& .MuiSvgIcon-root': {
    color: 'primary'
  },
  '&:hover': {
    bgcolor:(theme) => (theme.palette.mode === 'light' ? '#ffff' : '#000088')
  }
}
export const Typography_Styles = {
  fontSize: '1rem',
  fontWeight: 'bold',
  color: (theme) => (theme.palette.mode === 'dark' ? '#ffff' : '#000088')
}