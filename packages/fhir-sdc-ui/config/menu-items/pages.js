// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons'

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
}

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Resources',
  type: 'group',
  children: [
    {
      id: 'questionnaire',
      title: 'Questionnaire',
      type: 'item',
      url: '/login',
      icon: icons.ProfileOutlined,
      target: true,
    },
    {
      id: 'register1',
      title: 'Patient',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: true,
    },
    {
      id: 'register1',
      title: 'Practitioner',
      type: 'item',
      url: '/register',
      icon: icons.ProfileOutlined,
      target: true,
      disabled: true,
    },
  ],
}

export default pages
