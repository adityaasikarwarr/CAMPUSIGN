"use client";

import { motion } from "framer-motion";
import { Sparkles, Languages, Mic } from "lucide-react";

import Card from "@/components/ui/Card";
import RevealPanel from "./RevealPanel";

export default function Hero() {
  return (
    <section
      id="home"

      className="
min-h-screen
flex
items-center
justify-center

pt-32
px-6

overflow-hidden
"
    >
      <div
        className="
max-w-7xl
w-full

grid

lg:grid-cols-2

gap-20

items-center

"
      >
        {/* LEFT CONTENT */}

        <motion.div
          initial={{
            opacity: 0,

            x: -60,

            filter: "blur(20px)",
          }}

          animate={{
            opacity: 1,

            x: 0,

            filter: "blur(0px)",
          }}

          transition={{
            duration: 1,

            ease: [0.22, 1, 0.36, 1],
          }}

          className="
relative

"
        >
          {/* Soft background glass aura */}

          <div
            className="
absolute

-left-20

-top-20

w-72

h-72

rounded-full

bg-white/40

blur-3xl

"
          />

          <div
            className="
relative

"
          >
            {/* AI STATUS PILL */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 0.2,
              }}

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

text-black/70


shadow-sm

"
            >
              <span
                className="
w-2

h-2

rounded-full

bg-black

animate-pulse

"
              />
              AI Powered Sign Language Platform
            </motion.div>

            {/* MAIN TITLE */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 0.35,
              }}

              className="

mt-8

text-7xl

lg:text-8xl


font-semibold


tracking-tight


leading-[0.95]


text-black

"
            >
              CampusSign
              <br />
              <span
                className="
bg-gradient-to-r

from-black

via-black/60

to-black/30


bg-clip-text

text-transparent

"
              >
                
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              transition={{
                delay: 0.5,
              }}

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
            </motion.p>

            {/* FEATURE CAPSULES */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 0.7,
              }}

              className="

flex

flex-wrap

gap-4

mt-10

"
            >
              <div
                className="
group

flex

items-center

gap-2

px-5

py-3


rounded-full


bg-white/45


border

border-white/70


backdrop-blur-xl


text-sm


text-black/70


transition-all

duration-300


hover:-translate-y-1


"
              >
                <Languages size={16} />
                Real-Time Translation
              </div>

              <div
                className="
group

flex

items-center

gap-2

px-5

py-3


rounded-full


bg-white/45


border

border-white/70


backdrop-blur-xl


text-sm


text-black/70


transition-all

duration-300


hover:-translate-y-1


"
              >
                <Sparkles size={16} />
                AI Gesture Recognition
              </div>
            </motion.div>

            {/* SMALL TRUST LINE */}

            <motion.div
              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              transition={{
                delay: 1,
              }}

              className="

mt-12

flex

items-center

gap-3

text-sm

text-black/40

"
            >
              <Mic size={16} />
              Voice + Gesture + AI Translation
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}

        <motion.div
          initial={{
            opacity: 0,

            scale: 0.9,
          }}

          animate={{
            opacity: 1,

            scale: 1,
          }}

          transition={{
            duration: 1.2,
          }}

          className="
relative

"
        >
          <RevealPanel />

          {/* Translation floating card */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}

            transition={{
              duration: 4,

              repeat: Infinity,
            }}

            className="
absolute

-top-8

-left-8

"
          >
            <Card
              className="
px-5

py-4

"
            >
              <div
                className="
flex

items-center

gap-3

"
              >
                <Languages size={18} />

                <span className="text-sm font-medium">Translation</span>
              </div>
            </Card>
          </motion.div>

          {/* Voice card */}

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}

            transition={{
              duration: 5,

              repeat: Infinity,
            }}

            className="
absolute

-bottom-8

-right-8

"
          >
            <Card
              className="
px-5

py-4

"
            >
              <div
                className="
flex

items-center

gap-3

"
              >
                <Mic size={18} />

                <span className="text-sm font-medium">Voice Output</span>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
