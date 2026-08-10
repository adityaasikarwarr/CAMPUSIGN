"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { Camera, Hand, Languages, Volume2 } from "lucide-react";

const panels = [
  {
    title: "AI Gesture Recognition",
    description: "Real-time sign language detection",
    icon: Hand,
  },

  {
    title: "Instant Translation",
    description: "Convert gestures into meaningful text",
    icon: Languages,
  },

  {
    title: "Voice Output",
    description: "Generate natural voice communication",
    icon: Volume2,
  },

  {
    title: "AI Vision Processing",
    description: "Advanced camera based gesture analysis",
    icon: Camera,
  },
];

export default function RevealPanel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % panels.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const ActiveIcon = panels[active].icon;

  return (
    <div
      className="

relative

h-[520px]

w-full

flex

items-center

justify-center

overflow-hidden

"
    >
      {/* BACK GLASS PANEL 1 */}

      <motion.div
        animate={{
          rotate: [-8, -12, -8],

          scale: [1, 1.03, 1],
        }}

        transition={{
          duration: 6,

          repeat: Infinity,
        }}

        className="

absolute

w-[80%]

h-[75%]


rounded-[40px]


bg-white/20


border

border-white/60


backdrop-blur-xl


shadow-xl

"
      />

      {/* BACK GLASS PANEL 2 */}

      <motion.div
        animate={{
          rotate: [8, 12, 8],

          scale: [1, 0.98, 1],
        }}

        transition={{
          duration: 5,

          repeat: Infinity,
        }}

        className="

absolute

w-[85%]

h-[80%]


rounded-[40px]


bg-white/30


border

border-white/50


backdrop-blur-xl


shadow-xl

"
      />

      {/* MAIN CHANGING PANEL */}

      <AnimatePresence mode="popLayout">
        <motion.div
          key={active}

          initial={{
            opacity: 0,

            x: 120,

            scale: 0.96,

            filter: "blur(18px)",
          }}

          animate={{
            opacity: 1,

            x: 0,

            scale: 1,

            filter: "blur(0px)",
          }}

          exit={{
            opacity: 0,

            x: -120,

            scale: 0.96,

            filter: "blur(18px)",
          }}

          transition={{
            duration: 0.9,

            ease: [0.22, 1, 0.36, 1],
          }}

          className="

relative

z-10


w-[86%]

h-[82%]


rounded-[45px]


bg-white/50


border

border-white/80


backdrop-blur-3xl


shadow-[0_40px_100px_rgba(0,0,0,0.15)]


overflow-hidden


transform-gpu


"
        >
          {/* GLASS SHINE */}

          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}

            transition={{
              duration: 2.5,

              repeat: Infinity,

              repeatDelay: 4,
            }}

            className="

absolute

inset-0


bg-gradient-to-r


from-transparent


via-white/40


to-transparent


pointer-events-none


"
          />

          {/* CONTENT */}

          <div
            className="

relative

z-20


h-full


flex

items-center

justify-center


text-center


"
          >
            <div>
              <div
                className="

mx-auto


w-24

h-24


rounded-full


bg-black


text-white


flex

items-center

justify-center


"
              >
                <ActiveIcon size={40} />
              </div>

              <h3
                className="

mt-8


text-2xl


font-semibold


text-black


"
              >
                {panels[active].title}
              </h3>

              <p
                className="

mt-3


text-black/60


"
              >
                {panels[active].description}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
