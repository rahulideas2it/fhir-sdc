import PropTypes from 'prop-types'

// material-ui
import { useTheme } from '@mui/material/styles'
import { Stack } from '@mui/material'

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled'
import Logo from '../../../atoms/Logo/Logo'

// ==============================|| DRAWER HEADER ||============================== //

interface Props {
  open: boolean
}

const DrawerHeader = ({ open }: Props) => {
  const theme = useTheme()

  return (
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Logo />
      </Stack>
    </DrawerHeaderStyled>
  )
}

DrawerHeader.propTypes = {
  open: PropTypes.bool,
}

export default DrawerHeader
