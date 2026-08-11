"use client";

import {
  Bell,
  ChevronDown,
} from "lucide-react";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";


export default function Topbar() {


const {user}=useAuth();

const [open,setOpen]=useState(false);



return (

<header

className="

sticky

top-6

z-40


w-full

h-20


rounded-[32px]


bg-white/[0.08]


border

border-white/20


backdrop-blur-3xl


shadow-[0_25px_70px_rgba(0,0,0,.35)]


px-8


flex

items-center

justify-between


transition-all

duration-500

"

>





{/* LEFT SIDE */}



<div>


<h1

className="

text-white

text-xl

font-semibold

tracking-tight

"

>

CampusSign AI

</h1>



<p

className="

text-white/40

text-sm

mt-1

"

>

AI Communication Platform

</p>



</div>







{/* RIGHT SIDE */}



<div

className="

flex

items-center

gap-4

"

>





{/* NOTIFICATION */}



<button

className="

w-12

h-12


rounded-2xl


bg-white/10


border

border-white/20


backdrop-blur-xl


flex

items-center

justify-center


text-white/70


hover:bg-white/20


hover:scale-105


transition-all

duration-300

"

>


<Bell size={20}/>


</button>









{/* PROFILE */}



<div

className="

relative

"

>


<button

onClick={()=>setOpen(!open)}

className="

flex

items-center

gap-3


px-4

py-2


rounded-2xl


bg-white/10


border

border-white/20


backdrop-blur-xl


hover:bg-white/20


transition-all

duration-300

"

>




<div

className="

w-10

h-10


rounded-full


bg-white


text-black


flex

items-center

justify-center


font-semibold

"

>


{

user?.name?.charAt(0)

||

"S"

}


</div>







<div

className="

hidden

md:block

text-left

"

>


<p

className="

text-white

text-sm

font-medium

"

>


{

user?.name

||

"Student User"

}


</p>



<p

className="

text-white/40

text-xs

"

>


{

user?.role

||

"STUDENT"

}


</p>



</div>







<ChevronDown

size={16}

className={`

text-white/50

transition-transform

duration-300


${open ? "rotate-180" : ""}

`}

/>



</button>









{/* DROPDOWN */}



{

open &&

<div

className="

absolute

right-0

top-16


w-52


rounded-3xl


bg-white/[0.12]


border

border-white/20


backdrop-blur-3xl


shadow-[0_30px_80px_rgba(0,0,0,.5)]


p-3


z-50


"

>


<button

className="

w-full

text-left


px-4

py-3


rounded-2xl


text-white/80


hover:bg-white/10


transition

"

>

Profile

</button>



<button

className="

w-full

text-left


px-4

py-3


rounded-2xl


text-white/80


hover:bg-white/10


transition

"

>

Settings

</button>



</div>


}



</div>



</div>





</header>


);

}