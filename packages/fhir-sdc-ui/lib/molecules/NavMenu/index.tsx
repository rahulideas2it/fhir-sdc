// material-ui
import { Box, Typography } from '@mui/material'

// project import
import NavGroup from './NavGroup'
import menuItem from '../../../config/menu-items'

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //
interface Props {
  open: any
}

const Navigation = ({ open }: Props) => {
  const navGroups = menuItem.items.map((item: any) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} drawerOpen={open} />
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        )
    }
  })

  return <Box sx={{ pt: 2 }}>{navGroups}</Box>
}

export default Navigation
