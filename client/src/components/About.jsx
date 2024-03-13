import React from "react";

const About = () => {
  return (
    <div className="about mt-12" id="about">
      <h1 className="text-5xl text-center mb-14">About Us</h1>
      <div className="grid-2 pb-14 sasfg">
        <div className="satan">
          <img
            src="/images/meditation.jpg"
            alt="Gustave Doré Depiction of Satan"
          />
        </div>

        <div className="mt-5 sasfg">
          <br />
          <p className="text-justify text-sm letter-space mb-2">
            Welcome to KreatUs, your premier destination for seamless skill
            learning and sharing. At KreatUs, we believe in the power of
            knowledge exchange and the transformative impact it can have on
            individuals and communities.
          </p>

          <p className="text-justify text-sm letter-space mb-2">
            Our platform serves as a dynamic online hub where users from all
            backgrounds can come together to explore, learn, and share a diverse
            range of skills. Driven by the mission to democratize learning, we
            prioritize accessibility, inclusivity, and collaboration. Whether
            you're a novice seeking to acquire new skills or an expert eager to
            share your knowledge, KreatUs offers the tools and resources to
            support your journey. What sets us apart is our vibrant community of
            learners and creators. With an emphasis on fostering meaningful
            connections and facilitating active engagement, we strive to
            cultivate an environment where everyone feels empowered to unlock
            their full potential.
          </p>
          <p className="text-justify text-sm letter-space">
            Join us on this journey of discovery, growth, and creativity.
            Together, let's build a brighter future through continuous learning
            and knowledge sharing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
