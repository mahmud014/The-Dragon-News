import React from "react";
import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    id,
    rating,
    total_view,
    tags,
  } = news;
  return (
    <div className="card w-full bg-base-100 shadow-xl border border-gray-200">
      {/* Card Header */}
      <div className="flex justify-between items-center p-4 bg-base-300">
        <div className="flex items-center space-x-3">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={author.img}
            alt={author.name}
          />
          <div>
            <p className="text-sm font-semibold">{author.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <FaRegBookmark className="cursor-pointer hover:text-blue-600" />
          <FaShareAlt className="cursor-pointer hover:text-blue-600" />
        </div>
      </div>

      {/* Thumbnail and Card Body */}
      <div className="card-body p-4">
        <h2 className="card-title hover:underline cursor-pointer text-lg font-bold">
          {title}
        </h2>
        <figure>
          <img
            className="w-full h-full object-cover overflow-hidden rounded-lg"
            src={thumbnail_url}
            alt={title}
          />
        </figure>
        {/* Description Preview */}
        <p className="text-sm text-gray-700">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
        </p>

        {/* Read More */}
        <div className="mt-2">
          <Link
            to={`/category/${id}`}
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            Read More
          </Link>
        </div>

        {/* Footer */}
        <div className="divider"></div>
        <div className="flex justify-between items-center">
          {/* Rating */}
          <div className="flex items-center space-x-1 text-yellow-500">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < rating.number ? "text-yellow-500" : "text-gray-300"
                }
              />
            ))}
            <span className="text-xs text-blue-600 font-semibold ml-2">
              {rating.badge}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center space-x-1 text-gray-500 text-sm">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs text-white bg-blue-500 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
