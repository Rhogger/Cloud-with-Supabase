import { createBrowserRouter } from 'react-router-dom';
import Uploading from '../pages/Uploading';
import Authentication from '../pages/Authentication';
import Gallery from '../pages/Gallery';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Authentication />,
  },

  {
    path: '/uploading',
    element: <Uploading />,
  },

  {
    path: '/gallery',
    element: <Gallery></Gallery>,
  },
]);

export default router;
