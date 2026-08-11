"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  History,
  User,
  LogOut,
  Users,
  BarChart3,
  Settings,
  FileText,
  Languages,
  ClipboardList,
  Sparkles,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";

interface SidebarProps {
  role: "STUDENT" | "STAFF" | "ADMIN";
}

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();

  const router = useRouter();

  const { logout } = useAuth();

  const studentLinks = [
    {
      name: "Dashboard",
      href: "/student/dashboard",
      icon: LayoutDashboard,
    },

    {
      name: "Translate",
      href: "/student/ask",
      icon: MessageSquare,
    },

    {
      name: "Responses",
      href: "/student/responses",
      icon: Languages,
    },

    {
      name: "History",
      href: "/student/history",
      icon: History,
    },

    {
      name: "Profile",
      href: "/student/profile",
      icon: User,
    },
  ];

  const staffLinks = [
    {
      name: "Dashboard",
      href: "/staff/dashboard",
      icon: LayoutDashboard,
    },

    {
      name: "Requests",
      href: "/staff/requests",
      icon: ClipboardList,
    },

    {
      name: "Translate",
      href: "/staff/translate",
      icon: Languages,
    },

    {
      name: "History",
      href: "/staff/history",
      icon: History,
    },

    {
      name: "Profile",
      href: "/staff/profile",
      icon: User,
    },
  ];

  const adminLinks = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },

    {
      name: "Users",
      href: "/admin/users",
      icon: Users,
    },

    {
      name: "Analytics",
      href: "/admin/analytics",
      icon: BarChart3,
    },

    {
      name: "Reports",
      href: "/admin/reports",
      icon: FileText,
    },

    {
      name: "Settings",
      href: "/admin/settings",
      icon: Settings,
    },
  ];

  const links =
    role === "STUDENT"
      ? studentLinks
      : role === "STAFF"
        ? staffLinks
        : adminLinks;

  return (
    <aside
      className="

fixed

left-6

top-6

bottom-6


w-72


rounded-[40px]


bg-white/[0.08]


border

border-white/20


backdrop-blur-3xl


shadow-[0_30px_100px_rgba(0,0,0,.5)]


p-6


flex

flex-col


"
    >
      {/* BRAND */}

      <div
        className="

flex

items-center

gap-3

mb-10

"
      >
        <div
          className="

w-12

h-12

rounded-2xl


bg-white

text-black


flex

items-center

justify-center

"
        >
          <Sparkles size={22} />
        </div>

        <div>
          <h2
            className="

text-white

font-semibold

text-lg

"
          >
            CampusSign AI
          </h2>

          <p
            className="

text-white/40

text-xs

"
          >
            {role.toLowerCase()}
            portal
          </p>
        </div>
      </div>

      {/* MENU */}

      <nav
        className="

flex-1

space-y-3

"
      >
        {links.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}

              href={item.href}

              className={`

flex

items-center

gap-4

px-5

py-3.5


rounded-2xl


transition-all


${
  active
    ? "bg-white text-black shadow-lg"
    : "text-white/70 hover:bg-white/10 hover:text-white"
}


`}
            >
              <Icon size={20} />

              <span
                className="

text-sm

font-medium

"
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* LOGOUT */}

      <button
        onClick={() => {
          logout();

          router.push("/auth/login");
        }}

        className="

flex

items-center

gap-4

px-5

py-3.5


rounded-2xl


text-white/70


hover:bg-white/10


hover:text-white


transition

"
      >
        <LogOut size={20} />

        <span
          className="

text-sm

"
        >
          Logout
        </span>
      </button>
    </aside>
  );
}
