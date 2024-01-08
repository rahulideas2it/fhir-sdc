import { Box } from '@mui/material'
import MiniDrawerStyled from './MiniDrawerStyled'
import DrawerHeader from './DrawerHeader'
import DrawerContent from './DrawerContent'

interface Props {
  open: boolean
}

export const MainDrawer = ({ open }: Props) => {
  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1300 }}>
      <MiniDrawerStyled variant="permanent" open={open}>
        <DrawerHeader open={open} />
        <DrawerContent open={open} />
      </MiniDrawerStyled>
    </Box>
  )
}
