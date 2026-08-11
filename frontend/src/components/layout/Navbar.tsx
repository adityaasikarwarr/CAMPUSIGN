"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";

import Button from "@/components/ui/Button";

const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "How It Works",
    href: "#how",
  },
  {
    name: "Technology",
    href: "#technology",
  },
  {
    name: "About",
    href: "#about",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },

      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`
      fixed

      top-5

      left-1/2

      -translate-x-1/2

      z-50

      transition-all

      duration-700

      ease-out


      ${scrolled ? "w-[85%] max-w-5xl scale-95" : "w-[92%] max-w-7xl scale-100"}

      `}
    >
      <div
        className={`
        flex

        items-center

        justify-between


        rounded-full


        bg-white/35

        backdrop-blur-3xl


        border

        border-white/70


        shadow-[0_20px_60px_rgba(0,0,0,0.12)]


        transition-all

        duration-700


        ${scrolled ? "px-5 py-2" : "px-7 py-4"}

        `}
      >
        {/* LOGO */}

        <div
          className="
          flex
          items-center
          gap-3
          cursor-pointer
          group
          "
        >
          <div
            className="
            w-10
            h-10
            rounded-full
            bg-black
            flex
            items-center
            justify-center
            transition-all
            duration-700
            group-hover:rotate-180
            "
          >
            <Sparkles size={18} className="text-white" />
          </div>

          <span
            className={`
            font-semibold
            tracking-tight
            text-black
            transition-all
            duration-500

            ${scrolled ? "text-lg" : "text-xl"}

            `}
          >
            CampusSign AI
          </span>
        </div>

        {/* DESKTOP NAV */}

        <div
          className="
          hidden
          lg:flex
          items-center
          gap-3
          "
        >
          {navItems.map((item) => (
            <a
              key={item.name}

              href={item.href}

              onClick={() => setActive(item.href.substring(1))}

              className={`
              px-5
              py-2.5

              rounded-full

              border

              backdrop-blur-xl

              text-sm

              font-medium

              transition-all

              duration-500

              hover:-translate-y-1



              ${
                active === item.href.substring(1)
                  ? `
                bg-black

                text-white

                border-black

                shadow-[0_12px_30px_rgba(0,0,0,.18)]
                `
                  : `
                bg-white/40

                text-black/70

                border-white/70
                `
              }

              `}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* BUTTONS */}

        <div
          className="
          hidden
          lg:flex
          items-center
          gap-3
          "
        >
          <div
            className="
            rounded-full

            bg-white/40

            border

            border-white/70

            backdrop-blur-xl

            p-1

            flex

            gap-2
            "
          >
            <Link href="/auth/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>

            <Link href="/auth/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>

        {/* MOBILE BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}

          className="
          lg:hidden

          w-10

          h-10

          rounded-full

          bg-black

          text-white

          flex

          items-center

          justify-center

          transition

          hover:scale-110

          "
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}

      {menuOpen && (
        <div
          className="
            absolute

            top-20

            right-0

            w-72


            rounded-3xl


            bg-white/40


            backdrop-blur-3xl


            border

            border-white/70


            p-5


            shadow-[0_30px_80px_rgba(0,0,0,.18)]

            "
        >
          <div
            className="
              flex
              flex-col
              gap-3
              "
          >
            {navItems.map((item) => (
              <a
                key={item.name}

                href={item.href}

                onClick={() => setMenuOpen(false)}

                className="
                  px-5
                  py-3.5

                  rounded-full

                  bg-white/40

                  border

                  border-white/70

                  text-black/80

                  transition-all

                  hover:bg-black

                  hover:text-white

                  hover:translate-x-2

                  "
              >
                {item.name}
              </a>
            ))}

            <Link
              href="/auth/login"
              onClick={() => setMenuOpen(false)}

              className="
                px-5
                py-3.5
                rounded-full
                bg-black
                text-white
                text-center
                "
            >
              Login
            </Link>

            <Link
              href="/auth/signup"
              onClick={() => setMenuOpen(false)}

              className="
                px-5
                py-3.5
                rounded-full
                bg-white/50
                border
                border-white/70
                text-center
                "
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
