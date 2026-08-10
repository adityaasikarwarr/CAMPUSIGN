import React from "react";


interface CardProps
  extends React.HTMLAttributes<HTMLDivElement> {

  children: React.ReactNode;

  hover?: boolean;

  variant?: "light" | "dark";

}



export default function Card({

  children,

  hover = true,

  variant = "light",

  className = "",

  ...props

}: CardProps) {


  const variants = {


    light:

    `
    bg-white/40

    border-white/60

    text-black

    `,


    dark:

    `
    bg-black/70

    border-white/10

    text-white

    `,


  };



  return (

    <div


      className={`

      relative

      overflow-hidden

      rounded-3xl


      border


      backdrop-blur-2xl


      p-6


      shadow-[0_20px_60px_rgba(0,0,0,0.15)]


      transition-all

      duration-500



      ${

        hover

        ?

        "hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.22)]"

        :

        ""

      }



      ${variants[variant]}



      ${className}


      `}


      {...props}


    >



      {/* Soft glass reflection */}

      <div

        className="

        absolute

        inset-0

        rounded-3xl


        bg-gradient-to-br

        from-white/50

        via-transparent

        to-transparent


        opacity-40


        pointer-events-none

        "

      />




      {/* Content */}

      <div

        className="

        relative

        z-10

        "

      >

        {children}

      </div>




    </div>

  );

}