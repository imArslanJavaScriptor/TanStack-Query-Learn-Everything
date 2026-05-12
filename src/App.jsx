import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./components/Layout/MainLayout"
import Home from "./components/Pages/Home"
import FetchOld from "./components/Pages/FetchOld"
import FetchRQ from "./components/Pages/FetchRQ"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Posts from "./components/Pages/Posts"
import { Toaster } from "react-hot-toast"
import FetchCardDetails from "./components/Pages/FetchCardDetails"

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
        },
        {
          path:"rq/:id",
          element: <FetchCardDetails/>
        },
        {
          path:"posts",
          element: <Posts/>
        }
      ]
    }
  ])
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right"  reverseOrder={false} 
      toastOptions={{ 
        style: {
          margin: "20px 0",
        }
      }}
       />
      <ReactQueryDevtools/>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App