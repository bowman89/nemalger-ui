export default function FeatureCard({ icon, title, description }) {
return (
        <div className="bg-[#F2F4FA] p-8 rounded-2xl shadow-md flex flex-col items-center text-center cursor-pointer transform transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg max-h-[283px] max-w-[362px]">
            <div className="mb-4">
                {icon}
            </div>

            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-fontSecondary text-sm leading-relaxed">
                {description}
            </p>
        </div>

    )
}