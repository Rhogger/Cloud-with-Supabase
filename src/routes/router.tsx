import { createBrowserRouter } from 'react-router-dom';
import Upload from '../pages/Upload';
import Authentication from '../pages/Authentication';
import Gallery from '../pages/Gallery';
import ProtectedRoute from '../components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Authentication />,
  },
  {
    path: '/upload',
    element: (
      <ProtectedRoute>
        <Upload />,
      </ProtectedRoute>
    ),
  },
  {
    path: '/gallery',
    element: (
      <ProtectedRoute>
        <Gallery />
      </ProtectedRoute>
    ),
  },
]);

export default router;
