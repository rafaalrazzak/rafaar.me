import NextImage from "next/image";
import { useState } from "react";
// eslint-disable-next-line jsx-a11y/alt-text
export default function Image({ type, circleSize, ...rest }) {
  const [isReady, setIsReady] = useState(false);
  function ready() {
    setTimeout(setReady, 3000);
  }

  function setReady() {
    setIsReady(true);
  }

  ready();
  return (
    <>
      {isReady ? (
        <NextImage {...rest} />
      ) : (
        <div
          className={`${type == "topTrack" ? "rounded-l-lg" : "rounded-lg "} ${
            type == "circle" ? `${circleSize} rounded-full` : "h-full w-full "
          }  animate-pulse bg-gray-200`}
        ></div>
      )}
    </>
  );
}
