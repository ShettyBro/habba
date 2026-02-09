"use client";

import { PlaceholdersAndVanishInput } from "../motion/input";

export function Input() {
  const placeholders = [
    "What is HABBA and why does it matter?",

"What experiences does HABBA unlock this year?",

"Who is HABBA built for?",

"How can HABBA help you grow or explore?",

"What makes HABBA different from everything else?"
  ];


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2
        className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Ask SIMBA
      </h2>
      <PlaceholdersAndVanishInput placeholders={placeholders} onSubmit={onSubmit} />
    </div>
  );
}
