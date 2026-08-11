"use client";

import {
  User,
  Mail,
  GraduationCap,
  Building2,
  Settings,
  Shield,
  Languages,
  Bell,
  Edit3,
} from "lucide-react";

import { motion } from "framer-motion";



export default function ProfilePage(){


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

Profile

</h1>


<p

className="
mt-3
text-white/40
text-lg
"

>

Manage your CampusSign AI account

</p>


</div>









{/* PROFILE HERO */}



<motion.section

whileHover={{
y:-3
}}

className="

rounded-[45px]

bg-white/[0.06]

border

border-white/15

backdrop-blur-3xl

p-8

lg:p-10

"

>


<div

className="
flex

flex-col

lg:flex-row

items-center

justify-between

gap-8

"

>



<div

className="
flex

items-center

gap-6

"

>


<div

className="

w-28

h-28


rounded-[35px]


bg-white


text-black


flex

items-center

justify-center


text-4xl

font-semibold

"

>

A

</div>




<div>


<h2

className="
text-3xl
font-semibold
text-white
"

>

Aditya Raj

</h2>



<p

className="
text-white/40
mt-2
"

>

Student Account

</p>



<div

className="
mt-4

px-4

py-2

rounded-full

bg-white/10

border

border-white/20

text-white/70

inline-flex

items-center

gap-2

text-sm

"

>


<Shield size={15}/>

Verified Student


</div>


</div>


</div>







<button

className="

px-6

py-3


rounded-2xl


bg-white


text-black


flex

items-center

gap-2


font-medium


hover:scale-105


transition

"

>


<Edit3 size={18}/>

Edit Profile


</button>




</div>


</motion.section>









{/* DETAILS */}



<div

className="

grid

lg:grid-cols-2

gap-6

"

>





<ProfileCard

icon={<User/>}

title="Personal Information"

items={[

"Name: Aditya Raj",

"Role: Student"

]}

/>





<ProfileCard

icon={<GraduationCap/>}

title="Academic Details"

items={[

"B.Tech Computer Science",

"3rd Year"

]}

/>





<ProfileCard

icon={<Building2/>}

title="College Information"

items={[

"CampusSign AI Member",

"Student Portal"

]}

/>





<ProfileCard

icon={<Mail/>}

title="Contact"

items={[

"aditya@example.com",

"Email verified"

]}

/>



</div>









{/* PREFERENCES */}



<section

className="

rounded-[40px]


bg-white/[0.06]


border

border-white/15


backdrop-blur-3xl


p-8

"

>


<h2

className="
text-xl
font-semibold
text-white
"

>

Preferences

</h2>



<div className="mt-6 space-y-4">



<SettingRow

icon={<Languages/>}

title="Preferred Language"

value="English"

/>



<SettingRow

icon={<Bell/>}

title="Notifications"

value="Enabled"

/>



<SettingRow

icon={<Settings/>}

title="AI Assistance"

value="Active"

/>



</div>


</section>







</motion.div>

)

}









function ProfileCard({

icon,

title,

items

}:{

icon:React.ReactNode;

title:string;

items:string[];

}){


return (

<motion.div

whileHover={{
y:-5
}}

className="

rounded-[35px]


bg-white/[0.05]


border

border-white/10


p-6

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

{icon}

<h3

className="
font-semibold
"

>

{title}

</h3>

</div>




<div

className="
mt-5
space-y-2
"

>


{

items.map((item,index)=>(


<p

key={index}

className="
text-white/50
text-sm
"

>

{item}

</p>


))

}


</div>



</motion.div>

)

}









function SettingRow({

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

justify-between


rounded-3xl


bg-white/[0.05]


border

border-white/10


p-5

"

>


<div

className="
flex
items-center
gap-4
text-white
"

>

{icon}

<span>

{title}

</span>


</div>



<span

className="
text-white/40
text-sm
"

>

{value}

</span>



</div>


)

}