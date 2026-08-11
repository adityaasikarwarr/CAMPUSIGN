"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Eye, EyeOff, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";
import { UserRole } from "@/types/user";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const router = useRouter();

  const { login } = useAuth();

  const [roleOpen, setRoleOpen] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",

    password: "",

    role: "STUDENT" as UserRole,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await login(form);

      if (form.role === "STUDENT") {
        router.push("/student/dashboard");
      } else if (form.role === "STAFF") {
        router.push("/staff/dashboard");
      } else {
        router.push("/admin/dashboard");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="
min-h-screen

bg-[#f5f1e9]

flex

items-center

justify-center

px-6

relative

overflow-hidden
"
    >
      {/* BACKGROUND GLASS */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],

          opacity: [0.4, 0.7, 0.4],
        }}

        transition={{
          duration: 8,

          repeat: Infinity,
        }}

        className="
absolute

w-[500px]

h-[500px]

rounded-full

bg-white

blur-[140px]
"
      />

      {/* LOGIN CARD */}

      <motion.div
        initial={{
          opacity: 0,

          y: 40,

          scale: 0.95,
        }}

        animate={{
          opacity: 1,

          y: 0,

          scale: 1,
        }}

        transition={{
          duration: 0.8,
        }}

        className="
relative

z-10

w-full

max-w-md

rounded-[42px]

bg-white/45

border

border-white/80

backdrop-blur-3xl

shadow-[0_40px_100px_rgba(0,0,0,.12)]

p-10

"
      >
        {/* LOGO */}

        <div
          className="
flex

flex-col

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

shadow-xl

"
          >
            <Sparkles size={30} />
          </div>

          <h1
            className="
mt-7

text-4xl

font-semibold

tracking-tight

text-black

"
          >
            Welcome Back
          </h1>

          <p
            className="
mt-2

text-black/50

text-base

"
          >
            Login to CampusSign AI
          </p>
        </div>

        <form
          onSubmit={handleSubmit}

          className="
mt-10

space-y-5

pb-2

"
        >
          {/* EMAIL */}

          <input
            type="email"

            placeholder="Email address"

            value={form.email}

            onChange={(e) =>
              setForm({
                ...form,

                email: e.target.value,
              })
            }

            className="
w-full

h-14

px-5

rounded-2xl

bg-white/60

border

border-white/90

backdrop-blur-xl

outline-none

text-black

placeholder:text-black/40

focus:bg-white/80

transition

"
          />

          {/* PASSWORD */}

          <div
            className="
relative
"
          >
            <input
              type={showPassword ? "text" : "password"}

              placeholder="Password"

              value={form.password}

              onChange={(e) =>
                setForm({
                  ...form,

                  password: e.target.value,
                })
              }

              className="
w-full

h-14

px-5

pr-14

rounded-2xl

bg-white/60

border

border-white/90

backdrop-blur-xl

outline-none

text-black

placeholder:text-black/40

"
            />

            <button
              type="button"

              onClick={() => setShowPassword(!showPassword)}

              className="
absolute

right-5

top-1/2

-translate-y-1/2

text-black/40

"
            >
              {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>

          {/* CUSTOM GLASS ROLE DROPDOWN */}

          <div className="relative z-[100]">
            <button
              type="button"

              onClick={() => setRoleOpen(!roleOpen)}

              className="
w-full

h-14

px-5

rounded-2xl

bg-white/50

border

border-white/80

backdrop-blur-3xl

shadow-[0_10px_30px_rgba(0,0,0,.08)]

flex

items-center

justify-between

text-black

transition-all

hover:bg-white/70

"
            >
              <span className="font-medium">
                {form.role === "STUDENT"
                  ? "Student"
                  : form.role === "STAFF"
                    ? "Staff"
                    : "Admin"}
              </span>

              <motion.div
                animate={{
                  rotate: roleOpen ? 180 : 0,
                }}

                transition={{
                  duration: 0.25,
                }}
              >
                <ChevronDown
                  size={20}

                  className="text-black/50"
                />
              </motion.div>
            </button>

            {roleOpen && (
              <motion.div
                initial={{
                  opacity: 0,

                  y: -8,

                  scale: 0.96,
                }}

                animate={{
                  opacity: 1,

                  y: 0,

                  scale: 1,
                }}

                transition={{
                  duration: 0.25,
                }}

                className="

absolute

top-[70px]

left-0

w-full


rounded-3xl


bg-white/55


border

border-white/80


backdrop-blur-[40px]


shadow-[0_30px_80px_rgba(0,0,0,.18)]


p-2


overflow-hidden


"
              >
                {[
                  {
                    label: "Student",
                    value: "STUDENT",
                  },

                  {
                    label: "Staff",
                    value: "STAFF",
                  },

                  {
                    label: "Admin",
                    value: "ADMIN",
                  },
                ].map((role) => (
                  <button
                    key={role.value}

                    type="button"

                    onClick={() => {
                      setForm({
                        ...form,

                        role: role.value as UserRole,
                      });

                      setRoleOpen(false);
                    }}

                    className={`

w-full


px-5


py-3.5


rounded-2xl


text-left


font-medium


transition-all


duration-300



${
  form.role === role.value
    ? "bg-white/70 text-black shadow-sm"
    : "bg-transparent text-black/70 hover:bg-black/10"
}


`}
                  >
                    {role.label}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* LOGIN BUTTON */}

          <Button
            type="submit"

            loading={loading}

            className="
w-full

h-14

rounded-2xl

"
          >
            Login
          </Button>
        </form>

        <p
          className="
mt-8

text-center

text-sm

text-black/50

"
        >
          Don't have an account?
          <Link
            href="/auth/signup"

            className="
ml-2

font-medium

text-black

"
          >
            Create Account
          </Link>
        </p>
      </motion.div>
    </main>
  );
}
