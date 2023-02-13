import React from 'react'
import Lottie from "react-lottie";
import animationData from "../Components/Animation/Loading.json";
const LoadingAnimation = () => {
  return (
    <div>
    <Lottie
      speed={0.5}
      options={{
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
      height={400}
      width={400}
    />
  </div>
  )
}

export default LoadingAnimation;