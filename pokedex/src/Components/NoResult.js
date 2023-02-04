import Lottie from "react-lottie";
import React from "react";
import notFound from "../assets/noutFound.json";

export default function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{ marginTop: 100, marginBottom: 100 }}>
      <Lottie options={defaultOptions} height={250} width={250} />
    </div>
  );
}
