"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  /* ✅ SCROLL-FRIENDLY SPRING */
  const springConfig = {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.15], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 100]), springConfig);
 

  return (
    <div
      ref={ref}
      className="h-[190vh] xl:h-[230vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto"
    >
      <Header />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-10">
          {firstRow.map((product,idx) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title||idx}
            />
          ))}
        </motion.div>

        <motion.div className="flex flex-row mb-10 space-x-10">
          {secondRow.map((product,idx) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title||idx}
            />
          ))}
        </motion.div>

        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10">
          {thirdRow.map((product,idx) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title||idx}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-[80px] sm:text-[160px] text-center lg:text-[170px] font-bold dark:text-white">
        WHAT WE FEEL
      </h1>
      <p className="max-w-5xl mb-8 text-center px-4  mx-auto w-full z-40">More than excitement, it’s a sense of belonging, pride, and shared dreams. Friendships grow stronger, confidence finds its voice, and every cheer from the crowd becomes part of a story that lasts forever. This is not just a celebration — it’s emotion.</p>
      
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -8 }}
      className="group/product h-60 w-[400px] overflow-hidden relative shrink-0 will-change-transform"
    >
      <a href={product.link} className="block">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover rounded-2xl object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
    </motion.div>
  );
};
