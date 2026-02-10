import React from "react";
import { Apl } from "../../data";
import GradientText from "../motion/GradientText";

const APLCards = () => {
  return (
    <div>
      {/* Title */}
      <div className="text-center">
        <GradientText
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          animationSpeed={8}
          showBorder={false}
          className="text-3xl md:text-6xl font-bold"
        >
          Registration <br /> Link
        </GradientText>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row py-20 justify-center items-center gap-16">
        {Apl.map((club, index) => (
          <div
            key={index}
            className="relative w-[320px] h-[420px] rounded-3xl overflow-hidden shadow-xl"
          >
            {/* Image */}
            <img
              src={club.image}
              alt={club.name}
              className="w-full h-full object-cover"
            />

            {/* Glass Bottom Panel */}
            <div className="absolute bottom-0 left-0 w-full h-[35%] bg-white/30 backdrop-blur-xl p-5 text-center">
              <h2 className="text-black text-xl font-semibold">
                {club.name}
              </h2>

              <a
                href={club.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block px-4 py-2 rounded-xl font-semibold text-black border hover:bg-green-500 border-black transition"
              >
                {club.button}
              </a>
              <div className="pt-2">
                {club.message}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default APLCards;
