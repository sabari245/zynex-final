import React from "react";
import HeroAnimated from "./HeroAnimated";

const HeroSection = () => {
  return (
    <div className="bg-neutral-900 pb-8">
      <div className="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-16 text-center">
        <h1 className="font-semibold text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
          Discover the Smart Way to Build a
          <span className="text-[#ff0]"> Custom Ecommerce Store.</span>
        </h1>
        <div className="max-w-3xl mx-auto mt-6">
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed">
            Your brand is special, not just another template. Imagine designing
            your perfect online Ecommerce Store the Sckyrocket your sales.
            You're in charge, and it costs way less in the long run.
          </p>
        </div>
        <HeroAnimated />
      </div>
    </div>
  );
};

export default HeroSection;