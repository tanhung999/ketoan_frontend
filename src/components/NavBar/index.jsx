import Box from '@mui/material/Box'
import AppsIcon from '@mui/icons-material/Apps'
import Avatar from '@mui/material/Avatar'
import AccountLogo from '~/assets/images/logo_accountant.jpg'
import Typography from '@mui/material/Typography'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined'
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined'
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined'
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined'
import DomainDisabledOutlinedIcon from '@mui/icons-material/DomainDisabledOutlined'
import PriceChangeOutlinedIcon from '@mui/icons-material/PriceChangeOutlined'
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined'
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined'
import AlignVerticalBottomOutlinedIcon from '@mui/icons-material/AlignVerticalBottomOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'

function NavBar () {
  const MENU_STYLES = {
    marginLeft: '16px',
    height: '54px',
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    '& .MuiSvgIcon-root': {
      color: 'primary'
    },
    '&:hover': {
      bgcolor: 'primary.50'
    }
  }
  const Typography_Styles = {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'primary'
  }
  return (
    <Box sx={{
      bgcolor: 'primary.main',
      width: '14rem !important',
      minHeight: '100vh'
    }}>
      <Box
        sx={{ display: 'flex', alignItems: 'center', height: '58px' }}
        px={1}
        gap={1}
      >
        <AppsIcon/>
        <Avatar
          sx={{ width: 36, height: 36 }}
          src={AccountLogo}
        />
        <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary' }}>Accountant</Typography>
      </Box>
      <Box sx={MENU_STYLES} >
        <Box sx={{ cursor: 'pointer', border: '1px solid #ffff', display: 'flex', alignItems: 'center', justifyContent: 'space-around', borderRadius: 15, minWidth: '10rem', height: 40 }}>
          <ControlPointIcon/>
          <Typography variant='span' sx={Typography_Styles}>Thêm Nhanh</Typography>
        </Box>
      </Box>
      <Box sx={{ border: '1px solid #ffff' }} marginX={1}>
      </Box>
      <Box sx={MENU_STYLES}>
        <RecordVoiceOverOutlinedIcon />
        <Typography variant='span'
          sx={Typography_Styles}
        >Tổng quan</Typography>
      </Box>
      <Box sx={{ border: '1px solid #ffff' }} marginX={1}>
      </Box>
      <Box sx={MENU_STYLES}>
        <CurrencyExchangeOutlinedIcon />
        <Typography variant='span'
          sx={Typography_Styles}
        >Tiền mặt</Typography>
      </Box>
      <Box sx={{ border: '1px solid #ffff' }} marginX={1}>
      </Box>
      <Box sx={MENU_STYLES}>
        <AccountBalanceOutlinedIcon />
        <Typography variant='span'
          sx={Typography_Styles}
        >Tiền gửi</Typography>
      </Box>
      <Box sx={{ border: '1px solid #ffff' }} marginX={1}>
      </Box>
      <Box sx={MENU_STYLES}>
        <ShoppingCartOutlinedIcon />
        <Typography variant='span'
          sx={Typography_Styles}
        >Mua hàng</Typography>
      </Box>
      <Box sx={{ border: '1px solid #ffff' }} marginX={1}>
      </Box>
      <Box sx={MENU_STYLES}>
        <StorefrontOutlinedIcon />
        <Typography variant='span'
          sx={Typography_Styles}
        >Bán hàng</Typography>
      </Box>
      <Box sx={{ border: '1px solid #ffff' }} marginX={1}>
      </Box>
      <Box sx={MENU_STYLES}>
        <DescriptionOutlinedIcon />
        <Typography variant='span'
          sx={Typography_Styles}
        >Quản lý hoá đơn</Typography>
      </Box>
      <Box sx={{ border: '1px solid #ffff' }} marginX={1}>
      </Box>
      <Box sx={MENU_STYLES}>
        <WarehouseOutlinedIcon />
        <Typography variant='span'
          sx={Typography_Styles}
        >Kho</Typography>
      </Box>
      <Box sx={{ border: '1px solid #ffff' }} marginX={1}>
      </Box>
      <Box sx={MENU_STYLES}>
        <HandymanOutlinedIcon />
        <Typography variant='span'
          sx={Typography_Styles}
        >Công cụ dụng cụ</Typography>
      </Box>
      <Box sx={{ border: '1px solid #ffff' }} marginX={1}>
      </Box>
      <Box sx={MENU_STYLES}>
        <DomainDisabledOutlinedIcon />
        <Typography variant='span'
          sx={Typography_Styles}
        >Tài sản cố định</Typography>
      </Box>
      <Box sx={{ border: '1px solid #ffff' }} marginX={1}>
      </Box>
      <Box sx={MENU_STYLES}>
        <GavelOutlinedIcon />
        <Typography variant='span'
          sx={Typography_Styles}
        >Thuế</Typography>
      </Box>
      <Box sx={{ border: '1px solid #ffff' }} marginX={1}>
      </Box>
      <Box sx={MENU_STYLES}>
        <PriceChangeOutlinedIcon />
        <Typography variant='span'
          sx={Typography_Styles}
        >Giá thành</Typography>
      </Box>
      <Box sx={{ border: '1px solid #ffff' }} marginX={1}>
      </Box>
      <Box sx={MENU_STYLES}>
        <LibraryBooksOutlinedIcon />
        <Typography variant='span'
          sx={Typography_Styles}
        >Tổng hợp</Typography>
      </Box>
      <Box sx={{ border: '1px solid #ffff' }} marginX={1}>
      </Box>
      <Box sx={MENU_STYLES}>
        <AlignVerticalBottomOutlinedIcon />
        <Typography variant='span'
          sx={Typography_Styles}
        >Báo cáo</Typography>
      </Box>
      <Box sx={{ border: '1px solid #ffff' }} marginX={1}>
      </Box>
      <Box sx={MENU_STYLES}>
        <AccountBalanceWalletOutlinedIcon />
        <Typography variant='span'
          sx={Typography_Styles}
        >Số dư ban đầu</Typography>
      </Box>
      <Box sx={{ border: '1px solid #ffff' }} marginX={1}>
      </Box>
      <Box px={2} marginTop={2} >
        <Typography variant='span'
          sx={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'primary' }}
        >Copyright © Hung Ngo 2023</Typography>
      </Box>
    </Box>
  )
}
export default NavBar