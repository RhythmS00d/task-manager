"use client";

import { type ChangeEvent, useEffect, useState, Suspense } from "react";
import { getNews } from "./actions";
import { NewsResp } from "@/lib/types/types";

import Link from "next/link";

import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";

export default function News() {
  const [news, setNews] = useState<NewsResp | null>(null);
  const [currentCategory, setCurrentCategory] = useState("Technology");
  const [page, setPage] = useState(1);

  const categories = [
    "Technology",
    "Buisness",
    "General",
    "Health",
    "Science",
    "Sports",
    "Entertainment",
  ];

  async function handleFetchNews(category: string, page: number) {
    const news = await getNews(category, page);

    setNews(news);
    console.log(news);
  }

  function handleCategoryChange(e: ChangeEvent<HTMLInputElement>) {
    setCurrentCategory(e.target.value);
    handleFetchNews(e.target.value, 1);
    console.log(e.target.value);
  }

  function handlePagination(value: number) {
    setPage((prev) => prev + value);

    handleFetchNews(currentCategory, page + value);
  }

  useEffect(() => {
    handleFetchNews(currentCategory, page);
  }, []);

  if (!news) {
    return <h1>Loading...</h1>;
  }

  function Filters() {
    return (
      <ul className="flex gap-2">
        {categories.map((category) => (
          <li key={category}>
            <input
              type="radio"
              name="category"
              value={category}
              id={category}
              checked={currentCategory === category}
              onChange={(e) => handleCategoryChange(e)}
              className="hidden"
            />
            <label
              htmlFor={category}
              className="category rounded-md hover:bg-gray-400"
            >
              {category}
            </label>
          </li>
        ))}
      </ul>
    );
  }

  function RenderArticle() {
    if (news?.articles.length === 0) {
      return <h1 className="py-4 mt-4 text-lg">No articles found</h1>;
    }

    return (
      <div className="p-4 w-[80%]">
        <ul className="overflow-y-scroll h-[300px]">
          {news?.articles.map((article) => (
            <Link
              key={article.title}
              href={article.url}
              className="hover:underline"
              target="_blank"
            >
              <li>{article.title}</li>
            </Link>
          ))}
        </ul>
        <div className="flex gap-2 items-center justify-center mt-10">
          <button
            className="size-10"
            type="button"
            onClick={() => handlePagination(-1)}
            disabled={page === 1}
          >
            <IoMdArrowDropleftCircle
              color={page === 1 ? "gray" : ""}
              className="size-10"
            />
          </button>
          {page}
          <button
            type="button"
            className="size-10"
            disabled={page === Math.ceil((news?.totalResults ?? 0) / 10)}
            onClick={() => handlePagination(1)}
          >
            <IoMdArrowDroprightCircle
              className="size-10"
              color={
                page === Math.ceil((news?.totalResults ?? 0) / 10) ? "gray" : ""
              }
            />
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="flex items-center justify-center flex-col p-4">
      <Filters />
      <Suspense fallback={<h1>Loading....</h1>}>
        <RenderArticle />
      </Suspense>
    </section>
  );
}