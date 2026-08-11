"use client";

import {
  Camera,
  Sparkles,
  Languages,
  Activity,
  Mic,
  Play,
  Square,
  History,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";


export default function TranslationPage(){


const [active,setActive]=useState(false);



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

Translation Studio

</h1>


<p

className="
mt-3
text-white/40
text-lg
"

>

Convert sign language into real time communication

</p>


</div>









{/* MAIN WORKSPACE */}



<div

className="

grid

xl:grid-cols-3

gap-6

"

>









{/* CAMERA AREA */}



<motion.div

whileHover={{
scale:1.01
}}

className="

xl:col-span-2

rounded-[45px]

bg-white/[0.06]

border

border-white/15

backdrop-blur-3xl

p-8

"

>


<div

className="
flex
justify-between
items-center
mb-6
"

>


<div>


<h2

className="
text-xl
font-semibold
text-white
"

>

AI Vision Camera

</h2>


<p

className="
text-white/40
text-sm
mt-1
"

>

Gesture recognition workspace

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


{

active
?
"Detecting"
:
"Ready"

}



</div>



</div>









<div

className="

h-[430px]

rounded-[35px]

bg-black/40

border

border-white/10

flex

flex-col

items-center

justify-center

relative

overflow-hidden

"

>





<motion.div

animate={{

scale:active
?
[1,1.2,1]
:
1

}}

transition={{

duration:2,

repeat:active?
Infinity:
0

}}

className="

absolute

w-56

h-56

rounded-full

bg-white/10

blur-3xl

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


<Camera size={45}/>


</div>





<h3

className="
mt-8
text-white
text-2xl
font-medium
"

>

{

active

?

"Scanning Gestures"

:

"Camera Standby"

}

</h3>



<p

className="
mt-2
text-white/40
"

>

Position your hands inside the frame

</p>




</div>










<button

onClick={()=>setActive(!active)}

className="

mt-6

w-full

py-4

rounded-2xl

bg-white

text-black

font-medium

flex

items-center

justify-center

gap-3

hover:scale-[1.02]

transition

"

>

{

active

?

<>

<Square size={18}/>

Stop Detection

</>

:

<>

<Play size={18}/>

Start Detection

</>

}



</button>



</motion.div>









{/* OUTPUT PANEL */}



<div

className="

rounded-[45px]

bg-white/[0.06]

border

border-white/15

backdrop-blur-3xl

p-7

space-y-5

"

>


<h2

className="
text-xl
font-semibold
text-white
"

>

Translation Output

</h2>








<div

className="

rounded-3xl

bg-black/30

border

border-white/10

p-6

"

>


<p

className="
text-white/40
text-sm
"

>

Detected Message

</p>


<h3

className="
mt-3
text-3xl
text-white
font-semibold
"

>

Hello

</h3>



</div>








<Info

icon={<Languages/>}

title="Language"

value="English"

/>



<Info

icon={<Activity/>}

title="Confidence"

value="96%"

/>



<Info

icon={<Mic/>}

title="Voice Output"

value="Enabled"

/>





</div>





</div>









{/* HISTORY */}



<div

className="

rounded-[40px]

bg-white/[0.05]

border

border-white/10

p-8

"

>


<div

className="
flex
items-center
gap-3
text-white
"

>


<History/>

<h2

className="
text-xl
font-semibold
"

>

Recent Translations

</h2>


</div>




<div className="mt-5 space-y-3">


{

[
"Thank you",
"Good morning",
"How are you?"

].map((item,index)=>(


<motion.div

key={index}

whileHover={{
x:8
}}

className="

px-5

py-4

rounded-2xl

bg-white/[0.05]

border

border-white/10

text-white/70

"

>

{item}


</motion.div>


))


}



</div>


</div>







</motion.div>


)

}









function Info({

icon,

title,

value

}:{

icon:React.ReactNode;

title:string;

value:string;

}){


return (

<div

className="

flex

items-center

gap-4

rounded-2xl

bg-white/[0.05]

border

border-white/10

p-4

"

>


<div

className="

w-10

h-10

rounded-xl

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

<p

className="
text-white/40
text-sm
"

>

{title}

</p>


<p

className="
text-white
font-medium
"

>

{value}

</p>


</div>


</div>


)

}