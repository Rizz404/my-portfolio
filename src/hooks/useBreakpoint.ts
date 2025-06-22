import { useState, useEffect } from "react";

const getBreakpoint = (width: number): string => {
  if (width < 768) return "sm"; // Mobile (kebawah)
  if (width < 1280) return "md"; // Tablet (md keatas)
  if (width >= 1280) return "xl"; // Desktop (xl keatas)
  return "xl";
};

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("xl");

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};
