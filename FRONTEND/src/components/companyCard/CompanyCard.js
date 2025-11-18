import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CompanySingleCard from "./CompanySingleCard";
import { useCompanies } from "../../context/CompanyContext";
import { toast } from "react-toastify";

export default function CompanyCard() {
  const { filteredCompanyData, loading } = useCompanies();
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);

  const loadMore = () => {
    try {
      setLoadingMore(true);
      setTimeout(() => {
        setVisibleCount((prev) => prev + 6);
        setLoadingMore(false);
      }, 500);
    } catch (error) {
      toast.error("Something went wrong while loading more companies");
      setLoadingMore(false);
    }
  };

  if (loading)
    return <p className="text-center mt-10 text-lg font-medium">Loading...</p>;

  if (!filteredCompanyData || !filteredCompanyData.length)
    return <p className="text-center mt-10 text-lg font-medium">No companies found.</p>;

  try {
    return (
      <InfiniteScroll
        dataLength={Math.min(visibleCount, filteredCompanyData.length)}
        next={loadMore}
        hasMore={visibleCount < filteredCompanyData.length}
        loader={
          loadingMore && (
            <h4 className="text-center mt-4 text-lg font-medium">Loading...</h4>
          )
        }
        endMessage={
          <p className="text-center mt-4 font-medium">
            <b>No more companies</b>
          </p>
        }
      >
        <div className="max-w-6xl mx-auto bg-blue-50 rounded-2xl shadow-2xl p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredCompanyData.slice(0, visibleCount).map((company) => (
            <div
              key={company.id || Math.random()} // fallback key
              className="rounded-2xl shadow-xl transform transition duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <CompanySingleCard company={company} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    );
  } catch (error) {
    toast.error("Something went wrong while displaying companies");
    return null;
  }
}
