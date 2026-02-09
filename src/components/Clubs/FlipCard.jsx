import { useState, useEffect } from "react";

export default function GlassImageCard({ club }) {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="relative w-[340px] h-[430px] perspective cursor-pointer"
      onMouseEnter={() => !isMobile && setFlipped(true)}
      onMouseLeave={() => !isMobile && setFlipped(false)}
      onClick={() => isMobile && setFlipped(!flipped)}
    >
      {/* Glass Border Glow */}
      <div className="
        absolute inset-0 rounded-3xl
        border-white/20
       
        
        pointer-events-none
      " />

      <div
        className={`relative w-full h-full transition-transform duration-700 
        transform-style-preserve-3d ${flipped ? "rotate-y-180" : ""}`}
      >
        {/* FRONT */}
        <div className="
          absolute inset-0 backface-hidden
          rounded-3xl overflow-hidden
          shadow-xl
          
        ">
          <img
            src={club.image}
            alt={club.name}
            className="absolute backdrop-blur-lg inset-0 w-full h-full object-cover rounded-3xl"
          />

          {/* Bottom Glass Panel */}
          <div className="
            absolute bottom-0 left-0 w-full
            bg-white/30 backdrop-blur-lg
            p-4
            flex flex-col justify-center items-center
          ">
            <span className="text-black text-xl font-semibold">{club.name}</span>
            {isMobile && (
    <p className="text-xs text-black/60 text-center mt-2">
    Tap to see the event
    </p>
  )}
          </div>
        </div>

        {/* BACK */}
        <div className="
          absolute inset-0 backface-hidden rotate-y-180
          rounded-3xl
          bg-black/5 backdrop-blur-2xl
    
         
          p-6 flex flex-col
        ">
          {/* Blurred Background Image */}
          <img
            src={club.image}
            alt={club.name}
            className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-30"
          />

          {/* Content on top */}
          <div className="absolute inset-0 z-10 flex flex-col flex-1 p-6
                bg-black/40 backdrop-blur-lg rounded-3xl">
  {/* Club Name */}
  <h2 className="text-[#39ff14] text-center text-2xl font-semibold mb-5">
    {club.name}
  </h2>

  {/* Neon Glass Divider */}
  <div className="w-full h-[2px] bg-[#39ff14]/40 mb-6 rounded-full shadow-[0_0_6px_rgba(57,255,20,0.7)]"></div>

  {/* Events */}
  <p className="text-white text-xl mb-3 text-center">Events</p>

  <ul className="list-disc pl-5 space-y-1 text-white flex-1">
    {club.events.map((event, i) => (
      <li key={i}>{event}</li>
    ))}
  </ul>

  {/* Register Button */}
  <a
    href={club.registrationLink}
    target="_blank"
    rel="noopener noreferrer"
    className="
      mt-4 py-3 text-center absolute bottom-6 left-6 right-6 rounded-xl font-semibold
      text-white border border-white/30
      hover:bg-green-500
      transition
      tracking-wide
    "
    onClick={(e) => e.stopPropagation()}
  >
    Register Now
  </a>

  
</div>


        </div>
      </div>
    </div>
  );
}
