import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./components/Layout/MainLayout"
import Home from "./components/Pages/Home"
import FetchOld from "./components/Pages/FetchOld"
import FetchRQ from "./components/Pages/FetchRQ"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const App = () => {
  const queryClient = new QueryClient()

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/traditional",
          element: <FetchOld/>
        },
        {
          path:"rq",
          element: <FetchRQ/>
        }
      ]
    }
  ])
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  )
}

export default App