"use client";

import { useState } from "react";

export function WeatherSearch({
  handleSearch,
  error = null,
}: {
  handleSearch: (e: FormData) => void;
  error: null | string;
}) {
  const [showFilters, setShowFilters] = useState(false);

  const inputStyle = "p-1 rounded-md text-black";
  const buttonStyle =
    "bg-blue-500 w-24 h-10 rounded-md text-sm hover:bg-blue-400";

  return (
    <search className="p-4">
      <form action={handleSearch} className="flex flex-col gap-3">
        <input
          type="text"
          name="city"
          id="search"
          placeholder="Location"
          className={inputStyle}
        />
        {error && (
          <span className="text-red-500 text-sm">{error}! Try again</span>
        )}
        <div className="" id="filters">
          <button
            type="button"
            className={buttonStyle + ""}
            onClick={() => setShowFilters((prev) => !prev)}
          >
            Show filters
          </button>
          {showFilters && (
            <ul>
              <li>
                <label htmlFor="lon">Longitude: </label>
                <input
                  type="text"
                  name="longitude"
                  id="lon"
                  placeholder="Longitude"
                  className={inputStyle}
                />
              </li>
              <li>
                <label htmlFor="lat">Latitude: </label>
                <input
                  type="text"
                  name="latitude"
                  id="lat"
                  placeholder="Latitude"
                  className={inputStyle}
                />
              </li>
            </ul>
          )}
        </div>
        <button type="submit" className={buttonStyle}>
          Search
        </button>
      </form>
    </search>
  );
}
