"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Eye, EyeOff, ChevronDown } from "lucide-react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";
import { UserRole } from "@/types/user";
import Button from "@/components/ui/Button";

export default function SignupPage() {
  const router = useRouter();

  const { signup } = useAuth();

  const [roleOpen, setRoleOpen] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "STUDENT" as UserRole,

    collegeId: "",
    department: "",
    year: "",

    employeeId: "",
    designation: "",
    adminCode: "",
  });

  const updateField = (key: string, value: string) => {
    setForm({
      ...form,

      [key]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await signup(form);

      if (form.role === "STUDENT") router.push("/student/dashboard");
      else if (form.role === "STAFF") router.push("/staff/dashboard");
      else router.push("/admin/dashboard");
    } finally {
      setLoading(false);
    }
  };

  const input = `

h-14

w-full

px-5

rounded-2xl

bg-white/10

border

border-white/20

backdrop-blur-xl

text-white

placeholder:text-white/40

outline-none

transition

focus:bg-white/20

`;

  return (
    <main
      className="

min-h-screen

bg-black

flex

items-center

justify-center

px-6

py-10

relative

overflow-hidden

"
    >
      <motion.div
        animate={{
          x: [-100, 100, -100],

          y: [0, 60, 0],
        }}

        transition={{
          duration: 15,

          repeat: Infinity,
        }}

        className="

absolute

w-[700px]

h-[700px]

rounded-full

bg-white/10

blur-[180px]

"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}

        animate={{ opacity: 1, scale: 1 }}

        transition={{ duration: 0.7 }}

        className="

relative

z-10

w-full

max-w-4xl


rounded-[50px]


bg-white/[0.08]


border

border-white/20


backdrop-blur-3xl


shadow-[0_40px_120px_rgba(0,0,0,.7)]


p-10

lg:p-14

"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT BRAND */}

          <div
            className="

flex

flex-col

justify-center

"
          >
            <div
              className="

w-20

h-20

rounded-[30px]

bg-white/10

border

border-white/30

flex

items-center

justify-center

text-white

"
            >
              <Sparkles size={35} />
            </div>

            <h1
              className="

mt-8

text-5xl

font-semibold

text-white

tracking-tight

"
            >
              Create Account
            </h1>

            <p
              className="

mt-4

text-white/50

text-lg

leading-relaxed

"
            >
              Join CampusSign AI and experience AI powered sign language
              communication.
            </p>

            <div
              className="

mt-10

text-white/40

text-sm

"
            >
              AI Vision • Translation • Accessibility
            </div>
          </div>

          {/* RIGHT FORM */}

          <form
            onSubmit={handleSubmit}

            className="

space-y-4

"
          >
            <input
              placeholder="Full Name"

              className={input}

              value={form.name}

              onChange={(e) => updateField("name", e.target.value)}
            />

            <input
              placeholder="Email Address"

              className={input}

              value={form.email}

              onChange={(e) => updateField("email", e.target.value)}
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}

                placeholder="Password"

                className={`${input} pr-14`}

                value={form.password}

                onChange={(e) => updateField("password", e.target.value)}
              />

              <button
                type="button"

                onClick={() => setShowPassword(!showPassword)}

                className="

absolute

right-5

top-1/2

-translate-y-1/2

text-white/50

"
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>

            <div className="relative">
              <button
                type="button"

                onClick={() => setRoleOpen(!roleOpen)}

                className={`

${input}

flex

items-center

justify-between

text-white

`}
              >
                {form.role === "STUDENT"
                  ? "Student"
                  : form.role === "STAFF"
                    ? "Staff"
                    : "Admin"}

                <ChevronDown size={20} />
              </button>

              {roleOpen && (
                <div
                  className="

absolute

top-16

z-50

w-full

rounded-3xl

bg-black/80

border

border-white/20

backdrop-blur-3xl

p-2

"
                >
                  {[
                    ["Student", "STUDENT"],
                    ["Staff", "STAFF"],
                    ["Admin", "ADMIN"],
                  ].map((r) => (
                    <button
                      key={r[1]}

                      type="button"

                      onClick={() => {
                        updateField("role", r[1]);

                        setRoleOpen(false);
                      }}

                      className="

w-full

px-5

py-3

rounded-2xl

text-left

text-white

hover:bg-white

hover:text-black

transition

"
                    >
                      {r[0]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="College ID"

                className={input}
              />

              <input
                placeholder="Department"

                className={input}
              />
            </div>

            <input
              placeholder="Year"

              className={input}
            />

            <Button
              type="submit"

              loading={loading}

              className="

w-full

h-14

rounded-2xl

mt-4

"
            >
              Create Account
            </Button>

            <p
              className="

text-center

text-sm

text-white/50

pt-3

"
            >
              Already have account?
              <Link
                href="/auth/login"

                className="

ml-2

text-white

"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </motion.div>
    </main>
  );
}
