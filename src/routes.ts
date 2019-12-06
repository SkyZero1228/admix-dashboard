import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
import TableList from '@material-ui/icons/LocationOn';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import BubbleChart from '@material-ui/icons/BubbleChart';

import MyAppsPage from './views/MyApps/MyApps';
import ReportsPage from './views/Reports/Reports';
import DocsPage from './views/Docs/Docs';
import DownloadPage from './views/Download/Download';
import MyProfilePage from './views/MyProfile/MyProfile';

const dashboardRoutes = [
  {
    path: '/my-apps',
    name: 'My Apps',
    icon: Dashboard,
    component: MyAppsPage
  },
  {
    path: '/reports',
    name: 'Reports',
    icon: Person,
    component: ReportsPage
  },
  {
    path: '/docs',
    name: 'Docs',
    icon: TableList,
    component: DocsPage
  },
  {
    path: '/download',
    name: 'Download',
    icon: LibraryBooks,
    component: DownloadPage
  },
  {
    path: '/my-profile',
    name: 'My Profile',
    icon: BubbleChart,
    component: MyProfilePage
  }
];
  
export default dashboardRoutes;