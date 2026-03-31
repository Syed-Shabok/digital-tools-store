import React, { use, useState } from "react";
import "../../App.css";

const Tools = ({ toolsPromise }) => {
  const tools = use(toolsPromise);
  console.log(tools);

  const [tab, setTab] = useState("products");

  return (
    <div className="my-10 space-y-5">
      {/* Title */}
      <div className="w-1/2 mx-auto text-center space-y-4">
        <h1 className="font-bold dark-text text-5xl">Premium Digital Tools</h1>
        <p className="light-text text-lg">
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className=" w-fit p-1 rounded-full border border-gray-300 bg-base-200 space-x-1 mx-auto">
        <button
          onClick={() => setTab("products")}
          className={`btn ${tab === "products" ? "custom-btn" : ""} text-lg font-bold rounded-full px-7 py-7 w-35`}
        >
          Products
        </button>

        <button
          onClick={() => setTab("cart")}
          className={`btn ${tab === "cart" ? "custom-btn" : ""} text-lg  font-bold rounded-full px-7 py-7 w-35 border-none`}
        >
          Cart (2)
        </button>
      </div>

      <div></div>
    </div>
  );
};

export default Tools;
<h1>Tools</h1>;
