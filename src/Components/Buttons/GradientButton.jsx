export default function GradientButton({ children, className = "" }) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        px-6 py-3 rounded-xl 
        font-semibold text-white 
        bg-gradient-to-r from-[#2463EB] to-[#60A5FA]
        hover:from-[#1E55C9] hover:to-[#4A8DE0]
        transition
        ${className}
      `}
    >
      {children}
    </button>
  );
}
