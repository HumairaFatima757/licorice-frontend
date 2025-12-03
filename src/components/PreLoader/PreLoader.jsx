import { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";

export default function Preloader() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 20); // speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="
      fixed inset-0 bg-orange-600 z-[9999] 
      flex flex-col items-center justify-center
    ">
      
      {/* Logo */}
      <img 
        src={Logo} 
        alt="Logo" 
        className="w-32 h-32 animate-pulse mb-6" 
      />

      {/* Percentage Text */}
      <p className="text-3xl font-bold text-white">{percent}%</p>

      {/* 3 Animated Dots */}
      <div className="flex mt-4 space-x-2">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-150"></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-300"></div>
      </div>

    </div>
  );
}
