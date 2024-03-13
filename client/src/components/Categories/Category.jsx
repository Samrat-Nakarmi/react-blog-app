"use client";
import { CategoryContext } from "../context/CategoryContext";
import React, { useContext } from "react";

const Category = ({ cat }) => {
  const { category, changeCategory } = useContext(CategoryContext);
  return (
    <div
      onClick={() => changeCategory(cat.attributes.categoryName)}
      className={`${
        cat.attributes.categoryName === category
          ? "bg-[#ffffff] text-black"
          : "bg-[#af8533]"
      }  p-4 rounded-lg shadow-md cursor-pointer`}
    >
      {cat.attributes.categoryName}
    </div>
  );
};

export default Category;
