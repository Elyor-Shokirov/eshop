import Lottie from "lottie-react";
import React from "react";
import LoadingAnime from "../loading";
function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Lottie animationData={LoadingAnime} loop={true} />
    </div>
  );
}

export default Loading;
