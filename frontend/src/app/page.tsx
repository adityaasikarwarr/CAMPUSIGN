import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";


export default function Home(){

return(

<main className="min-h-screen flex items-center justify-center p-10">


<Card glow="blue">

<h1 className="text-4xl font-semibold tracking-tight text-black">
  CampusSign AI
</h1>


<p className="
mt-4
text-lg
text-black/60
max-w-md
leading-relaxed
">
AI powered sign language translation
</p>


<Button>

Get Started

</Button>


</Card>


</main>

)

}