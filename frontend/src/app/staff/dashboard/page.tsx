"use client";

import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Languages,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";

import { motion } from "framer-motion";
import Link from "next/link";

const requests = [
  {
    name: "Rahul Sharma",
    type: "Sign → Text",
    time: "2 min ago",
    status: "Pending",
  },
  {
    name: "Priya Verma",
    type: "Sign → Voice",
    time: "8 min ago",
    status: "Pending",
  },
  {
    name: "Arjun Mehta",
    type: "Text → Sign",
    time: "15 min ago",
    status: "Completed",
  },
];

const activities = [
  {
    text: "Gesture translation completed",
    time: "2 min ago",
  },
  {
    text: "New student request received",
    time: "8 min ago",
  },
  {
    text: "Conversation session saved",
    time: "15 min ago",
  },
  {
    text: "AI session analyzed",
    time: "24 min ago",
  },
];

const chartData = [35, 48, 42, 65, 55, 78, 68, 88, 73, 94, 82, 100];

export default function StaffDashboard() {
  return (
    <div className="relative min-h-full overflow-hidden">
      {/* BACKGROUND ATMOSPHERE */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            -top-40
            h-[520px]
            w-[520px]
            rounded-full
            bg-white/[0.045]
            blur-[130px]
          "
        />

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 35, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-180px]
            top-[30%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-white/[0.03]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            left-[35%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#f5f1e9]/[0.025]
            blur-[140px]
          "
        />
      </div>

      {/* CONTENT */}

      <div className="relative z-10 space-y-8">
        {/* HEADER */}

        <motion.section
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            flex-col
            gap-7
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.5,
              }}
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.055]
                px-4
                py-2
                text-xs
                text-white/45
                backdrop-blur-2xl
              "
            >
              <Sparkles size={14} />
              Staff Communication Center
            </motion.div>

            <h1
              className="
                text-4xl
                font-semibold
                tracking-[-0.04em]
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Welcome back.
            </h1>

            <p
              className="
                mt-4
                max-w-2xl
                text-sm
                leading-7
                text-white/40
                sm:text-base
              "
            >
              Manage student requests, assist live conversations and monitor
              communication sessions from one workspace.
            </p>
          </div>

          <Link
            href="/staff/translate"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3
              rounded-2xl
              bg-white
              px-6
              py-3.5
              text-sm
              font-medium
              text-black
              shadow-[0_15px_50px_rgba(255,255,255,.06)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_60px_rgba(255,255,255,.1)]
            "
          >
            Start Translation
            <ArrowRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.section>

        {/* STAT CARDS */}

        <section
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          <StatCard
            icon={<MessageSquare size={18} />}
            label="Pending Requests"
            value="08"
            detail="+3 today"
            delay={0}
          />

          <StatCard
            icon={<Video size={18} />}
            label="Active Sessions"
            value="03"
            detail="Currently live"
            delay={0.08}
          />

          <StatCard
            icon={<Users size={18} />}
            label="Students Assisted"
            value="126"
            detail="+12 this week"
            delay={0.16}
          />

          <StatCard
            icon={<CheckCircle2 size={18} />}
            label="Completion Rate"
            value="94%"
            detail="Session success"
            delay={0.24}
          />
        </section>

        {/* MAIN GRID */}

        <section
          className="
            grid
            gap-6
            xl:grid-cols-[1.35fr_.85fr]
          "
        >
          {/* REQUESTS PANEL */}

          <GlassPanel delay={0.15}>
            <div className="mb-7 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-semibold text-white">
                    Incoming Requests
                  </h2>

                  <span
                    className="
                      rounded-full
                      bg-white/[0.08]
                      px-2.5
                      py-1
                      text-[10px]
                      text-white/40
                    "
                  >
                    3
                  </span>
                </div>

                <p className="mt-1 text-sm text-white/30">
                  Students currently requesting assistance
                </p>
              </div>

              <Link
                href="/staff/requests"
                className="
                  group
                  hidden
                  items-center
                  gap-2
                  text-sm
                  text-white/35
                  transition
                  hover:text-white
                  sm:flex
                "
              >
                View all
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="space-y-3">
              {requests.map((request, index) => (
                <motion.div
                  key={request.name}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.3 + index * 0.1,
                  }}
                  className="
                    group
                    flex
                    flex-col
                    gap-4
                    rounded-2xl
                    border
                    border-white/[0.07]
                    bg-white/[0.035]
                    p-4
                    transition-all
                    duration-300
                    hover:border-white/[0.13]
                    hover:bg-white/[0.055]
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-white/[0.08]
                        text-white/70
                      "
                    >
                      <Languages size={18} />
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-white">
                        {request.name}
                      </h3>

                      <div
                        className="
                          mt-1
                          flex
                          items-center
                          gap-2
                          text-xs
                          text-white/25
                        "
                      >
                        <span>{request.type}</span>
                        <span>•</span>
                        <span>{request.time}</span>
                      </div>
                    </div>
                  </div>

                  {request.status === "Pending" ? (
                    <Link
                      href="/staff/requests"
                      className="
                        rounded-xl
                        bg-white
                        px-4
                        py-2
                        text-center
                        text-xs
                        font-medium
                        text-black
                        transition
                        hover:scale-105
                      "
                    >
                      Review
                    </Link>
                  ) : (
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-xl
                        bg-white/[0.07]
                        px-3
                        py-2
                        text-xs
                        text-white/35
                      "
                    >
                      <CheckCircle2 size={13} />
                      Completed
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            <Link
              href="/staff/requests"
              className="
                mt-5
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/[0.07]
                bg-white/[0.03]
                py-3
                text-sm
                text-white/35
                transition
                hover:bg-white/[0.06]
                hover:text-white
                sm:hidden
              "
            >
              View all requests
              <ArrowRight size={15} />
            </Link>
          </GlassPanel>

          {/* AI ENGINE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-white/[0.09]
              bg-white/[0.045]
              p-7
              shadow-[0_30px_100px_rgba(0,0,0,.2)]
              backdrop-blur-3xl
              sm:p-8
            "
          >
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-60
                w-60
                rounded-full
                bg-white
                blur-[100px]
              "
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-white
                    text-black
                  "
                >
                  <Activity size={19} />
                </div>

                <span
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-white/[0.05]
                    px-3
                    py-1.5
                    text-xs
                    text-white/45
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  Online
                </span>
              </div>

              <h2 className="mt-7 text-2xl font-semibold text-white">
                Translation Engine
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-white/30">
                AI services are running normally and ready for live
                communication sessions.
              </p>

              <div className="mt-7 space-y-2">
                <EngineStatus label="Gesture Recognition" />
                <EngineStatus label="Translation Engine" />
                <EngineStatus label="Voice Generation" />
              </div>

              <Link
                href="/staff/translate"
                className="
                  group
                  mt-7
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  bg-white
                  px-5
                  py-4
                  text-sm
                  font-medium
                  text-black
                  transition
                  hover:bg-white/90
                "
              >
                Open Translation Studio
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* LOWER PANELS */}

        <section className="grid gap-6 lg:grid-cols-2">
          {/* ACTIVITY */}

          <GlassPanel delay={0.35}>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Recent Activity
                </h2>

                <p className="mt-1 text-sm text-white/30">
                  Latest workspace activity
                </p>
              </div>

              <Clock3 size={18} className="text-white/25" />
            </div>

            <div className="space-y-1">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.text}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.45 + index * 0.08,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    px-3
                    py-3
                    transition
                    hover:bg-white/[0.035]
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/[0.07]
                      text-white/55
                    "
                  >
                    <CheckCircle2 size={15} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-sm text-white/65">
                      {activity.text}
                    </p>

                    <p className="mt-0.5 text-xs text-white/20">
                      {activity.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>

          {/* PERFORMANCE */}

          <GlassPanel delay={0.45}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Weekly Performance
                </h2>

                <p className="mt-1 text-sm text-white/30">
                  Communication assistance overview
                </p>
              </div>

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-white
                  text-black
                "
              >
                <TrendingUp size={17} />
              </div>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3">
              <MiniStat value="42" label="Sessions" />
              <MiniStat value="96%" label="Accuracy" />
              <MiniStat value="18m" label="Avg. time" />
            </div>

            <div
              className="
                mt-6
                flex
                h-28
                items-end
                gap-2
                rounded-2xl
                border
                border-white/[0.07]
                bg-white/[0.025]
                p-4
              "
            >
              {chartData.map((height, index) => (
                <motion.div
                  key={index}
                  initial={{
                    height: 0,
                  }}
                  animate={{
                    height: `${height}%`,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + index * 0.04,
                  }}
                  className="
                    flex-1
                    rounded-full
                    bg-white/65
                  "
                />
              ))}
            </div>

            <p className="mt-3 text-right text-xs text-white/20">Last 7 days</p>
          </GlassPanel>
        </section>
      </div>
    </div>
  );
}

/* ========================================================= */
/* GLASS PANEL */
/* ========================================================= */

function GlassPanel({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        rounded-[30px]
        border
        border-white/[0.09]
        bg-white/[0.045]
        p-6
        shadow-[0_30px_100px_rgba(0,0,0,.16)]
        backdrop-blur-3xl
        sm:p-8
      "
    >
      {children}
    </motion.div>
  );
}

/* ========================================================= */
/* STAT CARD */
/* ========================================================= */

function StatCard({
  icon,
  label,
  value,
  detail,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  detail: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.5,
        delay,
      }}
      className="
        group
        rounded-[25px]
        border
        border-white/[0.08]
        bg-white/[0.04]
        p-5
        shadow-[0_20px_60px_rgba(0,0,0,.12)]
        backdrop-blur-3xl
        transition-colors
        hover:border-white/[0.14]
      "
    >
      <div className="flex items-start justify-between">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-white/[0.07]
            text-white/70
          "
        >
          {icon}
        </div>

        <span className="text-[11px] text-white/20">Live</span>
      </div>

      <p className="mt-5 text-sm text-white/35">{label}</p>

      <div className="mt-1 flex items-end justify-between gap-2">
        <h3 className="text-3xl font-semibold tracking-tight text-white">
          {value}
        </h3>

        <span className="mb-1 text-xs text-white/20">{detail}</span>
      </div>
    </motion.div>
  );
}

/* ========================================================= */
/* ENGINE STATUS */
/* ========================================================= */

function EngineStatus({ label }: { label: string }) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-xl
        border
        border-white/[0.07]
        bg-white/[0.025]
        px-4
        py-3
      "
    >
      <span className="text-sm text-white/50">{label}</span>

      <span className="flex items-center gap-2 text-xs text-white/25">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        Operational
      </span>
    </div>
  );
}

/* ========================================================= */
/* MINI STAT */
/* ========================================================= */

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-white/[0.07]
        bg-white/[0.025]
        p-4
      "
    >
      <p className="text-2xl font-semibold text-white">{value}</p>

      <p className="mt-1 text-xs text-white/25">{label}</p>
    </div>
  );
}
