"use client";

import { motion } from "framer-motion";
import { Sparkles, Languages, Mic } from "lucide-react";

import Card from "@/components/ui/Card";

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

gap-16

items-center

"
      >
        {/* LEFT CONTENT */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}
        >
          {/* Badge */}

          <div
            className="
inline-flex
items-center
gap-2

px-5
py-2

rounded-full

bg-white/40

border
border-white/70

backdrop-blur-xl

text-sm

text-black/70

mb-8

"
          >
            <Sparkles size={16} />
            AI Powered Sign Language Platform
          </div>

          {/* Heading */}

          <h1
            className="

text-7xl

lg:text-8xl

font-semibold

tracking-tight

leading-[1]

text-black

"
          >
            CampusSign
            <br />
            <span
              className="
text-black/50

"
            >
              AI
            </span>
          </h1>

          {/* Description */}

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

          {/* Feature Pills */}

          <div
            className="

flex

flex-wrap

gap-4

mt-10

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

text-sm

text-black/70

"
            >
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

text-sm

text-black/70

"
            >
              AI Gesture Recognition
            </div>
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
            duration: 1,
          }}

          className="
relative

"
        >
          {/* Translation Floating Card */}

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
                <Languages size={20} />

                <span
                  className="
text-sm
font-medium

"
                >
                  Translation
                </span>
              </div>
            </Card>
          </motion.div>

          {/* Voice Output Floating Card */}

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
                <Mic size={20} />

                <span
                  className="
text-sm
font-medium

"
                >
                  Voice Output
                </span>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
