import React from "react";
import { WobbleCard } from "./WobbleCard";
import CountUp from "../motion/Countup";


export function HubbaWobbleCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 sm:px-8 py-16">

      {/* 50+ Events */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 glass-card p-6 flex items-center"
      >
        <h2 className="text-3xl lg:text-5xl font-semibold text-white">
          <CountUp
  from={0}
  to={50}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>
           +<br />
          <p className="text-lg lg:text-xl mt-3">Exciting Events</p>
        </h2>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 glass-card p-6 flex items-center"
      >
        <h2 className="text-2xl lg:text-5xl font-semibold text-white">
          <CountUp
  from={0}
  to={25000}
  separator=","
  direction="up"
  duration={0.2}
  className="count-up-text"
/>
           +<br />
          <p className="text-xl mt-3">Crowd</p>
        </h2>
      </WobbleCard>

      

      {/* Gaming, Tech & Cultural */}
      <WobbleCard
        containerClassName="col-span-2 lg:col-span-4 glass-card p-8 flex items-center justify-center"
      >
        <h2 className="text-lg lg:text-2xl font-bold text-white text-center">
          🎮 Gaming, Tech & Cultural
        </h2>
      </WobbleCard>
      {/* Inter-College Fest */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 glass-card p-6 flex items-center"
      >
        <h2 className="text-3xl lg:text-5xl font-semibold text-white">
          <CountUp
  from={0}
  to={300}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>
           +<br />
          <p className="text-lg lg:text-xl mt-3">colleges</p>
        </h2>
      </WobbleCard>

      {/* Exciting Prizes */}
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 glass-card p-8 flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-lg lg:text-2xl font-bold text-white">
            🏆 Exciting Prizes
          </h2>
        </div>
      </WobbleCard>

      {/* Dream-Themed Experience */}
      <WobbleCard
        containerClassName="col-span-2 lg:col-span-4 glass-card p-8 flex items-center justify-center"
      >
        <h2 className="text-lg lg:text-2xl font-bold text-white text-center">
          🌌 Dream-Themed Experience
        </h2>
      </WobbleCard>

      {/* Add custom glass + neon styles */}
      <style>{`
        .glass-card {
  background: rgba(255, 255, 255, 0.05); /* semi-transparent */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2); /* light border for glass */
  border-radius: 1rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2); /* soft shadow */
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 40px rgba(57, 255, 20, 0.4),
              0 8px 60px rgba(255, 57, 255, 0.3); /* neon glow on hover */
}

      `}</style>
    </div>
  );
}
