"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

const links = ["Home", "Features", "How It Works", "Technology"];

export default function Footer() {
  return (
    <footer
      className="
relative
overflow-hidden

bg-[#f5f1e9]

px-6
pt-24
pb-10
"
    >
      {/* Floating Glass Lights */}

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
top-10
left-20

w-[450px]
h-[450px]

rounded-full

bg-white/70

blur-[140px]

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
        }}

        className="
absolute

right-20
bottom-0

w-[350px]
h-[350px]

rounded-full

bg-white/60

blur-[120px]

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
        {/* MAIN GLASS FOOTER */}

        <div
          className="
rounded-[45px]

p-10
lg:p-14


bg-white/45

border
border-white/80


backdrop-blur-3xl


shadow-[0_40px_120px_rgba(0,0,0,.08)]


grid

md:grid-cols-3

gap-12
lg:gap-16

"
        >
          {/* BRAND */}

          <div>
            <div
              className="
flex
items-center
gap-4
"
            >
              <div
                className="
w-14
h-14

rounded-3xl

bg-black

text-white

flex
items-center
justify-center

shadow-lg

"
              >
                <Sparkles size={25} />
              </div>

              <div>
                <h3
                  className="
text-2xl

font-semibold

text-black

tracking-tight
"
                >
                  CampusSign AI
                </h3>

                <p
                  className="
text-sm

text-black/40

mt-1

"
                >
                  AI Communication Platform
                </p>
              </div>
            </div>

            <p
              className="
mt-7

text-black/60

leading-relaxed

max-w-sm

"
            >
              Creating intelligent sign language communication using AI vision,
              language models and voice technology.
            </p>
          </div>

          {/* NAVIGATION */}

          <div>
            <h4
              className="
text-lg

font-semibold

text-black

"
            >
              Explore
            </h4>

            <div
              className="
mt-6

space-y-4

"
            >
              {links.map((link) => (
                <a
                  key={link}

                  href="#"

                  className="
group

flex

items-center

gap-2

text-black/50

hover:text-black

transition-all

duration-300

"
                >
                  {link}

                  <ArrowUpRight
                    size={14}

                    className="
opacity-0

group-hover:opacity-100

transition

"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* FOUNDER */}

          <div>
            <h4
              className="
text-lg

font-semibold

text-black

"
            >
              Creator & Project Lead
            </h4>

            <div
              className="
mt-6

p-5

rounded-3xl

bg-white/50

border

border-white/80

backdrop-blur-xl

"
            >
              <h5
                className="
text-xl

font-semibold

text-black

"
              >
                Aditya Sikarwarr
              </h5>

              <p
                className="
mt-2

text-sm

text-black/50

leading-relaxed

"
              >
                Building CampusSign AI to make communication more accessible
                through Artificial Intelligence.
              </p>

              <div
                className="
mt-5

flex

flex-col

gap-3

"
              >
                <a
                  href="https://github.com/adityaasikarwarr"

                  target="_blank"

                  className="
flex

items-center

justify-between

px-4

py-3

rounded-2xl

bg-white/60

border

border-white/80

text-sm

text-black/60

hover:text-black

transition

"
                >
                  GitHub
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href="https://www.linkedin.com/in/adityasikarwarr/"

                  target="_blank"

                  className="
flex

items-center

justify-between

px-4

py-3

rounded-2xl

bg-white/60

border

border-white/80

text-sm

text-black/60

hover:text-black

transition

"
                >
                  LinkedIn
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
mt-10

flex

justify-between

flex-wrap

gap-4

text-sm

text-black/40

"
        >
          <p>© 2026 CampusSign AI. All rights reserved.</p>

          <p>Built with Artificial Intelligence</p>
        </div>
      </div>
    </footer>
  );
}
