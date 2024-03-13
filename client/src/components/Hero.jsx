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
        <a href="#" className="btn">
          <b>WATCH VLOG</b>
        </a>
        <a href="https://www.instagram.com//" className="btn">
          <b>INSTAGRAM</b>
        </a>

        <div className="pt-4 m-auto">
          <select placeholder="country" id="country" name="country">
            <option value="australia">Australia</option>
            <option value="brazil">Brazil</option>
            <option value="canada">Canada</option>
            <option value="denmark">Denmark</option>
            <option value="ethiopia">Ethiopia</option>
            <option value="france">France</option>
            <option value="germany">Germanys</option>
            <option value="hungary">Hungary</option>
            <option value="italy">Italy</option>
            <option value="jamaica">Jamaica</option>
            <option value="krgystan">Krgystan</option>
            <option value="Laos">Laos</option>
            <option value="myanmar">Myanmar</option>
            <option value="nepal">Nepal</option>
            <option value="oman">Oman</option>
            <option value="portugal">Portugal</option>
            <option value="quatar">Quatar</option>
            <option value="russia">Russia</option>
            <option value="south korea">South Korea</option>
            <option value="thailand">Thailand</option>
            <option value="usa">USA</option>
            <option value="vietnam">Vietnam</option>
            <option value="western sahara">Western Sahara</option>
            <option value="yemen">Yemen</option>
            <option value="zimbabwe">Zimbabwe</option>
          </select>
        </div>
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
