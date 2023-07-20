import Lottie from "react-lottie";
import animationData from "@components/lottie/geometric.json";

export default function GeometricLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={800} width={800} style={{position: "absolute", marginTop: "20em"}} />;
}