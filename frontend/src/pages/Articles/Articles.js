import React from "react";
import { ArticleBoxArticles } from "../../Components/ArticleBoxArticles/ArticleBoxArticles";
import { BreadCrumb } from "../../Components/BreadCrumb/BreadCrumb";
import { Footer } from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

export const Articles = () => {
  return (
    <>
      <Navbar />{" "}
      <h5 className="text-gray-700 text-xl font-bold section-container pt-[100px] md:pt-4">
        وبلاگ
      </h5>
      <BreadCrumb
        links={[
          { id: 1, name: "صفحه اصلی", to: "/" },
          { id: 2, name: "مقالات", to: "/" },
        ]}
        padding={false}
      />
      {/*  container */}
      <div className="section-container">
        {/* articels container */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ArticleBoxArticles />
          <ArticleBoxArticles />
          <ArticleBoxArticles />
          <ArticleBoxArticles />
          <ArticleBoxArticles />
          <ArticleBoxArticles />
        </div>
      </div>
      <Footer />
    </>
  );
};
