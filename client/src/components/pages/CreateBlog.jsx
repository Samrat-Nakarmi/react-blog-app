import React, { useEffect, useState } from "react";
import axios from "../../api/api";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CreateBlog = () => {
  const [text, SetText] = useState("");
  const [dataCat, setDataCat] = useState("");
  const [getCategory, setGetCategory] = useState([]);
  const [time, EventTime] = useState();

  const [title, SetHead] = useState();
  const [thumbnailimage, SetThumbnailImage] = useState();
  const [image, SetImage] = useState([]);

  const handleUploadMultiple = (e) => {
    const selectedFiles = Array.from(e.target.files);
    console.log(selectedFiles);

    // Update the Image state with the array of selected files
    SetImage(selectedFiles);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const categoriesResponse = await fetchCategories();
  //       setGetCategory(categoriesResponse);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array means this effect runs only once after the initial render

  // const fetchCategories = async () => {
  //   console.log();
  //   const response = await fetch("http://127.0.0.1:1337/api/categories");
  //   const data = await response.json();
  //   return data; // Assuming categories are directly under 'data'
  // };

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
  // const handleUpload = (e, eventId) => {
  //   const selectedFiles = Array.from(e.target.files);
  //   console.log(selectedFiles);

  //   const updatedEvent = { id: eventId, thumbnail_images: selectedFiles };

  //   // Update the events state with the updated event object
  //   setEvents((prevEvents) =>
  //     prevEvents.map((event) => (event.id === eventId ? updatedEvent : event))
  //   );

  //   console.log(updatedEvent);
  // };
  const handleChange = (e, editor) => {
    const data = editor.getData();
    SetText(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(image);
    let createBlogData = {
      data: {
        blogTitle: title,
        blogDescription: text,
      },
    };

    // let createBlogImageData = {
    //   data: {
    //     blogThumbnail: thumbnailimage,
    //     blogImages: [],
    //   },
    // };

    let createBlogImageData = new FormData();

    createBlogImageData.append("blogThumbnail", thumbnailimage)

    for (let i = 0; i < image.length; i++) {
      createBlogImageData.append(image[i]);
    }

    try {
      const response = await axios.post(
        "/api/blogs?populate=*",
        createBlogData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Submitted");
    } catch (error) {
      console.log("Not submitted: ", error);
    }
    try {
      const response = await axios.post("/api/uploads", createBlogImageData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Submitted");
      console.log(response);
    } catch (error) {
      console.log("Not submitted: ", error);
    }
  };
  return (
    <>
      <section className="w-80">
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
              onChange={(e) => SetHead(e.target.value)}
            />
          </div>

          <div className="article-el">
            <CKEditor
              editor={ClassicEditor}
              data={text}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
              }}
              onChange={handleChange}
            />
            {text}
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

          {/* <div className="article-el">
            <label htmlFor="article-image" className="text-lg">
              Posted by
            </label>{" "}
            <br />
            <select
              name="opt"
              id=""
              onChange={(e) => setDataCat(e.target.value)}
              value={dataCat}
              className="w-full mt-2"
              style={{ borderRadius: "5px" }}
              required
            >
              {getCategory.data.map((options) => (
                <option value={options.id} key={options._id} required>
                  {options.attributes.categoryName}
                </option>
              ))}
            </select>
          </div> */}

          <div className="request-form">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateBlog;
