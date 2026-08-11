"use client";

import {
  CalendarDays,
  Clock,
  Languages,
  MessageSquare,
  ChevronRight,
} from "lucide-react";

import { motion } from "framer-motion";



const history = [

{
date:"Today",
sessions:[
{
title:"Classroom Conversation",
language:"English",
duration:"12 min",
messages:"24 translations"
}
]
},


{
date:"Yesterday",
sessions:[
{
title:"Quick Help Session",
language:"English",
duration:"8 min",
messages:"15 translations"
},
{
title:"Campus Discussion",
language:"English",
duration:"20 min",
messages:"42 translations"
}
]
},


{
date:"12 August 2026",
sessions:[
{
title:"Project Discussion",
language:"English",
duration:"15 min",
messages:"31 translations"
}
]
}

];




export default function HistoryPage(){



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
duration:.7
}}

className="space-y-8"

>





{/* HEADER */}



<div>


<h1

className="
text-5xl
font-semibold
tracking-tight
text-white
"

>

Translation History

</h1>



<p

className="
mt-3
text-white/40
text-lg
"

>

Review your previous AI communication sessions

</p>



</div>









{/* TIMELINE */}



<div

className="
space-y-10
"

>


{

history.map((day,index)=>(


<motion.section

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

>


<div

className="
flex
items-center
gap-3
mb-5
"

>


<div

className="
w-10

h-10

rounded-2xl

bg-white

text-black

flex

items-center

justify-center

"

>

<CalendarDays size={20}/>

</div>



<h2

className="
text-white
text-xl
font-semibold
"

>

{day.date}

</h2>


</div>







<div

className="
ml-5

border-l

border-white/10

pl-8

space-y-5

"

>


{

day.sessions.map((session,i)=>(



<motion.div

key={i}

whileHover={{

x:8

}}

transition={{

duration:.3

}}

className="


rounded-[32px]


bg-white/[0.06]


border

border-white/15


backdrop-blur-3xl


p-6


flex

items-center

justify-between


"

>



<div>



<h3

className="
text-white
text-xl
font-medium
"

>

{session.title}

</h3>



<div

className="
mt-4

flex

flex-wrap

gap-5

text-white/40

text-sm

"

>


<span

className="
flex
items-center
gap-2
"

>

<Languages size={15}/>

{session.language}

</span>



<span

className="
flex
items-center
gap-2
"

>

<Clock size={15}/>

{session.duration}

</span>



<span

className="
flex
items-center
gap-2
"

>

<MessageSquare size={15}/>

{session.messages}

</span>



</div>


</div>








<button

className="

w-11

h-11


rounded-2xl


bg-white/10


border

border-white/20


text-white


flex

items-center

justify-center


hover:bg-white


hover:text-black


transition

"

>

<ChevronRight size={20}/>


</button>




</motion.div>



))

}



</div>





</motion.section>



))


}



</div>







</motion.div>


);

}