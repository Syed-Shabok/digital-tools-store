import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import "../../App.css";

const ToolCard = ({ tool }) => {
  return (
    <div className="card flex flex-col p-6 border border-gray-300 rounded-3xl shadow-sm gap-4">
      {/* Badge */}
      <div className="flex justify-end">
        <div
          className={`badge badge-soft ${
            tool.tag === "Best Seller"
              ? "badge-warning"
              : tool.tag === "Popular"
                ? "badge-primary"
                : tool.tag === "New"
                  ? "badge-success"
                  : ""
          } p-4 rounded-full font-medium text-base`}
        >
          {tool.tag}
        </div>
      </div>

      {/* Icon */}
      <div className="border border-gray-100 shadow-sm w-fit p-3 rounded-full">
        <img src={tool.icon} className="w-fit" alt={`Icon of ${tool.name}`} />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold dark-text">{tool.name}</h1>

      {/* Description */}
      <p className="text-lg light-text">{tool.description}</p>

      {/* Price */}
      <h3 className="font-bold text-3xl mt-auto">
        ${tool.price}
        <span className="light-text font-normal text-lg">/{tool.period}</span>
      </h3>

      {/* Features */}
      <ul className="text-lg space-y-2">
        {tool.features.map((feature, index) => (
          <li className="flex items-center gap-1" key={index}>
            <IoMdCheckmark size={23} className="text-green-500" /> {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className="btn custom-btn text-lg font-bold rounded-full px-7 py-8 w-35 w-full mt-2">
        Buy Now
      </button>
    </div>
  );
};

export default ToolCard;
