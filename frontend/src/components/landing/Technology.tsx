"use client";

import { motion } from "framer-motion";

import { Eye, Brain, Volume2, Cpu } from "lucide-react";

const technologies = [
  {
    title: "Computer Vision",
    desc: "Advanced vision models detect and understand sign gestures in real time.",
    icon: Eye,
  },

  {
    title: "Language Intelligence",
    desc: "AI converts gestures into meaningful human language.",
    icon: Brain,
  },

  {
    title: "Voice AI",
    desc: "Natural voice synthesis enables effortless communication.",
    icon: Volume2,
  },
];

export default function Technology() {
  return (
    <section
      id="technology"

      className="

relative

py-32

px-6

overflow-hidden

bg-[#090d14]

text-white

"
    >
      {/* BACKGROUND GLOW */}

      <motion.div
        animate={{
          x: [-80, 80, -80],

          y: [0, 40, 0],
        }}

        transition={{
          duration: 15,

          repeat: Infinity,
        }}

        className="

absolute

top-20

left-10

w-[500px]

h-[500px]

rounded-full

bg-white/10

blur-[150px]

"
      />

      <motion.div
        animate={{
          x: [80, -80, 80],

          y: [0, -50, 0],
        }}

        transition={{
          duration: 18,

          repeat: Infinity,
        }}

        className="

absolute

right-10

bottom-10

w-[450px]

h-[450px]

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

          viewport={{ once: true }}

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
            AI Technology
          </div>

          <h2
            className="

mt-8

text-6xl

lg:text-7xl

font-semibold

tracking-tight

leading-[1]

"
          >
            The Intelligence
            <br />
            <span className="text-white/40">Behind CampusSign</span>
          </h2>

          <p
            className="

mt-6

max-w-xl

text-lg

text-white/60

leading-relaxed

"
          >
            Powered by computer vision, artificial intelligence and voice
            technology to create seamless communication.
          </p>
        </motion.div>

        {/* AI CORE */}

        <motion.div
          initial={{
            opacity: 0,

            scale: 0.9,
          }}

          whileInView={{
            opacity: 1,

            scale: 1,
          }}

          viewport={{ once: true }}

          transition={{
            duration: 1,
          }}

          className="

mt-20

max-w-4xl

mx-auto

"
        >
          <div
            className="

relative

rounded-[50px]

p-12

bg-white/10

border

border-white/20

backdrop-blur-3xl

shadow-[0_40px_120px_rgba(0,0,0,.5)]

overflow-hidden

"
          >
            {/* MOVING LIGHT */}

            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}

              transition={{
                duration: 6,

                repeat: Infinity,
              }}

              className="

absolute

inset-0

bg-gradient-to-r

from-transparent

via-white/20

to-transparent

"
            />

            <div
              className="

relative

z-10

flex

flex-col

items-center

text-center

"
            >
              <div
                className="

w-24

h-24

rounded-full

bg-white

text-black

flex

items-center

justify-center

"
              >
                <Cpu size={42} />
              </div>

              <h3
                className="

mt-8

text-3xl

font-semibold

"
              >
                CampusSign AI Engine
              </h3>

              <p
                className="

mt-4

max-w-lg

text-white/60

"
              >
                Real-time AI pipeline connecting gesture recognition,
                translation and voice output.
              </p>
            </div>
          </div>
        </motion.div>

        {/* TECHNOLOGY CARDS */}

        <div
          className="

grid

md:grid-cols-3

gap-8

mt-16

"
        >
          {technologies.map((item, index) => {
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

                viewport={{ once: true }}

                transition={{
                  delay: index * 0.15,
                }}

                whileHover={{
                  y: -10,
                }}

                className="

rounded-[35px]

p-8

bg-white/10

border

border-white/20

backdrop-blur-2xl

transition-all

duration-500

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

"
                >
                  <Icon />
                </div>

                <h3
                  className="

mt-8

text-xl

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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
