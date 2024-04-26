import React, { useState } from "react";
import axios from "../../api/api";
import swal from "sweetalert";

export default function CreateCategory() {
  const [categoryName, setCategoryName] = useState("");

  const data = {
    categoryName: categoryName,
  };
  console.log(categoryName);
  const token = localStorage.getItem("私は猫が大好き");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/categories", data, {
        headers: {
          Authorization: "Bearer" + token,
        },
      });
      console.log(response);
      swal({ icon: "Success", title: "Submitted" });
    } catch (error) {
      swal({ icon: "error", title: "Error" });
      console.log(error);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Category</label>
        <input
          type="text"
          name="category"
          id=""
          placeholder="cateogry"
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
