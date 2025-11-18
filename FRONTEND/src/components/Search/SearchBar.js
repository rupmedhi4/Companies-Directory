import React from "react";
import { toast } from "react-toastify";
import SearchInput from "./SearchInput";
import LocationFilter from "./LocationFilter";
import IndustryFilter from "./IndustryFilter";
import { useCompanies } from "../../context/CompanyContext";

export default function SearchBar() {
  const {
    setSearchQuery,
    setIndustryFilter,
    setLocationFilter,
    searchQuery,
    industryFilter,
    locationFilter,
  } = useCompanies();

  const handleReset = () => {
    try {
      setSearchQuery("");
      setIndustryFilter("");
      setLocationFilter("");
      toast.success("Filters reset successfully!");
    } catch (error) {
      toast.error("Something went wrong while resetting filters");
    }
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-md mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <SearchInput searchTerm={searchQuery || ""} setSearchTerm={setSearchQuery} />
        <LocationFilter location={locationFilter || ""} setLocation={setLocationFilter} />
        <IndustryFilter industry={industryFilter || ""} setIndustry={setIndustryFilter} />

        <button
          onClick={handleReset}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md 
                     hover:bg-blue-700 transition"
        >
          RESET
        </button>
      </div>
    </div>
  );
}
