
import Box from '@mui/material/Box'
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

import HeaderNavBar from './Menus/HeaderNavbar'
import ButtonAddFast from './Menus/ButtonAddFast'
import LineSpace from './LineSpace/LineSpace'
import ButtonMenuCommand from './Menus/ButtonMenuCommand'
import FooterNavBar from './FooterNavBar/FooterNavBar'
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
      bgcolor:(theme) => (theme.palette.mode === 'light' ? '#ffff' : '#000088')
    }
  }
  const Typography_Styles = {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: (theme) => (theme.palette.mode === 'dark' ? '#ffff' : '#000088')
  }
  return (
    <Box sx={{
      bgcolor: 'primary.main',
      width: '16rem !important',
      minHeight: '100vh'
    }}>
      <HeaderNavBar />
      <ButtonAddFast {...Typography_Styles}/>
      <LineSpace />
      <ButtonMenuCommand MENU_STYLES = {MENU_STYLES} ICon ={RecordVoiceOverOutlinedIcon} Typography_Styles={Typography_Styles}LabelButton={'Tổng quan'} />
      <LineSpace />
      <ButtonMenuCommand MENU_STYLES = {MENU_STYLES} ICon ={CurrencyExchangeOutlinedIcon} Typography_Styles={Typography_Styles}LabelButton={'Tiền mặt'} />
      <LineSpace />
      <ButtonMenuCommand MENU_STYLES = {MENU_STYLES} ICon ={AccountBalanceOutlinedIcon} Typography_Styles={Typography_Styles}LabelButton={'Tiền gửi'} />
      <LineSpace />
      <ButtonMenuCommand MENU_STYLES = {MENU_STYLES} ICon ={ShoppingCartOutlinedIcon} Typography_Styles={Typography_Styles}LabelButton={'Mua hàng'} />
      <LineSpace />
      <ButtonMenuCommand MENU_STYLES = {MENU_STYLES} ICon ={StorefrontOutlinedIcon} Typography_Styles={Typography_Styles}LabelButton={'Bán hàng'} />
      <LineSpace />
      <ButtonMenuCommand MENU_STYLES = {MENU_STYLES} ICon ={DescriptionOutlinedIcon} Typography_Styles={Typography_Styles}LabelButton={'Quản lý hoá đơn'} />
      <LineSpace />
      <ButtonMenuCommand MENU_STYLES = {MENU_STYLES} ICon ={WarehouseOutlinedIcon} Typography_Styles={Typography_Styles}LabelButton={'Kho'} />
      <LineSpace />
      <ButtonMenuCommand MENU_STYLES = {MENU_STYLES} ICon ={HandymanOutlinedIcon} Typography_Styles={Typography_Styles}LabelButton={'Công cụ dụng cụ'} />
      <LineSpace />
      <ButtonMenuCommand MENU_STYLES = {MENU_STYLES} ICon ={DomainDisabledOutlinedIcon} Typography_Styles={Typography_Styles}LabelButton={'Tài sản cố định'} />
      <LineSpace />
      <ButtonMenuCommand MENU_STYLES = {MENU_STYLES} ICon ={GavelOutlinedIcon} Typography_Styles={Typography_Styles}LabelButton={'Thuế'} />
      <LineSpace />
      <ButtonMenuCommand MENU_STYLES = {MENU_STYLES} ICon ={PriceChangeOutlinedIcon} Typography_Styles={Typography_Styles}LabelButton={'Giá thành'} />
      <LineSpace />
      <ButtonMenuCommand MENU_STYLES = {MENU_STYLES} ICon ={LibraryBooksOutlinedIcon} Typography_Styles={Typography_Styles}LabelButton={'Tổng hợp'} />
      <LineSpace />
      <ButtonMenuCommand MENU_STYLES = {MENU_STYLES} ICon ={AlignVerticalBottomOutlinedIcon} Typography_Styles={Typography_Styles}LabelButton={'Báo cáo'} />
      <LineSpace />
      <ButtonMenuCommand MENU_STYLES = {MENU_STYLES} ICon ={AccountBalanceWalletOutlinedIcon} Typography_Styles={Typography_Styles}LabelButton={'Số dư ban đầu'} />
      <LineSpace />
      <FooterNavBar />
    </Box>
  )
}
export default NavBar