import { createBrowserRouter } from 'react-router-dom';
import Upload from '../pages/Upload';
import Authentication from '../pages/Authentication';
import Gallery from '../pages/Gallery';
import ProtectedRoute from '../components/ProtectedRoute';
import Image from '../pages/Image';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Authentication />,
  },
  {
    path: '/upload',
    element: <Upload />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/gallery/:id',
    element: <Image />,
  },
]);

export default router;
