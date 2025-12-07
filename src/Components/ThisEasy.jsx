import Carousel from "./Carousel";
import OutlineButton from "../Components/Buttons/OutlineButton";
import { Film } from "lucide-react";

export default function ThisEasy() {
  return (
    <section className="bg-blueBg py-20 items-center">
      <div className="items-center text-center">
        <h2 className="text-fontPrimary text-4xl font-bold tracking-ls-m pb-2">Så nemt er det</h2>      
        <p className="font-light tracking-ls-m text-xl pb-5">Det her er en brødtekst der indleder til mockups i karusellen</p>
      </div>
      
      {/* CAROUSEL */}
      <div className="">
        <Carousel />
      </div>

      {/* CTA */}
      <div className="flex flex-col justify-center items-center mt-10 gap-5">
        <OutlineButton className="text-[#2463EB]">
          <span className="inline-flex items-center gap-2">
            <Film size={18}/>Se vores explainer-videoer
          </span>
        </OutlineButton>
        <p className="text-fontSecondary">Vi har lavet korte anumationsvideoer, der viser NemLager i Brug - enkelt og visuelt.</p>
      </div>
    </section>
  )
}