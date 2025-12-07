export default function OutlineButton({ children, className = "" }) {
  return (
    <div className="p-[2px] rounded-[10px] bg-gradient-to-r from-[#2463EB] to-[#60A5FA] inline-block">
      <button
        className={`
          rounded-[8px] 
          bg-white 
          px-10 py-2 
          font-mdium text-[#201B30]
          transition 
          hover:underline hover:decoration-fontPrimary hover:decoration-1
          ${className}
        `}
      >
        {children}
      </button>
    </div>
  );
}
