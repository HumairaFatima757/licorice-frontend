// HeroStyles.js

export const heroStyles = {
  // Section Layout
  section:
    "flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-orange-600 gap-y-10 md:gap-x-20",

  // Left Text Column
  leftWrapper:
    "md:w-1/2 flex flex-col items-start space-y-5 relative pl-2 md:pl-12",

  heading:
    "text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight",

  paragraph:
    "text-white/90 text-base sm:text-lg md:text-xl max-w-lg",

  buttonWrapper: "relative mt-4",

  button:
    "bg-orange-400 text-white px-6 py-3 rounded-2xl shadow-md hover:scale-105 transition-transform",

  arrow:
    "hidden md:block absolute -right-32 lg:-right-40 top-1/2 -translate-y-1/2 w-28 lg:w-36 animate-bounce",

  // Right Image
  rightWrapper: "md:w-1/2 flex justify-center",

  heroImage:
    "w-3/4 sm:w-2/3 md:w-3/4 h-auto mx-auto drop-shadow-xl",
};
