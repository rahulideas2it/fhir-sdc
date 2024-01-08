// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
} from '@ant-design/icons'

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
}

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities: any = {
  id: 'utilities',
  title: 'Admin',
  type: 'group',
  children: [
    {
      id: 'ant-icons',
      title: 'Projects',
      type: 'item',
      url: '/icons/ant',
      icon: icons.AntDesignOutlined,
      breadcrumbs: false,
      disabled: true,
    },
    {
      id: 'ant-icons',
      title: 'Configure',
      type: 'item',
      url: '/icons/ant',
      icon: icons.AntDesignOutlined,
      breadcrumbs: false,
      disabled: true,
    },
  ],
}

export default utilities
