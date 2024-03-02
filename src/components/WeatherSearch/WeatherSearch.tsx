"use client";

import { useState } from "react";

export function WeatherSearch({
  handleSearch,
}: {
  handleSearch: (e: FormData) => void;
}) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <search>
      <form action={handleSearch}>
        <input
          type="text"
          name="city"
          id="search"
          placeholder="Location"
          required
        />
        <div className="" id="filters">
          <button
            type="button"
            className=""
            onClick={() => setShowFilters((prev) => !prev)}
          >
            show filters
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
                  defaultValue=""
                />
              </li>
              <li>
                <label htmlFor="lat">Latitude: </label>
                <input
                  type="text"
                  name="latitude"
                  id="lat"
                  placeholder="Latitude"
                  defaultValue=""
                />
              </li>
            </ul>
          )}
        </div>
        <button type="submit">Search</button>
      </form>
    </search>
  );
}
