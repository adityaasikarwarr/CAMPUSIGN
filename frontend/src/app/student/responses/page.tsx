"use client";

import {
  Search,
  Languages,
  Clock,
  Copy,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";



const responses = [

{
text:"Hello, how are you?",
language:"English",
time:"2 minutes ago",
status:"Completed"
},

{
text:"Thank you for your help",
language:"English",
time:"Yesterday",
status:"Completed"
},

{
text:"Good morning everyone",
language:"English",
time:"2 days ago",
status:"Completed"
},

];



export default function ResponsesPage(){


const [copied,setCopied]=useState<number|null>(null);



function copyText(index:number){

navigator.clipboard.writeText(
responses[index].text
);

setCopied(index);


setTimeout(()=>{

setCopied(null)

},1500)

}



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
text-white
tracking-tight
"

>

Responses

</h1>


<p

className="
mt-3
text-white/40
text-lg
"

>

Your translated conversations and AI responses

</p>


</div>









{/* SEARCH */}


<div

className="

relative

max-w-xl

"

>


<Search

size={20}

className="

absolute

left-5

top-1/2

-translate-y-1/2

text-white/40

"

/>



<input

placeholder="Search responses..."

className="

w-full

h-14

pl-14

pr-5


rounded-3xl


bg-white/[0.06]


border

border-white/15


backdrop-blur-xl


text-white


placeholder:text-white/40


outline-none

"

/>



</div>









{/* RESPONSE LIST */}



<div

className="space-y-5"

>


{

responses.map((item,index)=>(


<motion.div

key={index}

initial={{

opacity:0,

y:20

}}

whileInView={{

opacity:1,

y:0

}}

viewport={{

once:true

}}

transition={{

delay:index*.1

}}

whileHover={{

y:-5

}}

className="


rounded-[35px]


bg-white/[0.06]


border

border-white/15


backdrop-blur-3xl


p-7


"

>



<div

className="

flex

justify-between

items-start

gap-5

"

>



<div>


<div

className="

flex

items-center

gap-3

text-white/50

text-sm

"

>


<Languages size={16}/>


{item.language}


</div>





<h2

className="

mt-4

text-2xl

font-medium

text-white

"

>

{item.text}

</h2>


</div>







<button

onClick={()=>copyText(index)}

className="

w-11

h-11


rounded-2xl


bg-white/10


border

border-white/20


flex

items-center

justify-center


text-white


hover:bg-white


hover:text-black


transition

"

>

{

copied===index

?

<CheckCircle2 size={18}/>

:

<Copy size={18}/>

}


</button>




</div>









<div

className="

mt-6

flex

items-center

justify-between

"

>



<div

className="

flex

items-center

gap-2

text-white/40

text-sm

"

>

<Clock size={15}/>

{item.time}

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


<CheckCircle2 size={15}/>

{item.status}


</div>




</div>






</motion.div>


))


}



</div>





</motion.div>

);

}