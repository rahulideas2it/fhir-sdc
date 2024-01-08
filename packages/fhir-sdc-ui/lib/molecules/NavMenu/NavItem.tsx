/* eslint-disable react/display-name */
import PropTypes from 'prop-types'

// material-ui
import { useTheme } from '@mui/material/styles'
import {
  Avatar,
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'

// ==============================|| NAVIGATION - LIST ITEM ||============================== //

const NavItem = ({ item, level, drawerOpen }: any) => {
  const theme = useTheme()

  // let itemTarget = '_self'
  // if (item.target) {
  //   itemTarget = '_blank'
  // }

  const itemHandler = () => {
    // dispatch(activeItem({ openItem: [id] }))
  }

  const Icon = item.icon
  const itemIcon = item.icon ? (
    <Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} />
  ) : (
    false
  )

  const isSelected = item.id === 'questionnaire'

  const textColor = 'text.primary'
  const iconSelectedColor = 'primary.main'

  return (
    <ListItemButton
      // {...listItemProps}
      disabled={item.disabled}
      onClick={() => itemHandler()}
      selected={isSelected}
      sx={{
        zIndex: 1201,
        pl: drawerOpen ? `${level * 28}px` : 1.5,
        py: !drawerOpen && level === 1 ? 1.25 : 1,
        ...(drawerOpen && {
          '&:hover': {
            bgcolor: 'primary.lighter',
          },
          '&.Mui-selected': {
            bgcolor: 'primary.lighter',
            borderRight: `2px solid ${theme.palette.primary.main}`,
            color: iconSelectedColor,
            '&:hover': {
              color: iconSelectedColor,
              bgcolor: 'primary.lighter',
            },
          },
        }),
        ...(!drawerOpen && {
          '&:hover': {
            bgcolor: 'transparent',
          },
          '&.Mui-selected': {
            '&:hover': {
              bgcolor: 'transparent',
            },
            bgcolor: 'transparent',
          },
        }),
      }}
    >
      {itemIcon && (
        <ListItemIcon
          sx={{
            minWidth: 28,
            color: isSelected ? iconSelectedColor : textColor,
            ...(!drawerOpen && {
              borderRadius: 1.5,
              width: 36,
              height: 36,
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                bgcolor: 'secondary.lighter',
              },
            }),
            ...(!drawerOpen &&
              isSelected && {
                bgcolor: 'primary.lighter',
                '&:hover': {
                  bgcolor: 'primary.lighter',
                },
              }),
          }}
        >
          {itemIcon}
        </ListItemIcon>
      )}
      {(drawerOpen || (!drawerOpen && level !== 1)) && (
        <ListItemText
          primary={
            <Typography
              variant="h6"
              sx={{ color: isSelected ? iconSelectedColor : textColor }}
            >
              {item.title}
            </Typography>
          }
        />
      )}
      {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  )
}

NavItem.propTypes = {
  item: PropTypes.object,
  drawerOpen: PropTypes.bool,
  level: PropTypes.number,
}

export default NavItem
