"use client";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";


interface DashboardLayoutProps {
  children: React.ReactNode;
  role: "STUDENT" | "STAFF" | "ADMIN";
}


export default function DashboardLayout({
  children,
  role,
}: DashboardLayoutProps) {


return (

<div

className="

min-h-screen

bg-black

flex

"

>


{/* SIDEBAR */}

<Sidebar role={role}/>





{/* MAIN AREA */}

<main

className="

ml-80

flex-1

min-h-screen

px-8

py-6

"

>


{/* STICKY TOPBAR */}

<div

className="

sticky

top-6

z-[100]

"

>

<Topbar/>

</div>





{/* PAGE CONTENT */}

<div

className="

mt-8

"

>

{children}

</div>



</main>



</div>


);

}