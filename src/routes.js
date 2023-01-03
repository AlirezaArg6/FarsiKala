import { ArticleInfo } from "./pages/ArticleInfo/ArticleInfo";
import { Articles } from "./pages/Articles/Articles";
import { Index } from "./pages/Index/Index";
import { Login } from "./pages/Login/Login";
import { ProductInfo } from "./pages/ProductInfo/ProductInfo";
import { Products } from "./pages/Products/Products";
import { Register } from "./pages/Register/Register";

export const routes = [
  { path: "/", element: <Index /> },
  { path: "/products/:page", element: <Products /> },
  { path: "/product-info/:productName", element: <ProductInfo /> },
  { path: "/articles", element: <Articles /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];
