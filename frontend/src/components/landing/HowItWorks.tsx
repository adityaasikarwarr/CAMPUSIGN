"use client";

import { motion } from "framer-motion";
import { Camera, Brain, Languages, Volume2, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Capture Gesture",
    desc: "Camera vision detects hand movements and sign language patterns in real time.",
    icon: Camera,
  },

  {
    number: "02",
    title: "AI Understanding",
    desc: "Advanced AI models analyze gestures and understand the user's intent.",
    icon: Brain,
  },

  {
    number: "03",
    title: "Instant Translation",
    desc: "The system converts gestures into meaningful text communication.",
    icon: Languages,
  },

  {
    number: "04",
    title: "Voice Generation",
    desc: "Translated messages are converted into natural voice output.",
    icon: Volume2,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"

      className="
relative

px-6

py-32

overflow-hidden

bg-[#f5f1e9]

"
    >
      {/* Smooth section merge */}

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

"
      />

      {/* Moving glow */}

      <motion.div
        animate={{
          x: [-50, 50, -50],

          y: [0, 40, 0],
        }}

        transition={{
          duration: 15,

          repeat: Infinity,
        }}

        className="
absolute

top-20

right-20

w-[450px]

h-[450px]

rounded-full

bg-white/70

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

bg-white/50

border

border-white/80

backdrop-blur-xl

text-sm

text-black/60

"
          >
            <Sparkles size={15} />
            How It Works
          </div>

          <h2
            className="
mt-8

text-6xl

lg:text-7xl

font-semibold

tracking-tight

leading-[1]

text-black

"
          >
            From Gesture
            <span className="text-black/40">to Communication</span>
          </h2>

          <p
            className="
mt-6

max-w-xl

text-lg

text-black/60

leading-relaxed

"
          >
            CampusSign AI combines computer vision, artificial intelligence and
            voice technology to create seamless communication.
          </p>
        </motion.div>

        {/* STEPS */}

        <div
          className="
relative

mt-24

"
        >
          {/* Connecting Line */}

          <div
            className="
hidden

lg:block

absolute

left-1/2

top-0

bottom-0

w-px

bg-black/10

"
          />

          <div
            className="
space-y-12

"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}

                  initial={{
                    opacity: 0,

                    y: 60,
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

                  className={`

flex

items-center

${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}

gap-8

`}
                >
                  {/* Glass Card */}

                  <div
                    className="
w-full

lg:w-[45%]

"
                  >
                    <div
                      className="
relative

p-8

rounded-[35px]

bg-white/45

border

border-white/80

backdrop-blur-2xl

shadow-[0_30px_80px_rgba(0,0,0,.08)]

overflow-hidden

group

"
                    >
                      <div
                        className="
absolute

inset-0

bg-gradient-to-br

from-white/70

to-transparent

opacity-0

group-hover:opacity-100

transition

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

"
                          >
                            <Icon size={24} />
                          </div>

                          <span
                            className="
text-black/30

font-semibold

"
                          >
                            {step.number}
                          </span>
                        </div>

                        <h3
                          className="
mt-8

text-2xl

font-semibold

"
                        >
                          {step.title}
                        </h3>

                        <p
                          className="
mt-4

text-black/60

leading-relaxed

"
                        >
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}

                  <div
                    className="
hidden

lg:flex

w-6

h-6

rounded-full

bg-black

border-4

border-[#f5f1e9]

"
                  ></div>

                  <div className="hidden lg:block w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
