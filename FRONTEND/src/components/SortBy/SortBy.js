import React from "react";
import { toast } from "react-toastify";
import SortByFilter from "./SortByFilter";
import DynamicSortByFilter from "./DynamicSortByFilter";
import { useCompanies } from "../../context/CompanyContext";

export default function SortBy() {
  const {
    sortBy,
    setSortBy,
    setSelectedSortByValue,
    setSearchQuery,
    setIndustryFilter,
    setLocationFilter
  } = useCompanies(); 

  const handleReset = () => {
    try {
      setSelectedSortByValue(null);
      setSortBy("");
      setSearchQuery("");
      setIndustryFilter("");
      setLocationFilter("");
      toast.success("Filters reset successfully!");
    } catch (error) {
      console.error("Error resetting filters:", error);
      toast.error("Something went wrong while resetting filters");
    }
  };

  return (
    <div className="flex gap-4 flex-wrap">
      <SortByFilter />
      {sortBy && (
        <>
          <DynamicSortByFilter /> 
          <button 
            onClick={handleReset} 
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Reset
          </button>
        </>
      )}
    </div>
  );
}
