"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function IntroScreen() {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}

      animate={{
        opacity: 0,
        pointerEvents: "none",
      }}

      transition={{
        duration: 0.2,

        delay: 4,

        ease: [0.22, 1, 0.36, 1],
      }}

      className="
      fixed
      inset-0
      z-[100]

      flex
      items-center
      justify-center

      bg-[#f5f1e9]

      overflow-hidden
      "
    >
      {/* BACKGROUND GLASS LIGHT */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],

          opacity: [0.4, 0.7, 0.4],
        }}

        transition={{
          duration: 3,

          repeat: Infinity,
        }}

        className="
        absolute

        w-[500px]
        h-[500px]

        rounded-full

        bg-white

        blur-[120px]

        "
      />

      {/* CENTER CONTENT */}

      <motion.div
        initial={{
          scale: 0.7,

          opacity: 0,

          filter: "blur(20px)",
        }}

        animate={{
          scale: [0.7, 1, 1, 0.25],

          opacity: [0, 1, 1, 0],

          filter: ["blur(20px)", "blur(0px)", "blur(0px)", "blur(30px)"],
        }}

        transition={{
          duration: 2.5,

          times: [0, 0.4, 1],

          ease: [0.22, 1, 0.36, 1],
        }}

        className="
        relative

        flex

        flex-col

        items-center

        justify-center

        "
      >
        {/* LOGO */}

        <motion.div
          animate={{
            rotate: [0, 360],
          }}

          transition={{
            duration: 8,

            repeat: Infinity,

            ease: "linear",
          }}

          className="
          w-20

          h-20

          rounded-[28px]

          bg-black

          text-white

          flex

          items-center

          justify-center

          shadow-2xl

          "
        >
          <Sparkles size={32} />
        </motion.div>

        <h1
          className="
          mt-8

          text-6xl

          font-semibold

          tracking-tight

          text-black

          "
        >
          CampusSign
          <span
            className="
            text-black/40
            "
          >
            AI
          </span>
        </h1>

        <p
          className="
          mt-4

          text-black/50

          text-lg

          "
        >
          AI Powered Sign Language Platform
        </p>
      </motion.div>

      {/* GLASS RING EFFECT */}

      <motion.div
        initial={{
          scale: 0,

          opacity: 0,
        }}

        animate={{
          scale: 2,

          opacity: [0, 0.4, 0],
        }}

        transition={{
          duration: 0.5,

          delay: 0.5,
        }}

        className="
        absolute

        w-40

        h-40

        rounded-full

        border

        border-black/20

        "
      />
    </motion.div>
  );
}
