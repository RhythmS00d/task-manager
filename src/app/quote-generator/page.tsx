"use client";

import { useEffect, useState } from "react";
import { getQuote } from "./actions";
import { Quote } from "@/lib/types/types";

import { IoReloadCircleSharp } from "react-icons/io5";

export default function QuoteGen() {
  const [quote, setQuote] = useState<Quote | null>(null);

  async function handleFetchQuote() {
    setQuote(null);
    const quote = await getQuote();
    setQuote(quote);
  }

  useEffect(() => {
    handleFetchQuote();
  }, []);

  if (!quote) {
    return (
      <section className="min-h-[60dvh] flex items-center justify-center gap-3 flex-col max-w-[80%] mx-auto">
        <blockquote className="w-full h-[30px] bg-gray-400 rounded-md animate-pulse">
          <h3 className="sr-only">Quote of the day is loading</h3>
        </blockquote>
        <span className="w-1/5 h-[30px] bg-gray-400 rounded-md animate-pulse"></span>
        <button type="button" className="mt-10">
          <IoReloadCircleSharp className="size-10" />
        </button>
      </section>
    );
  }

  return (
    <section className="min-h-[60dvh] flex items-center justify-center gap-3 flex-col w-full mx-auto">
      <blockquote className="font-semibold italic lg:text-2xl w-full text-center md:text-xl">
        `{quote?.quote}`
      </blockquote>
      <span className="text-sm md:text-lg lg:text-lg">- {quote?.author}</span>

      <button type="button" onClick={handleFetchQuote} className="mt-10">
        <IoReloadCircleSharp className="size-10 md:size-12" />
      </button>
    </section>
  );
}
