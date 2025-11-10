import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './AppLayout.jsx';
import HomePage from '../pages/Home.jsx';
import EquipmentPage from '../pages/Equipment.jsx';
import ExercisePage from '../pages/Exercise.jsx';
import NotFoundPage from '../pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/equipamentos/:equipmentId',
        element: <EquipmentPage />,
      },
      {
        path: '/exercicios/:exerciseId',
        element: <ExercisePage />,
      },
      {
        path: '/404',
        element: <NotFoundPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;

