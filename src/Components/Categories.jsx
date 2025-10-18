import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/Category.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h1 className="font-bold">All Categories ({categories.length})</h1>
      <div className="grid grid-cols-1 gap-1 mt-5 category">
        {categories.map((category) => (
          <NavLink
            key={category.category_id}
            className={"py-2 px-3 hover:bg-base-300"}
            to={`/category/${category.category_id}`}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
