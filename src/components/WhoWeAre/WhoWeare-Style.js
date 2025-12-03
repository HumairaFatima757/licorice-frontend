export const whoWeAreStyles = {
  section: "relative bg-white px-4 sm:px-8 py-16 sm:py-20 flex flex-col items-center",

  heading: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 sm:mb-16 text-center",

  // Grid: small screens stacked vertically, larger screens 3 columns
  gridWrapper: "grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-6 justify-items-center items-start w-full md:w-4/5",

  // Boxes wrapper (flex vertically, visible on all screens)
  boxWrapper: "flex flex-col space-y-6 md:space-y-10",

  // Box container (responsive width + height)
  boxContainer: (bg) =>
    `relative p-4 sm:p-6 md:p-8 rounded-xl w-full max-w-xs sm:max-w-sm md:w-80 h-56 sm:h-64 md:h-80 ${bg}`,

  // Shadow (matches box size)
  boxShadow: (shadow) =>
    `absolute top-1 left-1 w-full max-w-xs sm:max-w-sm md:w-80 h-56 sm:h-64 md:h-80 rounded-xl ${shadow} z-0`,

  boxLogo: "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3",
  boxTitle: "font-bold text-white text-sm sm:text-base md:text-lg mb-1 sm:mb-2",
  boxDesc: "text-white text-xs sm:text-sm md:text-base",

  // Center image wrapper
  centerWrapper: "w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto relative my-6 md:my-0",
  centerBgBox: "bg-teal-400 rounded-lg w-full h-40 sm:h-60 md:h-80 absolute bottom-0 z-10",
  centerImage: "absolute bottom-0 w-full h-auto object-contain z-20",

  // Button
  startButton:
    "mt-6 sm:mt-10 bg-orange-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold hover:scale-105 transition-transform w-full sm:w-auto text-center",
};
