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

py-10

"
    >
      {/* GLASS LIGHT */}

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

w-[550px]

h-[550px]

rounded-full

bg-white

blur-[150px]

"
      />

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
        {/* HEADER */}

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

text-black

"
          >
            Create Account
          </h1>

          <p
            className="
mt-2

text-black/50

"
          >
            Join CampusSign AI
          </p>
        </div>

        <form
          onSubmit={handleSubmit}

          className="
mt-10

space-y-5

"
        >
          <input
            placeholder="Full Name"

            value={form.name}

            onChange={(e) => updateField("name", e.target.value)}

            className="
input-glass

"
          />

          <input
            type="email"

            placeholder="Email Address"

            value={form.email}

            onChange={(e) => updateField("email", e.target.value)}

            className="
input-glass

"
          />

          <div
            className="
relative
"
          >
            <input
              type={showPassword ? "text" : "password"}

              placeholder="Password"

              value={form.password}

              onChange={(e) => updateField("password", e.target.value)}

              className="
input-glass

pr-14

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

          {/* ROLE */}

          <div
            className="
relative

z-50
"
          >
            <button
              type="button"

              onClick={() => setRoleOpen(!roleOpen)}

              className="
input-glass

flex

items-center

justify-between

"
            >
              <span>
                {form.role === "STUDENT"
                  ? "Student"
                  : form.role === "STAFF"
                    ? "Staff"
                    : "Admin"}
              </span>

              <ChevronDown size={20} />
            </button>

            {roleOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                className="
absolute

top-16

w-full

rounded-3xl

bg-white/60

border

border-white/80

backdrop-blur-3xl

p-2

shadow-xl

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
                ].map((item) => (
                  <button
                    key={item.value}

                    type="button"

                    onClick={() => {
                      updateField("role", item.value);

                      setRoleOpen(false);
                    }}

                    className="
w-full

px-5

py-3

rounded-2xl

text-left

hover:bg-black

hover:text-white

transition

"
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* ROLE FIELDS */}

          {form.role === "STUDENT" && (
            <>
              <input
                placeholder="College ID"

                value={form.collegeId}

                onChange={(e) => updateField("collegeId", e.target.value)}

                className="
input-glass

"
              />

              <input
                placeholder="Department"

                value={form.department}

                onChange={(e) => updateField("department", e.target.value)}

                className="
input-glass

"
              />

              <input
                placeholder="Year"

                value={form.year}

                onChange={(e) => updateField("year", e.target.value)}

                className="
input-glass

"
              />
            </>
          )}

          {form.role === "STAFF" && (
            <>
              <input
                placeholder="Employee ID"

                value={form.employeeId}

                onChange={(e) => updateField("employeeId", e.target.value)}

                className="
input-glass

"
              />

              <input
                placeholder="Department"

                value={form.department}

                onChange={(e) => updateField("department", e.target.value)}

                className="
input-glass

"
              />

              <input
                placeholder="Designation"

                value={form.designation}

                onChange={(e) => updateField("designation", e.target.value)}

                className="
input-glass

"
              />
            </>
          )}

          {form.role === "ADMIN" && (
            <input
              placeholder="Admin Code"

              value={form.adminCode}

              onChange={(e) => updateField("adminCode", e.target.value)}

              className="
input-glass

"
            />
          )}

          <Button
            type="submit"

            loading={loading}

            className="
w-full

h-14

rounded-2xl

"
          >
            Create Account
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
          Already have an account?
          <Link
            href="/auth/login"

            className="
ml-2

font-medium

text-black

"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </main>
  );
}
