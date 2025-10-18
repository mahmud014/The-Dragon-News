import React, { use } from "react";
import Marquee from "react-fast-marquee";
const categoryPromise = fetch("/news.json").then((res) => res.json());
const BreakingNews = () => {
  const data = use(categoryPromise);
  const breakingNewsCategories = data.filter(
    (category) => category.others?.is_today_pick === true
  );
  return (
    <div className="flex items-center gap-2 bg-base-200 p-2 font-bold">
      <p className="rounded-lg bg-red-500 text-white py-2 px-3">Latest</p>
      <Marquee speed={60} pauseOnHover={true}>
        {breakingNewsCategories.map((category) => (
          <span key={category.id} className="mr-6">
            {category.title}.
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
