"use client";

import { motion } from "framer-motion";
import { Camera, Brain, MessageCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Capture Gesture",
    description:
      "Camera detects hand movements and body gestures in real time.",
    icon: Camera,
  },

  {
    number: "02",
    title: "AI Understanding",
    description:
      "Advanced AI vision models analyze and understand sign language.",
    icon: Brain,
  },

  {
    number: "03",
    title: "Instant Communication",
    description:
      "Convert gestures into text and natural voice output instantly.",
    icon: MessageCircle,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="
relative
py-32
px-6
overflow-hidden
bg-[#f5f1e9]
"
    >
      {/* TOP BLENDING EFFECT */}

      <div
        className="
absolute
-top-40
left-0
w-full
h-80
bg-gradient-to-b
from-transparent
via-white/50
to-transparent
blur-3xl
"
      />

      {/* MOVING LIGHT */}

      <motion.div
        animate={{
          x: [-60, 60, -60],
          y: [0, 40, 0],
        }}

        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="
absolute
left-10
top-40
w-[450px]
h-[450px]
rounded-full
bg-white/60
blur-[130px]
"
      />

      <motion.div
        animate={{
          x: [50, -50, 50],
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
bg-white/50
blur-[130px]
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
text-center
max-w-3xl
mx-auto
"
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
"
          >
            From Gesture
            <span className="text-black/40">to Communication</span>
          </h2>

          <p
            className="
mt-6
text-lg
text-black/60
leading-relaxed
"
          >
            CampusSign AI uses computer vision and artificial intelligence to
            transform sign language into meaningful communication.
          </p>
        </motion.div>

        {/* FLOW CONTAINER */}

        <div
          className="
relative
mt-24
grid
lg:grid-cols-3
gap-10
"
        >
          {/* CONNECTING LINE */}

          <motion.div
            initial={{
              scaleX: 0,
            }}

            whileInView={{
              scaleX: 1,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 1.5,
            }}

            className="
hidden
lg:block
absolute
top-32
left-[18%]
right-[18%]
h-[2px]
bg-black/10
origin-left
"
          />

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
                  delay: index * 0.2,
                  duration: 0.8,
                }}

                className="
relative
group
"
              >
                {/* CARD */}

                <div
                  className="
relative
h-full
rounded-[40px]
p-8
bg-white/45
border
border-white/80
backdrop-blur-2xl
shadow-[0_30px_90px_rgba(0,0,0,.08)]
overflow-hidden
transition-all
duration-500
group-hover:-translate-y-3
"
                >
                  {/* GLASS SHINE */}

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
                    {/* NUMBER */}

                    <div
                      className="
flex
justify-between
items-center
"
                    >
                      <div
                        className="
w-16
h-16
rounded-3xl
bg-black
text-white
flex
items-center
justify-center
shadow-lg
transition
duration-500
group-hover:scale-110
"
                      >
                        <Icon size={28} />
                      </div>

                      <span
                        className="
text-black/30
font-semibold
text-lg
"
                      >
                        {step.number}
                      </span>
                    </div>

                    <h3
                      className="
mt-10
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
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* ARROW */}

                {index !== steps.length - 1 && (
                  <div
                    className="
hidden
lg:flex
absolute
-right-7
top-32
w-14
h-14
rounded-full
bg-white/60
border
border-white
backdrop-blur-xl
items-center
justify-center
z-20
"
                  >
                    <ArrowRight size={20} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
