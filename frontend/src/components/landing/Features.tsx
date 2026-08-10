"use client";

import { motion } from "framer-motion";

import { Hand, Languages, Mic, Sparkles } from "lucide-react";

const features = [
  {
    number: "01",
    title: "AI Gesture Recognition",
    desc: "Advanced computer vision understands hand movements instantly.",
    icon: Hand,
  },

  {
    number: "02",
    title: "Real-Time Translation",
    desc: "Convert sign language into natural communication.",
    icon: Languages,
  },

  {
    number: "03",
    title: "Voice Intelligence",
    desc: "Generate smooth voice output from gestures.",
    icon: Mic,
  },

  {
    number: "04",
    title: "AI Learning Assistant",
    desc: "Practice and improve communication with AI.",
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section
      id="features"

      className="

relative

px-6

pb-32

overflow-hidden

bg-[#f5f1e9]

"
    >
      {/* SECTION MERGE LIGHT */}

      <div
        className="

absolute

-top-40

left-0

w-full

h-72

bg-gradient-to-b

from-transparent

via-white/40

to-transparent

blur-3xl

pointer-events-none

"
      />

      {/* MOVING GLASS AURA */}

      <motion.div
        animate={{
          x: [-50, 50, -50],

          y: [0, 40, 0],
        }}

        transition={{
          duration: 14,

          repeat: Infinity,
        }}

        className="

absolute

top-20

left-20

w-[450px]

h-[450px]

rounded-full

bg-white/60

blur-[130px]

"
      />

      <div
        className="

relative

z-10

max-w-7xl

mx-auto

pt-20

"
      >
        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.8,
          }}
        >
          <div
            className="

inline-flex

px-5

py-2

rounded-full

bg-white/50

border

border-white/80

backdrop-blur-xl

text-sm

text-black/60

shadow-sm

"
          >
            Powerful AI Features
          </div>

          <h2
            className="

mt-8

text-6xl

lg:text-7xl

font-semibold

leading-[1]

tracking-tight

text-black

"
          >
            Technology That Understands
            <br />
            <span
              className="

text-black/40

"
            >
              Human Communication
            </span>
          </h2>

          <p
            className="

mt-6

max-w-xl

text-lg

leading-relaxed

text-black/60

"
          >
            CampusSign AI combines computer vision, language processing and
            voice intelligence to create effortless communication.
          </p>
        </motion.div>

        {/* FEATURE GRID */}

        <div
          className="

grid

md:grid-cols-2

gap-8

mt-20

"
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: index * 0.15,
                }}

                whileHover={{
                  y: -8,
                }}

                className="

relative

overflow-hidden

rounded-[35px]

p-8


bg-white/45

border

border-white/80


backdrop-blur-2xl


shadow-[0_25px_80px_rgba(0,0,0,.08)]


transition-all

duration-500


group

"
              >
                {/* GLASS REFLECTION */}

                <div
                  className="

absolute

inset-0

bg-gradient-to-br

from-white/70

via-transparent

to-transparent

opacity-0

group-hover:opacity-100

transition

duration-500

"
                />

                <div
                  className="

relative

z-10

"
                >
                  <div
                    className="

flex

justify-between

items-center

"
                  >
                    <div
                      className="

w-14

h-14

rounded-2xl

bg-black

text-white

flex

items-center

justify-center


group-hover:rotate-6

transition

duration-500

"
                    >
                      <Icon size={24} />
                    </div>

                    <span
                      className="

text-black/30

font-medium

"
                    >
                      {item.number}
                    </span>
                  </div>

                  <h3
                    className="

mt-8

text-2xl

font-semibold

"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="

mt-4

text-black/60

leading-relaxed

"
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
