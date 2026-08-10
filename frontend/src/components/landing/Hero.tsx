"use client";

import { motion } from "framer-motion";
import { Mic, Languages, Sparkles } from "lucide-react";

import Card from "@/components/ui/Card";
import RevealPanel from "./RevealPanel";

export default function Hero() {
  return (
    <section
      id="home"

      className="

relative

min-h-screen

flex

items-center

justify-center

pt-32

px-6

overflow-hidden

"
    >
      {/* BACKGROUND MOVING LIGHTS */}

      <motion.div
        animate={{
          x: [0, 80, 0],

          y: [0, -40, 0],
        }}

        transition={{
          duration: 12,

          repeat: Infinity,

          ease: "easeInOut",
        }}

        className="

absolute

top-20

left-20

w-[500px]

h-[500px]

rounded-full

bg-white/50

blur-[120px]

"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],

          y: [0, 50, 0],
        }}

        transition={{
          duration: 14,

          repeat: Infinity,

          ease: "easeInOut",
        }}

        className="

absolute

right-20

bottom-20

w-[450px]

h-[450px]

rounded-full

bg-white/40

blur-[120px]

"
      />

      <div
        className="

relative

z-10

max-w-7xl

w-full

grid

lg:grid-cols-2

gap-20

items-center

"
      >
        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,

            x: -80,
          }}

          whileInView={{
            opacity: 1,

            x: 0,
          }}

          viewport={{ once: true }}

          transition={{
            duration: 1,

            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            className="

inline-flex

items-center

gap-3

px-5

py-2.5

rounded-full

bg-white/50

border

border-white/70

backdrop-blur-xl

text-sm

text-black/60

"
          >
            <span
              className="

w-2

h-2

bg-black

rounded-full

animate-pulse

"
            />
            AI Powered Sign Language Platform
          </div>

          <h1
            className="

mt-8

text-7xl

lg:text-8xl

font-semibold

tracking-tight

leading-[.95]

text-black

"
          >
            CampusSign
            <br />
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

mt-8

max-w-xl

text-lg

leading-relaxed

text-black/60

"
          >
            Connecting students and teachers through intelligent sign language
            communication powered by artificial intelligence.
          </p>

          <div
            className="

flex

gap-4

mt-10

flex-wrap

"
          >
            <div
              className="

px-5

py-3

rounded-full

bg-white/40

border

border-white/70

backdrop-blur-xl

flex

items-center

gap-2

text-sm

"
            >
              <Languages size={16} />
              Real-Time Translation
            </div>

            <div
              className="

px-5

py-3

rounded-full

bg-white/40

border

border-white/70

backdrop-blur-xl

flex

items-center

gap-2

text-sm

"
            >
              <Sparkles size={16} />
              AI Gesture Recognition
            </div>
          </div>

          <div
            className="

mt-12

flex

gap-3

items-center

text-black/40

text-sm

"
          >
            <Mic size={16} />
            Voice + Gesture + AI Translation
          </div>
        </motion.div>

        {/* RIGHT PANEL */}

        <motion.div
          initial={{
            opacity: 0,

            scale: 0.85,
          }}

          whileInView={{
            opacity: 1,

            scale: 1,
          }}

          viewport={{ once: true }}

          transition={{
            duration: 1.2,
          }}

          className="relative"
        >
          <RevealPanel />

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}

            transition={{
              duration: 4,

              repeat: Infinity,
            }}

            className="absolute -top-8 -left-8"
          >
            <Card className="px-5 py-4">
              <div className="flex gap-3 items-center">
                <Languages size={18} />
                Translation
              </div>
            </Card>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 15, 0],
            }}

            transition={{
              duration: 5,

              repeat: Infinity,
            }}

            className="absolute -bottom-8 -right-8"
          >
            <Card className="px-5 py-4">
              <div className="flex gap-3 items-center">
                <Mic size={18} />
                Voice Output
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* SMOOTH SECTION MERGE */}

     <motion.div

animate={{
  opacity:[0.5,0.9,0.5],
  scale:[1,1.08,1]
}}

transition={{
 duration:8,
 repeat:Infinity
}}

className="
absolute
-bottom-32
left-1/2
-translate-x-1/2

w-[900px]
h-[300px]

rounded-full

bg-white/70

blur-[120px]

pointer-events-none

"

/>
    </section>
  );
}
