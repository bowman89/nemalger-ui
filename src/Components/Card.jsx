export function InfoCard({ image, title, subtitle, text }) {
  return (
    <div
      className="
        relative rounded-2xl overflow-hidden shadow-md 
        bg-gray-900 text-white
        aspect-[16/9]
      "
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

      {/* Text content */}
      <div className="absolute bottom-5 left-5 right-5">
        <h3 className="text-2xl font-bold">{title}</h3>
        {subtitle && <p className="text-sm font-semibold opacity-90">{subtitle}</p>}
        {text && <p className="text-sm mt-2 opacity-80">{text}</p>}
      </div>
    </div>
  );
}
