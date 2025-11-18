import React from "react";
import { useCompanies } from "../../context/CompanyContext";

export default function SortByFilter() {
  const {sortBy, setSortBy,selectedSortByValue}=useCompanies()

  
  return (
    <select
    disabled={selectedSortByValue !== null}
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="" disabled selected={sortBy===null}> Sort By</option>
      <option value="industry">Industry</option>
      <option value="location">Location</option>
      <option value="name">Company Name</option>
    </select>
  );
}
