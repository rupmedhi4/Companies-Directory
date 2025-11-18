import React from "react";
import { toast } from "react-toastify";
import { useCompanies } from "../../context/CompanyContext";

export default function DynamicSortByFilter() {
  const {
    sortBy,
    allIndustries ,
    allLocations ,
    setIndustryFilter,
    setLocationFilter,
    selectedSortByValue,
    setSelectedSortByValue,
  } = useCompanies();

  const optionsList =
    sortBy === "industry"
      ? allIndustries
      : sortBy === "location"
      ? allLocations
      : [];

  const handleChange = (e) => {
    try {
      const value = e.target.value;
      setSelectedSortByValue?.(value);

      if (sortBy === "industry") {
        setIndustryFilter?.(value);
      } else if (sortBy === "location") {
        setLocationFilter?.(value);
      }
    } catch (error) {
      console.error("Error selecting sort option:", error);
      toast.error("Something went wrong while selecting sort option");
    }
  };

  return (
    <select
      disabled={!sortBy}
      value={selectedSortByValue || ""}
      onChange={handleChange}
      className={`px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  ${!sortBy ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <option value="" disabled>
        {sortBy ? `Select ${sortBy}` : "Select Sort Option First"}
      </option>

      {optionsList.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
