import React from "react";
import Hero_img from "../assets/Quickzy.png";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse rounded-lg max-w-[1380px] mx-auto md:flex-row items-center justify-between px-4 md:px-10 py-8 bg-gradient-to-r from-green-300  m-5 to-white">
      {/* Text Section */}
      <section className="w-full md:w-1/2 text-center md:text-left">
        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Fast delivery 🚀
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-4 px-2 sm:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            temporibus?
          </p>
          <button className="bg-purple-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-purple-700 transition duration-300">
            Shop Now
          </button>
        </div>
      </section>

      {/* Image Section */}
      <section className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={Hero_img}
          alt="Hero"
          className="w-4/5 sm:w-3/5 md:w-full max-w-[400px] object-contain"
        />
      </section>
    </div>
  );
};

export default Hero;
