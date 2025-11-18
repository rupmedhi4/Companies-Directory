import React from "react";

export default function CompanyLogo({ logo, name }) {
  return (
    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
      <img
        src={logo}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
