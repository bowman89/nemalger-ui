import FeatureCard from "./FeatureCard";
import { Boxes } from "lucide-react";
import { List } from "lucide-react";
import { Repeat2 } from "lucide-react";
import { LockKeyholeOpen } from "lucide-react";

export default function WhyNemLager() {

const features = [
    {
        // tilgang/afgang
        title: "Tilgang/Afgang",
        description: "",
        icon: <Boxes size={40} strokeWidth={1.6} className="text-[#2463EB]" />,
    },
    {
        // Historik
        title: "Historik",
        description: "",
        icon: <List size={40} strokeWidth={1.6} className="text-[#2463EB]" />,
    },
    {
        // Genbestil
        title: "Genbestil",
        description: "",
        icon: <Repeat2 size={40} strokeWidth={1.6} className="text-[#2463EB]" />,
    },
    {
        // LynLogin
        title: "LynLogin",
        description: "",
        icon: <LockKeyholeOpen size={40} strokeWidth={1.6} className="text-[#2463EB]" />,
    },
    {
        // Lagerværdi
        title: "Lagerværdi",
        description: "",
        icon: <LockKeyholeOpen size={40} strokeWidth={1.6} className="text-[#2463EB]" />,
    },
    {
        // Excel
        title: "Excel",
        description: "",
        icon: <LockKeyholeOpen size={40} strokeWidth={1.6} className="text-[#2463EB]" />,
    }
]

    return (
        <section className="flex flex-col items-center py-20 tracking-ls-m">
            <div className="">
                <h2 className="text-3xl font-semibold text-center pb-6">Hvorfor vælge NemLager?</h2>
                <p className="text-xl font-light text-center pb-6">Alt du behøver for at styre dit lager - uden unødige dikkedarer</p>
            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {features.map((f) =>(
                    <FeatureCard 
                        key={f.title}
                        icon={f.icon}
                        title={f.title}
                        description={f.description}
                    />
                ))}
            </div>
        </section>
    )
}
