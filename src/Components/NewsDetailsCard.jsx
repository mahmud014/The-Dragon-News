import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { title, image_url, details } = news;
  return (
    <div className="space-y-4">
      <figure className="mt-5">
        <img
          className="w-full h-full object-cover overflow-hidden rounded-lg"
          src={image_url}
          alt={title}
        />
      </figure>
      <h2 className="card-title hover:underline cursor-pointer text-lg font-bold">
        {title}
      </h2>
      <p className="text-sm text-gray-700">{details}</p>
      <Link
        className="btn bg-black/70 text-gray-200"
        to={`/category/${news.category_id}`}
      >
        <FaArrowLeft />
        Back all news
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
