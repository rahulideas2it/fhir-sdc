import { Box } from '@mui/material'
import { ReactElement, useState } from 'react'
import { MainDrawer as Drawer } from '../../organisms/Drawer'

interface props {
  children: ReactElement
}

export const DashboardTemplate = ({ children }: props) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(true)

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer)
  }
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Drawer open={openDrawer} />
      <>{children}</>
    </Box>
  )
}
