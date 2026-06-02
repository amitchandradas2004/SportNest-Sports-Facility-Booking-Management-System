"use client";

import { useState } from "react";
import FacilityCard from "./FacilityCard";
import { Button } from "@heroui/react";

const SearchCard = ({ facilitys }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFacilities = facilitys.filter((facility) =>
    facility.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <div className="flex justify-center px-3 md:px-0">
        <input
          type="text"
          placeholder="Search facilities..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
        {filteredFacilities.length > 0
          ? filteredFacilities.map((facility) => (
              <FacilityCard key={facility._id} facility={facility} />
            ))
          : searchTerm.trim() !== "" && (
              <div className="col-span-full flex flex-col items-center justify-center pt-5">
                <h3 className="text-2xl font-semibold text-gray-700">
                  No facilities found
                </h3>

                <p className="text-gray-500 mt-2">
                  No results found for{" "}
                  <span className="font-medium text-indigo-600">
                    &quot;{searchTerm}&quot;
                  </span>
                </p>

                <Button
                  onClick={() => setSearchTerm("")}
                  className="mt-4 w-50 bg-indigo-600 rounded-full hover:bg-indigo-700 transition"
                >
                  Clear Search
                </Button>
              </div>
            )}
      </div>
    </>
  );
};

export default SearchCard;
