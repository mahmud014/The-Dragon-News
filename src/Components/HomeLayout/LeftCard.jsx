import React, { use } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const categoryPromise = fetch("/news.json").then((res) => res.json());
const LeftCard = () => {
  const categories = use(categoryPromise);
  const sportsCategories = categories.filter((category) =>
    category.tags.includes("sports")
  );
  return (
    <div className="mt-5 space-y-4 p-2">
      {sportsCategories.slice(0, 3).map((category, index) => (
        <div key={index}>
          <img
            src={category.image_url}
            alt={category.title}
            className="w-full h-full object-cover overflow-hidden rounded-lg"
          />
          <div>
            <h2 className="text-sm font-semibold leading-tight my-2">
              {category.title}
            </h2>
            <div className=" flex justify-between items-center overflow-hidden">
              <span className="text-blue-500 font-medium">
                {category.tags[0]}
              </span>
              <div className=" flex items-center gap-2">
                <FaRegCalendarAlt />
                <span>
                  {new Date(
                    category.author.published_date
                  ).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftCard;
