import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Home from "./components/Home";
// import CreateBlog from "./components/pages/CreateBlog";
// import Blog from "./components/Blog/Blog";

function App() {
  const Blogs = React.lazy(() => import("./components/pages/Blogs"));
  const CreateBlog = React.lazy(() => import("./components/pages/CreateBlog"));
  const Login = React.lazy(() => import("./components/pages/Login"));
  const Register = React.lazy(() => import("./components/pages/Register"));
  const BlogDetail = React.lazy(() => import("./components/pages/BlogDetail"));
  const CreateCategory = React.lazy(() =>
    import("./components/pages/CreateCategory")
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/blogs"
          element={
            <Suspense fallback="Loading...">
              <Blogs />
            </Suspense>
          }
        />
        <Route
          path="/blogs/create"
          element={
            <Suspense fallback="Loading...">
              <CreateBlog />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback="Loading...">
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback="Loading...">
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/blogs/:id"
          element={
            <Suspense fallback="Loading...">
              <BlogDetail />
            </Suspense>
          }
        />
        <Route
          path="/create-category"
          element={
            <Suspense fallback="Loading...">
              <CreateCategory />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
