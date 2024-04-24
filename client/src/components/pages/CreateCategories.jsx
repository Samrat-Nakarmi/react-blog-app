import swal from "sweetalert";
import axios from "../../api/api";
import React, { useState } from "react";

function CreateCategories() {
  const [categoryName, setCategoryName] = useState("");
  console.log(categoryName)

  const handleSubmit = async () => {
    const token = localStorage.getItem("私は猫が大好き");
    console.log(token);

    try {
      const response = await axios.post(
        "/api/categories",
        { categoryName },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response);
      swal({ title: "Submitted", icon: "Success" });
    } catch (error) {
      console.log(error);
      swal({ title: "Could not Submit", icon: "error" });
    }
  };
  return (
    <div className="bg-white h-screen w-full text-black">
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-1/4 h-1/4 p-8 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] border-2 border-[black]  rounded-lg"
      >
        <label htmlFor="categoryname">Category Name</label>
        <input
          type="text"
          name="category"
          id=""
          placeholder="category name"
          className="border-2 rounded-md p-2 ml-2"
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button
          className="relative top-[50%] left-[50%] -translate-x-8 py-2 px-4 border border-amber-300 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateCategories;
