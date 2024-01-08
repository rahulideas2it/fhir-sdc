import { Box } from '@mui/material'
import Dashboard from '../pages/dashboard'

const DashboardLayout = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <h1>DashboardLayout</h1>
      <Dashboard />
    </Box>
  )
}

export default DashboardLayout
