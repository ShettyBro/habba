import React from "react";
import { Apl } from "../../data";
import GradientText from "../motion/GradientText";
import { useNavigate } from "react-router-dom";

const APLCards = () => {
  const navigate = useNavigate();

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
            className="relative w-[320px] h-[420px] border border-white/10 rounded-3xl overflow-hidden shadow-xl"
          >
            {/* Image */}
            <img
              src={club.image}
              alt={club.name}
              className="w-full h-full object-cover"
            />

            {/* Glass Bottom Panel */}
            <div className="absolute bottom-0 left-0 w-full h-[35%] bg-black/30 backdrop-blur-xl p-3 text-center">
              <h2 className="text-white text-2xl font-semibold">
                {club.name}
              </h2>

              {/* ✅ Smart Button */}
              <button
                onClick={() => {
                  if (club.route) {
                    navigate(club.route); // internal navigation
                  } else {
                    window.open(club.registrationLink, "_blank"); // external link
                  }
                }}
                className="mt-3 px-4 py-2 rounded-xl font-semibold text-white border hover:bg-green-500 border-white/50 transition"
              >
                {club.button}
              </button>

              <div className="pt-3 text-red-500">
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