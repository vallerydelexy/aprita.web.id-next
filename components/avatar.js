import Lottie from "react-lottie";
import animationData from "@components/lottie/cirlce.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const avatar = () =>
(<>
  <span className="inline-block relative">
  <Lottie options={defaultOptions} height={"10rem"} width={"10rem"} style={{marginTop:"-1rem", marginLeft:"-1rem", position: "absolute", zIndex: 1}}/>
    <img
      className="h-32 w-32 rounded-full"
      src="/images/rizki-aprita.jpg"
      alt=""
      style={{position: "relative",zIndex: 2}}
    />
    <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full ring-2 ring-white bg-green-400" />
  </span>
</>)
export default avatar
