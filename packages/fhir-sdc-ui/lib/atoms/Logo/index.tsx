import PropTypes from 'prop-types'

// material-ui
import { Button, SxProps, Theme } from '@mui/material'

// project import
import Logo from './Logo'

// ==============================|| MAIN LOGO ||============================== //

interface Props {
  sx: SxProps<Theme>
  to: string
}

const LogoSection = ({ sx, to }: Props) => {
  return (
    <Button
      // onClick={() => dispatch(activeItem({ openItem: [defaultId] }))}
      // to={!to ? config.defaultPath : to}
      sx={sx}
    >
      <Logo />
    </Button>
  )
}

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string,
}

export default LogoSection
