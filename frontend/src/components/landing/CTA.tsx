"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section
      className="
relative

py-32

px-6

overflow-hidden

bg-[#f5f1e9]

"
    >
      {/* BACKGROUND GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],

          opacity: [0.4, 0.8, 0.4],
        }}

        transition={{
          duration: 8,

          repeat: Infinity,
        }}

        className="
absolute

top-20

left-1/2

-translate-x-1/2

w-[600px]

h-[600px]

rounded-full

bg-white/60

blur-[140px]

"
      />

      <motion.div
        animate={{
          y: [0, -30, 0],
        }}

        transition={{
          duration: 6,

          repeat: Infinity,
        }}

        className="
absolute

left-20

bottom-20

w-40

h-40

rounded-full

bg-white/50

blur-3xl

"
      />

      <div
        className="
relative

z-10

max-w-5xl

mx-auto

text-center

"
      >
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
            <Sparkles size={16} />
            AI Communication Platform
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
            Ready to
            <span className="text-black/40">connect</span>
            everyone?
          </h2>

          <p
            className="
mt-6

max-w-2xl

mx-auto

text-lg

text-black/60

leading-relaxed

"
          >
            Experience seamless communication between students, teachers and
            communities using AI-powered sign language translation.
          </p>

          <div
            className="
mt-10

flex

justify-center

flex-wrap

gap-5

"
          >
            <Button size="lg">
              Get Started
              <ArrowRight size={18} />
            </Button>

            <Button
              variant="outline"

              size="lg"
            >
              Explore Technology
            </Button>
          </div>
        </motion.div>

        {/* GLASS PLATFORM */}

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}

          transition={{
            duration: 5,

            repeat: Infinity,
          }}

          className="
mt-20

mx-auto

w-full

max-w-3xl

h-32

rounded-[50px]

bg-white/40

border

border-white/80

backdrop-blur-2xl

shadow-[0_30px_90px_rgba(0,0,0,.08)]

"
        >
          <div
            className="
h-full

flex

items-center

justify-center

text-black/40

text-sm

"
          >
            Powered by Artificial Intelligence • Computer Vision • Voice AI
          </div>
        </motion.div>
      </div>
    </section>
  );
}
