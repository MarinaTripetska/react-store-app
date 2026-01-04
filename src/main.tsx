import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import '@/index.css'
import HomePage from "@/pages/HomePage.tsx";
import ProductsPage from "@/pages/ProductsPage.tsx";
import NotFoundPage from "@/pages/NotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/products",
    element: <ProductsPage/>,
  },
  {
    path: "*",
    element: <NotFoundPage/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
