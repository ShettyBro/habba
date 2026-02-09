"use client";
import React from "react";
import { HeroParallax } from "../motion/HeroParallax";
import { IMAGES } from "../../assets/Images";

export function HeroParallaxDemo() {
  return (
  <div>
    <HeroParallax products={products} />
  </div>
)}
export const products = [
  {
    thumbnail:
        IMAGES.GALLERY5,
  },
  {
    thumbnail:
        IMAGES.GALLERY2,
  },{
    thumbnail:
        IMAGES.GALLERY1,
  },{
    thumbnail:
        IMAGES.GALLERY6,
  },{
    thumbnail:
        IMAGES.GALLERY9,
  },
    {
      thumbnail:
          IMAGES.GALLERY10,
    },
    {
      thumbnail:
          IMAGES.GALLERY11,
    },{
      thumbnail:
          IMAGES.GALLERY12,
    },{
      thumbnail:
          IMAGES.GALLERY3,
    },
    {
      thumbnail:
          IMAGES.GALLERY4,
    },{
      thumbnail:
          IMAGES.GALLERY8,
    },{
      thumbnail:
          IMAGES.GALLERY7,
    },{
      thumbnail:
          IMAGES.GALLERY9,
    },
      {
        thumbnail:
            IMAGES.GALLERY10,
      },
      {
        thumbnail:
            IMAGES.GALLERY11,
      },{
        thumbnail:
            IMAGES.GALLERY12,
      },
  ];