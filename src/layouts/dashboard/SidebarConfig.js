// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Home',
    path: '/dashboard',
    icon: getIcon('bx:home')
  },
  {
    title: 'Catch a Pokemon',
    path: '/catch',
    icon: getIcon('ic:twotone-catching-pokemon')
  },
  {
    title: 'My Pokemons',
    path: '/mypoke',
    icon: getIcon('eva:shopping-bag-fill')
  },
  {
    title: 'My Profile',
    path: '/profile',
    icon: getIcon('healthicons:ui-user-profile-outline')
  },
  {
    title: 'Shop',
    path: '/shop',
    icon: getIcon('iconoir:small-shop-alt')
  }
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill')
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill')
  // }
];

export default sidebarConfig;
