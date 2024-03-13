import React from "react";

const Contact = () => {
  return (
    <div className="Contact" id="Contact">
      <h1 className="text-5xl text-center mb-14">Contact Us</h1>

      <div className="request-form text-black m-auto">
        <div>
          <form action="">
            <div className="request-items">
              <label htmlFor="name">First Name</label>

              <div>
                <input
                  placeholder="First Name"
                  type="text"
                  name=""
                  id=""
                  required
                />
              </div>
            </div>
            <div className="request-items">
              <label htmlFor="name">Last Name</label>

              <div>
                <input
                  placeholder="Last Name"
                  type="text"
                  name=""
                  id=""
                  required
                />
              </div>
            </div>

            <div className="request-items">
              <label htmlFor="name">How may we help you</label>
              <div>
                <input type="text" name="" id="" required />
              </div>
            </div>
            <div className="request-items">
              <label htmlFor="name">Become a member</label>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="payment option"
                  required
                />
              </div>
            </div>
            <div className="request-items">
              
            </div>
            <div className="request-items">
              <label htmlFor="name">Feedback</label>
              <div>
                <input type="text" name="" id="" required />
              </div>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
