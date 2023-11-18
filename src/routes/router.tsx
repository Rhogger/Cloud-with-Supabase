import { createBrowserRouter } from 'react-router-dom';
import Upload from '../pages/Upload';
import Authentication from '../pages/Authentication';
import Gallery from '../pages/Gallery';
import Image from '../pages/Image';
import Error404 from '../pages/errors/Error404';
import { ErrorBoundary } from './../classes/ErrorBoundary';

const router = createBrowserRouter([
  {
    errorElement: <Error404 />,
  },
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
    element: (
      <ErrorBoundary>
        <Image />,
      </ErrorBoundary>
    ),
  },
]);

export default router;
