
export const getAllUniqueIndustriesName = (companies) => {
  if (!companies || !companies.length) return [];
  const industries = companies.map(c => c.industry);
  const uniqueIndustries = Array.from(new Set(industries));
  return uniqueIndustries;
};

export const getAllUniqueLocationsName = (companies) => {
  if (!companies || !companies.length) return [];
  const locations = companies.map(c => c.location);
  const uniqueLocations = Array.from(new Set(locations));
  return uniqueLocations;
};


export const applyCompanyFilters = (companies, searchQuery, industryFilter, locationFilter) => {
  return companies.filter((company) => {
    let matches = true;

    if (searchQuery) {
      matches = matches && company.name.toLowerCase().includes(searchQuery.toLowerCase());
    }

    if (industryFilter) {
      matches = matches && company.industry.toLowerCase() === industryFilter.toLowerCase();
    }

    if (locationFilter) {
      matches = matches && company.location.toLowerCase().includes(locationFilter.toLowerCase());
    }

    return matches;
  });
};
