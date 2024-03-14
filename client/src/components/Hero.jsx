import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="img">
        <img src="/images/main.jpg" alt="" srcset="" />
      </div>
      <div className="title">
        <h1>KreatUs</h1>
      </div>
      <div className="button">
        <a href="/blogs" className="btn">
          <b>Read Blogs</b>
        </a>
        <a href="https://www.instagram.com//" className="btn">
          <b>INSTAGRAM</b>
        </a>
        <div>
          <form className="search-form mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
