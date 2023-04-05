import React from "react";

function Hero() {
  return (
    <div
      className="py-[50px] text-center text-[37px] font-bold text-white "
      style={{
        backgroundImage: 'url("../images/background-image.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      RANDOM USER GENERATOR
    </div>
  );
}

export default Hero;
