export const whoWeAreStyles = {
  section:
    "relative bg-white px-4 sm:px-8 py-16 sm:py-20 flex flex-col items-center",

  heading:
    "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 sm:mb-16 text-center",

  // 1 Column on mobile, 3 on desktop
  gridWrapper:
    "grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-12 justify-items-center items-start w-full md:w-4/5",

  boxWrapper: "flex flex-col space-y-12",

  boxContainer: (bg) =>
    `relative p-8 rounded-xl w-72 sm:w-80 h-72 sm:h-80 ${bg} z-20`,

  boxShadow: (shadow) =>
    `absolute top-2 left-2 w-72 sm:w-80 h-72 sm:h-80 rounded-xl ${shadow} z-10`,

  boxLogo: "w-14 h-14 sm:w-16 sm:h-16 mb-4",
  boxTitle: "font-bold text-white text-base sm:text-lg mb-2",
  boxDesc: "text-white text-sm sm:text-base",

  //  FIXED CENTER IMAGE SECTION 
  centerWrapper:
  "relative w-40 sm:w-[220px] md:w-[300px] pb-52 sm:pb-72 md:pb-88 mx-auto mt-46",

  centerBgBox:
    "bg-teal-400 rounded-lg w-full h-[180px] sm:h-[300px] md:h-[360px] absolute bottom-0 z-10",

  centerImage:
    "absolute bottom-0 w-full mt-20 h-auto object-contain z-20",

  startButton:
    "mt-10 sm:mt-20 bg-orange-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold hover:scale-105 transition-transform w-full sm:w-auto text-center",
};
