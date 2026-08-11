"use client";

import {
  ArrowRight,
  Camera,
  History,
  Languages,
  Sparkles,
  Activity,
} from "lucide-react";

import Link from "next/link";
import { motion } from "framer-motion";



export default function StudentDashboard() {


return (

<motion.div

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8,
ease:[0.22,1,0.36,1]
}}

className="space-y-10"

>





{/* HERO */}


<motion.section

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

className="
flex
flex-col
lg:flex-row
justify-between
gap-8
"

>


<div className="max-w-3xl">


<motion.p

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:.2
}}

className="
text-white/40
text-sm
mb-4
"

>

AI Communication Assistant

</motion.p>





<motion.h1

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:.3,
duration:.8
}}

className="
text-5xl
lg:text-7xl
font-semibold
tracking-tight
text-white
leading-[1.05]
"

>

Communicate

<br/>

without

<br/>

boundaries.

</motion.h1>





<motion.p

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:.5
}}

className="
mt-6
text-white/50
text-lg
max-w-xl
leading-relaxed
"

>

CampusSign AI converts sign language into
meaningful communication using intelligent
gesture recognition.

</motion.p>





<motion.div

whileHover={{
scale:1.05
}}

whileTap={{
scale:.95
}}

className="inline-block"

>


<Link

href="/student/ask"

className="
mt-8
inline-flex
items-center
gap-3

bg-white
text-black

px-8
py-4

rounded-full

font-medium

transition

"

>


Start Translation

<ArrowRight size={18}/>


</Link>


</motion.div>



</div>








{/* AI ORB */}



<motion.div

animate={{

y:[0,-15,0],

scale:[1,1.05,1]

}}

transition={{

duration:5,

repeat:Infinity,

ease:"easeInOut"

}}

className="
flex
items-center
justify-center
"

>


<div

className="
relative
w-64
h-64

rounded-full

bg-white/[0.08]

border
border-white/20

backdrop-blur-3xl

flex
items-center
justify-center

"

>


<div

className="
absolute
inset-8

rounded-full

bg-white/10

animate-pulse

"

/>



<div

className="
relative

w-28
h-28

rounded-full

bg-white

text-black

flex
items-center
justify-center

shadow-[0_0_80px_rgba(255,255,255,.35)]

"

>

<Sparkles size={45}/>


</div>


</div>



</motion.div>



</motion.section>









{/* METRICS */}



<motion.section

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.7
}}

className="

grid

grid-cols-3

gap-6

border-y

border-white/10

py-8

"

>


<Metric
value="24"
label="Sessions"
/>


<Metric
value="96%"
label="Accuracy"
/>


<Metric
value="4"
label="Languages"
/>


</motion.section>









{/* WORKSPACE */}



<motion.section

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

className="

rounded-[45px]

bg-white/[0.06]

border

border-white/15

backdrop-blur-3xl

p-8

lg:p-12

"

>


<div

className="
flex
justify-between
items-center
mb-8
"

>


<div>


<h2

className="
text-2xl
font-semibold
text-white
"

>

Translation Studio

</h2>



<p

className="
text-white/40
mt-2
"

>

Your AI workspace is ready

</p>


</div>




<div

className="
flex
items-center
gap-2
text-white/60
text-sm
"

>


<span

className="
w-2
h-2
rounded-full
bg-white
"

/>

Online


</div>



</div>







<div

className="
grid
lg:grid-cols-2
gap-6
"

>





{/* CAMERA */}



<motion.div

whileHover={{
scale:1.02
}}

transition={{
duration:.3
}}

className="

h-[300px]

rounded-[35px]

bg-black/30

border

border-white/10

flex

flex-col

items-center

justify-center

"

>


<motion.div

animate={{

scale:[1,1.1,1]

}}

transition={{

duration:3,

repeat:Infinity

}}

className="

w-20

h-20

rounded-full

bg-white/10

border

border-white/20

flex

items-center

justify-center

text-white

"

>


<Camera size={35}/>


</motion.div>



<h3

className="
mt-5
text-white
text-xl
"

>

Gesture Detection

</h3>



<p

className="
mt-2
text-white/40
text-sm
"

>

Camera ready for input

</p>



</motion.div>









{/* INFO */}



<div className="space-y-4">


<InfoRow

icon={<Languages size={20}/>}

title="Translation Engine"

text="Real time gesture processing"

/>


<InfoRow

icon={<Activity size={20}/>}

title="AI Status"

text="System running smoothly"

/>


<InfoRow

icon={<History size={20}/>}

title="Recent Sessions"

text="View previous conversations"

/>



</div>



</div>


</motion.section>









{/* ACTIVITY */}



<section>


<h2

className="
text-white
text-xl
font-semibold
mb-5
"

>

Recent Activity

</h2>



<div className="space-y-3">


{

[
"Gesture translation completed",
"Conversation saved",
"AI session analyzed"

].map((item,index)=>(


<motion.div

key={index}

initial={{

opacity:0,

x:-30

}}

whileInView={{

opacity:1,

x:0

}}

viewport={{
once:true
}}

transition={{

delay:index*.15

}}

className="

flex

justify-between

items-center

px-6

py-4

rounded-3xl

bg-white/[0.05]

border

border-white/10

text-white/70

"

>


<span>{item}</span>


<span

className="
text-white/30
text-sm
"

>

Today

</span>



</motion.div>


))

}


</div>


</section>






</motion.div>


);

}








function Metric({

value,

label

}:{

value:string;

label:string;

}){


return (

<motion.div

whileHover={{
y:-5
}}

transition={{
duration:.3
}}

>


<h3

className="
text-4xl
font-semibold
text-white
"

>

{value}

</h3>


<p

className="
text-white/40
mt-1
"

>

{label}

</p>


</motion.div>

)

}








function InfoRow({

icon,

title,

text

}:{

icon:React.ReactNode;

title:string;

text:string;

}){


return (

<motion.div

whileHover={{
x:8
}}

transition={{
duration:.3
}}

className="

rounded-3xl

bg-white/[0.05]

border

border-white/10

p-5

flex

items-center

gap-5

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

{icon}

</div>



<div>


<h3

className="
text-white
font-medium
"

>

{title}

</h3>


<p

className="
text-white/40
text-sm
mt-1
"

>

{text}

</p>


</div>



</motion.div>

)

}