import React from "react";

const Services = () => {
  return (
    <div className="services" id="service">
      <h1 className="text-5xl text-center mb-14">Services</h1>
      <div className="grid-2 pb-14 sasfg">
        <div className="mt-5">
          <br />
          <p className="text-justify text-sm letter-space mb-4">
            At KreatUS, we offer a diverse array of services designed to
            facilitate seamless skill learning and sharing. Our platform
            provides access to an extensive library of tutorials and courses
            covering various skills, from creative arts to professional
            development.
          </p>
          <p className="text-justify text-sm letter-space">
            Users can also unleash their creativity and expertise by creating
            and sharing engaging content such as blogs, videos, and tutorials.
            Engage with like-minded individuals through our community forums and
            networking events, fostering collaboration and knowledge exchange.
            With personalized learning features, flexible subscription plans,
            and dedicated support, KreatUs is committed to providing a dynamic
            and enriching experience for all users. Join us today and embark on
            a journey of continuous learning and growth.
          </p>
        </div>
        <div className="satan">
          <img src="/images/kofe.jpg" style={{ height: "400px" }} />
        </div>
      </div>
      <div className="service-image">
        <div className="grid-2 pb-14 sasfg">
          <div className="abb">
            <img src="/images/cakemaking.jpg" />
          </div>
          <div className="abb">
            <img src="/images/crocheting.jpg" />
          </div>
        </div>
      </div>
      <div className="grid-2 pb-14 sasfg">
        <div className="satan">
          <img
            src="/images/journaling.jpg"
            alt="Gustave Doré Depiction of Satan"
            style={{ height: "400px" }}
          />
        </div>

        <div className="mt-5 sasfg">
          <br />
          <p className="text-justify text-sm letter-space">
            <p>
              In addition to offering a wealth of learning materials and content
              creation opportunities, KreatUs fosters meaningful connections and
              collaboration among users. Through our community forums,
              discussion boards, and networking events, individuals can engage
              with like-minded peers, exchange ideas, and forge valuable
              connections that extend beyond the digital realm. At the heart of
              our services is a commitment to personalized learning and user
              satisfaction. Our platform is equipped with features that allow
              users to tailor their learning experiences to their unique
              preferences and goals. From personalized recommendations and
              progress tracking to flexible subscription plans and dedicated
              support, we strive to ensure that every user receives the guidance
              and assistance they need to thrive. In essence, KreatUs is more
              than just a website—it's a dynamic and inclusive platform where
              individuals come together to learn, create, and connect. Join us
              today and embark on a journey of discovery, growth, and endless
              possibilities.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
