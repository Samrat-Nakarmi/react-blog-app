import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import UseAuth from "../api/useAuth";

export default function Home() {
  UseAuth();
  return (
    <div>
      <Hero />
      <About />
      <Services />
    </div>
  );
}
