"use client";

import { type ChangeEvent, useEffect, useState, Suspense } from "react";
import { getNews } from "./actions";
import { NewsResp } from "@/lib/types/types";

import Link from "next/link";

import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { useRouter, useSearchParams } from "next/navigation";

export default function News() {
  const [news, setNews] = useState<NewsResp | null>(null);
  const searchParams = useSearchParams();
  let currentCategory = searchParams.get("category") || "Technology";
  let page = searchParams.get("page") || 1;
  const router = useRouter();

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

  function handleCategoryChange() {
    setNews(null);
  }

  function handlePagination() {
    setNews(null);
  }

  useEffect(() => {
    const controller = new AbortController();
    handleFetchNews(currentCategory, +page);

    if (isNaN(+page)) {
      page = 1;
      router.push(`/news?category=${currentCategory}&page=${page}`);
    }

    return () => controller.abort();
  }, [currentCategory, page]);

  if (!news) {
    return (
      <section className="flex items-center justify-center flex-col p-4">
        <Filters />
        <ul className="overflow-y-scroll h-[300px] w-5/6 my-4 flex flex-col gap-2">
          {new Array(10).fill("").map((article, index) => (
            <li
              key={article + 10 * index + 2.3}
              className="animate-pulse w-full h-[20px] bg-gray-400 rounded-md"
            ></li>
          ))}
        </ul>
      </section>
    );
  }

  if (news.status === "error") {
    const errors: { [key: string]: string } = {
      rateLimited:
        "You have made too many requests recently. Free users are limited to 100 requests over 24 hr period.",
      apiKeyMissing: "Api key is missing.",
      maximumResultsReached:
        "You have requested too many results. Users are limited to a max of 100 results.",
    };
    return (
      <section className="min-h-[40dvh] flex flex-col items-center justify-center w-[130%] self-center">
        <h1 className="text-md font-semibold">Error occured: {news.code}</h1>
        <p className="mt-4 text-center">
          {errors[news.code || "maximumResultsReached"]}
        </p>
        <Link
          href={`?category=${currentCategory}&page=1`}
          className="mt-4 task-button px-2 py-4"
        >
          Go back to {currentCategory}'s first page
        </Link>
        <Link href={`/`} className="mt-4 task-button px-4 py-4">
          Home
        </Link>
      </section>
    );
  }

  function Filters() {
    return (
      <ul className="flex gap-2 overflow-x-scroll w-[150%] p-2 lg:self-center lg:w-[150%] lg:flex lg:items-center lg:justify-center">
        {categories.map((category) => (
          <Link
            href={`?category=${category.toLowerCase()}&page=1`}
            onClick={handleCategoryChange}
            key={category}
          >
            <li
              className={`category rounded-md hover:bg-gray-400 ${
                currentCategory.toLowerCase() === category.toLowerCase()
                  ? "ring-2 ring-blue-500"
                  : ""
              }`}
            >
              {category}
            </li>
          </Link>
        ))}
      </ul>
    );
  }

  function RenderArticle() {
    if (news?.articles?.length === 0) {
      if (+page === 1)
        return (
          <h1 className="py-4 mt-4 text-lg">
            No articles found! Change category.
          </h1>
        );
      else if (+page > 1) {
        return (
          <section>
            {/* <h1>{news}</h1> */}
            <span>
              If not redirected,{" "}
              <Link
                href={`?category=${currentCategory}&page=${Math.ceil(
                  news.totalResults ?? 0 * 0.1
                )}`}
              >
                click here
              </Link>
            </span>
          </section>
        );
      }
    }

    return (
      <div className="p-4 w-[150%] mt-3 lg:w-full">
        <ul className="overflow-y-scroll h-[500px] md:h-fit">
          {news?.articles?.map((article) => (
            <Link
              key={article.title}
              href={article.url}
              className="hover:underline"
              target="_blank"
            >
              <li className="p-4 my-2 bg-white rounded-lg shadow-md lg:w-full lg:mx-auto">
                {article.title}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex gap-2 items-center justify-center mt-10">
          {+page > 1 && (
            <Link
              href={`?category=${currentCategory}&page=${+page - 1}`}
              className="size-10"
              onClick={handlePagination}
            >
              <IoMdArrowDropleftCircle className="size-10" />
            </Link>
          )}
          {page}
          {+page < Math.ceil((news?.totalResults ?? 0) * 0.1) && (
            <Link
              href={`?category=${currentCategory}&page=${+page + 1}`}
              className="size-10"
              onClick={handlePagination}
            >
              <IoMdArrowDroprightCircle className="size-10" />
            </Link>
          )}
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
