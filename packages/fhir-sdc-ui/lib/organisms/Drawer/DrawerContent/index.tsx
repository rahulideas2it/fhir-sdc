// project import
import SimpleBarScroll from '../../../atoms/SimpleBar'
import Navigation from '../../../molecules/NavMenu'

// ==============================|| DRAWER CONTENT ||============================== //

interface Props {
  open: boolean
}

const DrawerContent = ({ open }: Props) => (
  <SimpleBarScroll
    sx={{
      '& .simplebar-content': {
        display: 'flex',
        flexDirection: 'column',
      },
    }}
  >
    <Navigation open={open} />
  </SimpleBarScroll>
)

export default DrawerContent
