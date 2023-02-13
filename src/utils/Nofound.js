import React from 'react'
import Lottie from "react-lottie";
import animationData from "../Components/Animation/no-found.json";
const ErrorAnimation = (props) => {
  return (
    <div className='text-center'>
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
            >{props.children}</Lottie>
          </div>
  )
}

export default ErrorAnimation