import { AnimatePresence, motion } from "framer-motion";
import { useId, useRef, useState, useEffect } from "react";
import { useOutsideClick } from "./useOutsideClick";
import { useInView } from "framer-motion";

export default function ExpandableCardGrid({ cards }) {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useOutsideClick(ref, () => setActive(null));

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-50">
            <motion.div
              ref={ref}
              layoutId={`card-${active.title}-${id}`}
              className="
                max-w-md w-full
                rounded-3xl overflow-hidden
                bg-white/10 backdrop-blur-2xl
                border border-white/20 p-4
                shadow-[0_8px_32px_rgba(0,0,0,0.4)]
              "
            >
              <motion.img
                layoutId={`image-${active.title}-${id}`}
                src={active.src}
                className="h-[500px] rounded-2xl w-full object-cover"
              />

              <div className="p-4 text-white">
                <h3 className="font-semibold text-xl">{active.title}</h3>
                <p className="text-white/70">{active.description}</p>
                <div className="mt-4 text-sm text-white/60">{active.content}</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Grid Cards with Scroll Trigger */}
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => {
          const cardRef = useRef(null);
          const isCardInView = useInView(cardRef, { once: true, margin: "-50px" });

          return (
            <motion.li
              key={card.title}
              ref={cardRef}
              layoutId={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              initial={{ opacity: 0, y: 20 }}
              animate={isCardInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 18, delay: i * 0.1 }}
              className="
                cursor-pointer
                rounded-2xl p-4
                bg-white/10 backdrop-blur-xl
                shadow-[0_8px_24px_rgba(0,0,0,0.35)]
                hover:bg-white/15
                will-change-transform
              "
            >
              <motion.img
                layoutId={`image-${card.title}-${id}`}
                src={card.src}
                className="h-96 w-full rounded-xl object-cover"
              />

              <h3 className="mt-3 text-center font-semibold text-white">{card.title}</h3>
              <p className="text-center text-sm text-white/60">{card.description}</p>
            </motion.li>
          );
        })}
      </ul>
    </>
  );
}
