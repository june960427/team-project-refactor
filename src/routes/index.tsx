import DefaultLayout from '@layouts/DefaultLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <div>123</div>,
      },
    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router
