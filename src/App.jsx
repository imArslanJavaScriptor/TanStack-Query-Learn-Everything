import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import {
  Home,
  TraditionalFetching,
  FetchWithTanStackQuery,
  SingleCardDetail,
  TanStackFeaturesRich,
} from "./components/Pages";

const App = () => {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/traditional-fetching",
          element: <TraditionalFetching />,
        },
        {
          path: "fetch-with-tanstack-query",
          element: <FetchWithTanStackQuery />,
        },
        {
          path: "fetch-with-tanstack-query/:id",
          element: <SingleCardDetail />,
        },
        {
          path: "tanstack-features-rich",
          element: <TanStackFeaturesRich />,
        },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            margin: "20px 0",
          },
        }}
      />
      <ReactQueryDevtools />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
