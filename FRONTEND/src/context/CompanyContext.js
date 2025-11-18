import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchCompanies } from "../services/companyServices";
import {
  getAllUniqueIndustriesName,
  getAllUniqueLocationsName,
  applyCompanyFilters,
} from "../services/companyUtils";
import { toast } from "react-toastify";

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanyData, setFilteredCompanyData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const [sortBy, setSortBy] = useState(null);
  const [allIndustries, setAllIndustries] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [selectedSortByValue, setSelectedSortByValue] = useState(null);

  useEffect(() => {
    const getCompanies = async () => {
      setLoading(true);
      try {
        const data = await fetchCompanies();
        setCompanies(data);
        setFilteredCompanyData(data);
        setAllIndustries(getAllUniqueIndustriesName(data));
        setAllLocations(getAllUniqueLocationsName(data));
       // toast.success("Companies fetched successfully!"); 
      } catch (err) {
        toast.error(
          err.response?.data?.message || "Failed to fetch companies"
        ); 
      }
      setLoading(false);
    };

    getCompanies();
  }, []);


useEffect(() => {
  try {
    const results = applyCompanyFilters(
      companies,
      searchQuery,
      industryFilter,
      locationFilter
    );
    setFilteredCompanyData(results);
  } catch (err) {
    toast.error(
      err.message || "Something went wrong while filtering companies");
  }
}, [searchQuery, industryFilter, locationFilter, companies]);


  return (
    <CompanyContext.Provider
      value={{
        companies,
        setCompanies,
        filteredCompanyData,
        loading,
        searchQuery,
        setSearchQuery,
        industryFilter,
        setIndustryFilter,
        locationFilter,
        setLocationFilter,
        sortBy,
        setSortBy,
        allIndustries,
        allLocations,
        selectedSortByValue,
        setSelectedSortByValue,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompanies = () => useContext(CompanyContext);
