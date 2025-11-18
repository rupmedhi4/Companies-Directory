import React from "react";
import CompanyLogo from "./CompanyLogo";
import CompanyMeta from "./CompanyMeta";

export default function CompanySingleCard({ company }) {
  return (
    <div className="
      bg-white 
      border border-gray-200 
      rounded-xl 
      p-5 
      shadow-sm 
      hover:shadow-md 
      transition 
      flex flex-col gap-3
      w-full
    ">
      <div className="flex items-center gap-4">
        <CompanyLogo logo={company.logo_url} name={company.name} />

        <h2 className="text-xl font-semibold text-gray-900">
          {company.name}
        </h2>
      </div>

      <CompanyMeta
        location={company.location}
        industry={company.industry}
        employees={company.employees}
      />

      <a
        href={company.website}
        target="_blank"
        className="text-blue-600 font-medium hover:underline mt-3"
      >
        {company.website}
      </a>
    </div>
  );
}
