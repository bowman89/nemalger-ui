import GradientButton from "./Buttons/GradientButton";

export default function Hero() {
    return (
        <section className="w-full bg-[#F2F4FA] py-20">
            <div className="w-full max-w-[1920px] mx-auto px-6 flex justify-between items-center min-h-[540px]">

                {/* VENSTRE SIDE */}
                <div className="flex flex-col gap-6 w-[646px] ml-52">
                    <h1 className="text-4xl tracking-ls-m md:text-7xl font-bold leading-tight text-gray-900">
                        Effektiv<br />
                        Lagerstyring<br />
                        Med NemLager
                    </h1>

                    <p className="text-gray-600 text-3xl tracking-ls-m max-w-md">
                        NemLager er et webbaseret lagerstyring, der giver dig fuldt overblik og sparer tid.
                    </p>

                    <GradientButton className="w-[563px] flex flex-col">
                        <span className="text-xl tracking-ls-m font-bold">Book Demo</span>
                        <span className="text-sm tracking-ls-m font-normal opacity-90">Gratis og uforpligtende</span>
                        </GradientButton>
                </div>
                
                {/* HØJRE SIDE */}
                <div className="flex justify-center md:justify-end mr-52">
                    <img 
                    src="https://skancode.dk/wp-content/uploads/2025/10/NemLAger-Combi-Mockup.svg" 
                    alt="NemLager Mockup"
                    className="
                    w-full
                    max-w-[962.5px]
                    max-h-[540px]
                    object-contain
                    " />
                </div>
            </div>
        </section>
    )
}