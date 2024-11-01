import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRouters } from "./components";
import MainLayout from "./Layout/MainLayout";
import { Home, InfoProducts, LikedPage, ShopCard } from "./pages";

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
        {
          path: "/likedproducts",
          element: <LikedPage />,
        },
        {
          path: "/shopcard",
          element: <ShopCard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
}

export default App;
