import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import ProductsPage from "./pages/Products/ProductsPage.tsx";
import AboutUsPage from "./pages/AboutUsPage/AboutUs.tsx";
import "./index.css";
import FaqPage from "./pages/FAQPage/FAQPage.tsx";
import NewsPage from "./pages/News/NewsPage.tsx";
import ContactsPage from "./pages/Contacts/Contacts.tsx";
import VideoPage from "./pages/VideoPage/VideoPage.tsx";
import GoodsPage from "./pages/GoodsPage/GoodsPage.tsx";
import CategoryProductsPage from "./pages/CategoryProductsPage/CategoryProductsPage.tsx";
import NewsMainPage from "./pages/NewsMainPage/NewsPage.tsx";

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
  {
    path: "/Contacts",
    element: <ContactsPage></ContactsPage>,
  },
  {
    path: "/Video",
    element: <VideoPage></VideoPage>,
  },
  {
    path: "/ProductsPage/:article/:nameOfProduct",
    element: <GoodsPage></GoodsPage>,
  },
  {
    path: "/ProductsPage/:article/:Category/:Brand",
    element: <CategoryProductsPage></CategoryProductsPage>,
  },
  {
    path: "News/:id/:Title",
    element: <NewsMainPage></NewsMainPage>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
