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
    path: '/upload',
    element: <Uploading />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
]);

export default router;
