import React, { useEffect, useState } from "react";
import axios from "../../api/api";
import { CategoryProvider } from "../context/CategoryContext";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CreateBlog = () => {
  const [desctiption, SetDescription] = useState("");
  const [dataCat, setDataCat] = useState("");
  const [category, setCategories] = useState([]);
  const [time, EventTime] = useState();
  const [selectedCategories, setSelectedCategories] = useState([]);



  const [title, SetTitle] = useState();
  const [thumbnailimage, SetThumbnailImage] = useState();
  const [image, SetImage] = useState([]);

  const handleUploadMultiple = (e) => {
    const selectedFiles = Array.from(e.target.files);
    console.log(selectedFiles);

    // Update the Image state with the array of selected files
    SetImage(selectedFiles);
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(selectedCategories.filter(catId => catId !== value));
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get("/api/categories");
        setCategories(categoriesResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once after the initial render

  console.log(category);

  const handleUpload = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    if (
      selectedFile.type === "image/png" ||
      selectedFile.type === "image/jpg" ||
      selectedFile.type === "image/svg" ||
      selectedFile.type === "image/jpeg" ||
      selectedFile.type === "image/gif" ||
      selectedFile.type === "image/tiff"
    ) {
      SetThumbnailImage(selectedFile);
      console.log(selectedFile);
    } else {
      alert("Wrong image type");
    }
  };

  const handleChange = (e, editor) => {
    const data = editor.getData();
    SetDescription(data);
  };

  const data = {
    blogTitle: title,
    blogDescription: desctiption,
    categories: selectedCategories,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("私は猫が大好き");
    console.log(token);
    console.log(image);

    const createBlogData = new FormData();

    createBlogData.append("data", JSON.stringify(data));

    createBlogData.append("files.blogThumbnail", thumbnailimage);

    for (let i = 0; i < image.length; i++) {
      createBlogData.append("files.blogImages", image[i]);
    }

    console.log(createBlogData);
    try {
      // Make parallel requests to both endpoints
      const response = await axios.post("/api/blogs", createBlogData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      console.log(response);

      swal({ title: "Submitted", icon: "success" });
      // window.location.replace("/blogs");
    } catch (error) {
      console.error("Submission error:", error);
      swal({ title: "Error", text: "Submission failed", icon: "error" });
    }
  };
  return (
    <>
      <section className="w-4/5 m-auto">
        <div className="flex gap-5">
          <h1 className="text-4xl pt-12">Create Blog</h1>
        </div>

        <form action="" onSubmit={handleSubmit} className="pt-14 p-22">
          <div className="article-el">
            <label htmlFor="title" className="text-lg">
              Title
            </label>{" "}
            <br />
            <input
              type="text"
              className="p-1 text-sm border border-solid border-[#ccc] rounded-md"
              placeholder="Title*"
              onChange={(e) => SetTitle(e.target.value)}
            />
          </div>

          <div className="article-el w-full">
            <CKEditor
              editor={ClassicEditor}
              data={desctiption}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
              }}
              onChange={handleChange}
              className="h-[25rem]"
            />
          </div>

          <div className="article-el">
            <label htmlFor="image" className="text-lg">
              Thumbnail Image
            </label>{" "}
            <br />
            <input
              type="file"
              placeholder="Thumbnail Image*"
              onChange={handleUpload}
              className="text-sm pt-2"
              name=""
              id=""
            />
          </div>

          <div className="article-el">
            <label htmlFor="article-image" className="text-lg">
              Article Images {"(Max. 3 images)"}
            </label>{" "}
            <br />
            <input
              type="file"
              name=""
              id=""
              className="text-sm pt-2"
              onChange={handleUploadMultiple}
              multiple
            />
          </div>

          <div className="article-el">
            <label htmlFor="article-image" className="text-lg">
              Categories
            </label>{" "}
            <br />
            {category.map((options) => (
              <div key={options.id}>
              <input
                type="checkbox"
                name="categories"
                id={`category-${options.id}`}
                onChange={handleCategoryChange}
                value={options.id}
                checked={selectedCategories.includes(options.id)}
                style={{ borderRadius: "5px" }}
              />
              <label htmlFor={`category-${options.id}`}>{options.attributes.categoryName}</label>
            </div>
            ))}
          </div>

          <div className="request-form">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateBlog;
