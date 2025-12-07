// Carousel.jsx

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";

const sliderData = [
  {
    image: img1,
    title: "Oversigt",
    text: "Få øjeblikkeligt overblik over den beholdning, pris og placeringer."
  },
  {
    image: img2,
    title: "Tilgang / Afgang",
    text: "Registrer tilgang og afgang hurtigt og simpelt."
  },
  {
    image: img3,
    title: "Historik",
    text: "Se hvem der gjorde hvad og hvornår."
  }
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));

  return (
    <div className="w-full max-w-5xl mx-auto relative">

      {/* SLIDES */}
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {sliderData.map((slide, index) => (
            <div key={index} className="relative min-w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="rounded-xl shadow-xl w-full h-full object-cover"
              />

              {/* WHITE BAR OVERLAY */}
              <div
                className="
                  absolute left-1/2 -translate-x-1/2
                  bottom-0 w-[100%]
                  bg-white py-6 
                  shadow-lg shadow-black/5
                  text-center
                "
              >
                <h3 className="text-xl font-semibold text-fontPrimary">
                  {slide.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{slide.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ARROWS */}
      <button
        onClick={prevSlide}
        className="absolute left-[-4rem] top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-[-4rem] top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* DOTS */}
      <div className="flex justify-center gap-3 mt-6">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              w-3 h-3 rounded-full transition
              ${
                current === index
                  ? "bg-[#60A5FA] scale-125"
                  : "bg-[#2463EB]/30"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
