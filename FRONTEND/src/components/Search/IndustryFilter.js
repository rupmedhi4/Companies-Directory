import React from "react";
import { useCompanies } from "../../context/CompanyContext";

export default function IndustryFilter({ industry, setIndustry }) {
  const { allIndustries } = useCompanies(); 

  return (
    <select
      value={industry}
      onChange={(e) => setIndustry(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white 
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Select Industry</option>
      {allIndustries &&
        allIndustries.map((ind, index) => (
          <option key={index} value={ind}>
            {ind}
          </option>
        ))}
    </select>
  );
}
