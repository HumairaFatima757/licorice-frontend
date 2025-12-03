import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function useAOS(duration = 1000) {
  useEffect(() => {
    AOS.init({
      duration,       // default animation duration
      once: true,     // animation only once
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, [duration]);
}
