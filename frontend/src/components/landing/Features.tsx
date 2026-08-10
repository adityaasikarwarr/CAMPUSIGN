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

py-32

px-6

overflow-hidden

bg-[#090d14]

text-white

"
    >
      {/* BACKGROUND AI GLOW */}

      <motion.div
        animate={{
          x: [-80, 80, -80],

          y: [0, 50, 0],
        }}

        transition={{
          duration: 14,

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

bg-white/10

blur-[140px]

"
      />

      <motion.div
        animate={{
          x: [60, -60, 60],

          y: [0, -40, 0],
        }}

        transition={{
          duration: 16,

          repeat: Infinity,

          ease: "easeInOut",
        }}

        className="

absolute

right-20

bottom-20

w-[400px]

h-[400px]

rounded-full

bg-white/10

blur-[140px]

"
      />

      <div
        className="

relative

z-10

max-w-7xl

mx-auto

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

          className="

max-w-3xl

"
        >
          <div
            className="

inline-flex

px-5

py-2

rounded-full

bg-white/10

border

border-white/20

backdrop-blur-xl

text-sm

text-white/70

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

"
          >
            Technology That Understands
            <br />
            <span
              className="

text-white/40

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

text-white/60

"
          >
            CampusSign AI combines computer vision, language processing and
            voice intelligence to create effortless communication.
          </p>
        </motion.div>

        {/* FEATURE CARDS */}

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

                  y: 50,
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

                  duration: 0.7,
                }}

                whileHover={{
                  y: -10,
                }}

                className="

relative

overflow-hidden

rounded-[35px]

p-8

bg-white/10

border

border-white/20

backdrop-blur-2xl

shadow-[0_30px_90px_rgba(0,0,0,.35)]

group

transition-all

duration-500

"
              >
                {/* GLASS REFLECTION */}

                <div
                  className="

absolute

inset-0

bg-gradient-to-br

from-white/20

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

bg-white

text-black

flex

items-center

justify-center

group-hover:scale-110

transition

duration-500

"
                    >
                      <Icon size={25} />
                    </div>

                    <span
                      className="

text-white/30

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

text-white/60

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
