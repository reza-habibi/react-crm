import { ChevronLeftIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

export const BreadCrumbComponent = ({ page }: any) => {
  return (
    <ul className="flex text-white text-xl lg:text-2xl justify-start w-full container">
      <li className="inline-flex items-center">
        <Link to="/">خانه</Link>
        <ChevronLeftIcon className="block w-6 h-6" aria-hidden="true" />
      </li>
      <li className="inline-flex items-center">
        <Link to="/components">{page}</Link>
      </li>
    </ul>
  );
};
