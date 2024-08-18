import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import ProductsPage from "./pages/Products/ProductsPage.tsx";
import AboutUsPage from "./pages/AboutUsPage/AboutUs.tsx";
import "./index.css";
import FaqPage from "./pages/FAQPage/FAQPage.tsx";
import NewsPage from "./pages/News/NewsPage.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <App></App>,
  },
  {
    path: "/ProductsPage",
    element: <ProductsPage></ProductsPage>,
  },
  {
    path: "/AboutUs",
    element: <AboutUsPage></AboutUsPage>,
  },
  {
    path: "/FAQ",
    element: <FaqPage></FaqPage>,
  },
  {
    path: "/News",
    element: <NewsPage></NewsPage>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
