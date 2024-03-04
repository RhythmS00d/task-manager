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
  }

  function handleCategoryChange(e: ChangeEvent<HTMLInputElement>) {
    setCurrentCategory(e.target.value);
    setNews(null);
    handleFetchNews(e.target.value, 1);
  }

  function handlePagination(value: number) {
    setPage((prev) => prev + value);
    setNews(null);
    handleFetchNews(currentCategory, page + value);
  }

  useEffect(() => {
    handleFetchNews(currentCategory, page);
  }, []);

  if (!news) {
    return (
      <section className="flex items-center justify-center flex-col p-4">
        <Filters />
        <ul className="overflow-y-scroll h-[300px] w-5/6 my-4 flex flex-col gap-2">
          {new Array(10).fill("").map((article) => (
            <li className="animate-pulse w-full h-[20px] bg-gray-400 rounded-md"></li>
          ))}
        </ul>
      </section>
    );
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
      <RenderArticle />
    </section>
  );
}
