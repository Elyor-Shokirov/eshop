import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRouters } from "./components";
import MainLayout from "./Layout/MainLayout";
import { Home, InfoProducts } from "./pages";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRouters user={true}>
          <MainLayout />
        </ProtectedRouters>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/product/:id",
          element: <InfoProducts />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
}

export default App;
