"use client";

import { useEffect, useState } from "react";
import { getQuote } from "./actions";
import { Quote } from "@/lib/types/types";

export default function QuoteGen() {
  const [quote, setQuote] = useState<Quote | null>(null);

  async function handleFetchQuote() {
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
      </section>
    );
  }

  return (
    <section className="min-h-[60dvh] flex items-center justify-center gap-3 flex-col max-w-[80%] mx-auto">
      <blockquote className="font-semibold italic text-2xl">
        `{quote?.quote}`
      </blockquote>
      <span>- {quote?.author}</span>
    </section>
  );
}
