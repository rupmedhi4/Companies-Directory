import React from "react";
import { useCompanies } from "../../context/CompanyContext";

export default function LocationFilter({ location, setLocation }) {
  const { allLocations } = useCompanies(); 

  return (
    <select
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Select Location</option>
      {allLocations &&
        allLocations.map((loc, index) => (
          <option key={index} value={loc}>
            {loc}
          </option>
        ))}
    </select>
  );
}
