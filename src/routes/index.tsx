import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>123</div>,
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router
