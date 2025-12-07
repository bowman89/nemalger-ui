import { InfoCard } from "./Card";
import imgService from "../Assets/Photos/Img1.png";
import imgLager from "../Assets/Photos/Img2.png";
import imgDepot from "../Assets/Photos/Img3.png";

export default function ForWho() {
  return (
    <section className="py-20 items-center text-center ">
      <div className="">
      {/* TEXT */}  
        <div className="items-center max-w-[940px] mx-auto text-center">
          <h2 className="text-4xl text-fontPrimary pb-4">Hvem er det for?</h2>
          <p className="text-xl text-fontSecondary pb-5">NemLager er udviklet til virksomheder med lager, depot eller forbrug - uanset om det er til servicebileer, produktion eller projekter, hvor overblik og kontrol gør en forskel.</p>
        </div>
      {/* CARDS */}
        <div className="max-w-[980px] mx-auto px-4 grid gap-6">
          {/* TOP ROW */}
          <InfoCard 
            image={imgService}
            title="SERVICE & MONTAGE"
            subtitle="Overblik over materialer i bil og på lager."
            text="Bruges af teknikvirksomheder til at holde styr på, hvem der har hentet hvad – og hvor det er."
          />

      {/* BOTTOM ROW (2 CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard
            image={imgLager}
            title="LAGER"
            subtitle="Få styr på varebeholdning og minimer risikoen for udsolgte varer."
            text="Hold nemt overblik over, hvad der er på hylderne."
          />

          <InfoCard
            image={imgDepot}
            title="DEPOT"
            subtitle="Undgå at småting forsvinder i kaos."
            text="Registrér forbrug og beholdning – og slip for overløbte reoler og dobbeltkøb."
          />
        </div> 
        </div>
      
      </div>
    </section>
  )
}