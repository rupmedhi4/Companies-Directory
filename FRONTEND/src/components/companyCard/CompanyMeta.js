import React from "react";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { MdApartment } from "react-icons/md";

export default function CompanyMeta({ location, industry, employees }) {
  return (
    <div className="flex flex-col gap-1 text-gray-700">

      <div className="flex items-center gap-2">
        <FiMapPin className="text-gray-500" />
        <span>{location}</span>
      </div>

      <div className="flex items-center gap-2">
        <MdApartment className="text-gray-500" />
        <span>{industry}</span>
      </div>

      <div className="flex items-center gap-2">
        <AiOutlineUser className="text-gray-500" />
        <span>{employees}</span>
      </div>

    </div>
  );
}
