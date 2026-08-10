"use client";

import { motion } from "framer-motion";
import { Eye, Brain, Cpu, Mic, Sparkles } from "lucide-react";

const technologies = [
  {
    title: "Computer Vision",
    desc: "Advanced AI vision models detect and understand hand gestures in real time.",
    icon: Eye,
  },

  {
    title: "AI Intelligence",
    desc: "Deep learning models analyze gestures and understand communication context.",
    icon: Brain,
  },

  {
    title: "Gesture Processing",
    desc: "Complex hand movements are converted into meaningful language patterns.",
    icon: Cpu,
  },

  {
    title: "Voice Intelligence",
    desc: "AI generates smooth and natural voice communication instantly.",
    icon: Mic,
  },
];

export default function Technology() {
  return (
    <section
      id="technology"

      className="
relative

px-6
py-32

overflow-hidden

bg-black

text-white

"
    >
      {/* Smooth Cream To Black Transition */}

      <div
        className="
absolute

-top-40

left-0

w-full

h-72

bg-gradient-to-b

from-[#f5f1e9]

via-black/40

to-black

blur-3xl

pointer-events-none

"
      />

      {/* Moving White Glass Glow */}

      <motion.div
        animate={{
          x: [-60, 60, -60],

          y: [0, 40, 0],

          scale: [1, 1.1, 1],
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

blur-[150px]

"
      />

      <motion.div
        animate={{
          x: [60, -60, 60],

          y: [0, -30, 0],
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

items-center

gap-2

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
            <Sparkles size={15} />
            Our Technology
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
            Powered By
            <span
              className="
text-white/40

"
            >
              Artificial Intelligence
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
            CampusSign AI combines computer vision, machine learning and voice
            intelligence to create accessible communication.
          </p>
        </motion.div>

        {/* TECHNOLOGY CARDS */}

        <div
          className="
mt-20

grid

md:grid-cols-2

gap-8

"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.title}

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
                  duration: 0.7,

                  delay: index * 0.15,
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



backdrop-blur-3xl



shadow-[0_30px_100px_rgba(255,255,255,.08)]


group

"
              >
                {/* Glass Shine */}

                <div
                  className="
absolute

inset-0


bg-gradient-to-br

from-white/20

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

transition-all

duration-500


group-hover:rotate-6

"
                    >
                      <Icon size={25} />
                    </div>

                    <span
                      className="
text-white/30

font-semibold

"
                    >
                      AI
                    </span>
                  </div>

                  <h3
                    className="
mt-8

text-2xl

font-semibold

"
                  >
                    {tech.title}
                  </h3>

                  <p
                    className="
mt-4

text-white/60

leading-relaxed

"
                  >
                    {tech.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI SYSTEM CAPSULE */}

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}

          transition={{
            duration: 5,

            repeat: Infinity,
          }}

          className="
mt-16

mx-auto

max-w-xl


px-8

py-5



rounded-full



bg-white/10


border

border-white/20



backdrop-blur-xl



text-center



text-white/70

"
        >
          Computer Vision + AI + Voice = Accessible Communication
        </motion.div>
      </div>
    </section>
  );
}
