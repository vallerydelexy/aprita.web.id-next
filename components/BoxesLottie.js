import Lottie from "react-lottie";
import animationData from "@components/lottie/boxes.json";

export default function BoxesLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={100} width={100} style={{position: "absolute"}}/>;
}