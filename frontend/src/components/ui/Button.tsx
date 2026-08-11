import React from "react";
import { LoaderCircle } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";

  size?: "sm" | "md" | "lg";

  loading?: boolean;

  children: React.ReactNode;
}

export default function Button({
  variant = "primary",

  size = "md",

  loading = false,

  children,

  className = "",

  disabled,

  ...props
}: ButtonProps) {
  const baseStyles = `

relative

overflow-hidden

flex

items-center

justify-center

gap-2

rounded-2xl

font-medium

transition-all

duration-300

backdrop-blur-xl

border

group

`;

  const variants = {
    primary: `

bg-black

text-white

border-black/20

shadow-[0_15px_35px_rgba(0,0,0,.18)]

hover:bg-neutral-800

hover:-translate-y-1

`,

    secondary: `

bg-white/50

text-black

border-black/10

hover:bg-white/80

hover:-translate-y-1

`,

    outline: `

bg-transparent

text-black

border-black/20

hover:bg-black/5

hover:-translate-y-1

`,
  };

  const sizes = {
    sm: `
px-4
py-2
text-sm
`,

    md: `
px-8
py-4
text-base
`,

    lg: `
px-10
py-5
text-lg
`,
  };

  return (
    <button
      disabled={disabled || loading}

      className={`
${baseStyles}

${variants[variant]}

${sizes[size]}

${disabled || loading ? "opacity-50 cursor-not-allowed" : ""}

${className}

`}

      {...props}
    >
      <span
        className="
absolute

inset-0

bg-gradient-to-br

from-white/30

via-transparent

to-transparent

opacity-0

group-hover:opacity-100

transition
"
      />

      {loading && (
        <LoaderCircle
          size={18}

          className="
animate-spin
relative
z-10
"
        />
      )}

      <span
        className="
relative

z-10
"
      >
        {children}
      </span>
    </button>
  );
}
