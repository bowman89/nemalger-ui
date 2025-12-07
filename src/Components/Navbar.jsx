import { NavLink, Link } from "react-router-dom";
import nlLogo from "../Assets/nlLogo.png";
import OutlineButton from "./Buttons/OutlineButton";

export default function Navbar() {
    return (
        <nav className="
            bg-white text-fontPrimary 
            shadow-[0_2px_6px_rgba(0,0,0,0.08)]
            w-full h-16 flex items-center
            relative z-50
        ">
            <div className="w-full max-w-[1927px] mx-auto px-6 flex justify-between items-center">
                
                {/* Logo */}
                <Link to="/">
                    <img 
                        src={nlLogo} 
                        alt="NemLager Logo" 
                        className="h-8 ml-52 cursor-pointer"
                    />
                </Link>

                {/* Nav links */}
                <div className="flex gap-8 text-sm font-normal mr-52 items-center">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `hover:underline hover:decoration-[#2463EB] hover:decoration-1 ${
                                isActive ? "underline decoration-[#2463EB] decoration-1" : ""
                            }`
                        }
                    >
                        Hjem
                    </NavLink>

                    <NavLink
                        to="/funktioner"
                        className={({ isActive }) =>
                            `hover:underline hover:decoration-[#2463EB] hover:decoration-1 ${
                                isActive ? "underline decoration-[#2463EB] decoration-1" : ""
                            }`
                        }
                    >
                        Funktioner
                    </NavLink>

                    <NavLink
                        to="/referencer"
                        className={({ isActive }) =>
                            `hover:underline hover:decoration-[#2463EB] hover:decoration-1 ${
                                isActive ? "underline decoration-[#2463EB] decoration-1" : ""
                            }`
                        }
                    >
                        Referencer
                    </NavLink>

                    <NavLink
                        to="/nemunivers"
                        className={({ isActive }) =>
                            `hover:underline hover:decoration-[#2463EB] hover:decoration-1 ${
                                isActive ? "underline decoration-[#2463EB] decoration-1" : ""
                            }`
                        }
                    >
                        NemUniverse
                    </NavLink>

                    <OutlineButton>KONTAKT</OutlineButton>
                </div>
            </div>
        </nav>
    );
}
