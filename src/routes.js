import { ArticleInfo } from "./pages/ArticleInfo/ArticleInfo";
import { Articles } from "./pages/Articles/Articles";
import { Index } from "./pages/Index/Index";
import { ProductInfo } from "./pages/ProductInfo/ProductInfo";
import { Products } from "./pages/Products/Products";

export const routes = [
  { path: "/", element: <Index /> },
  { path: "/products/:page", element: <Products /> },
  { path: "/product-info/:productName", element: <ProductInfo /> },
  { path: "/articles", element: <Articles /> },
  { path: "/article-info/:articleName", element: <ArticleInfo /> },
];
