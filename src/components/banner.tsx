import { useEffect, useRef, useState } from "react";
import { images } from "@/utils/bannerutil";
export default function Banner() {
  const [image, setImage] = useState(0);
  let imageRef: any = useRef(null);
  useEffect(() => {
    imageRef.current = setInterval(() => {
      setImage((prevImage) =>
        prevImage < images.length - 1 ? prevImage + 1 : 0
      );
    }, 5000);
    return () => clearInterval(imageRef.current);
  }, []);
  const changeImage = (i: number) => {
    setImage(i);
    clearInterval(imageRef.current);
    imageRef.current = null;
  };
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center mt-4">
        <img
          src={images[image]}
          alt="image"
          className="w-5/6 h-[30vh] md:w-5/6 md:h-92 xl:w-4/5 xl:h-88 2xl:h-84 2xl:w-4/5"
        ></img>
        <div className="flex mt-4 gap-2">
          <button
            className={`rounded-full duration-200 ease-in-out  cursor-pointer ${
              image == 0 ? "h-4 w-4 bg-pink-500" : "h-3 w-3 bg-pink-400"
            }`}
            onClick={() => changeImage(0)}
          ></button>
          <button
            className={`rounded-full duration-200 ease-in-out bg-pink-400 cursor-pointer ${
              image == 1 ? "h-4 w-4 bg-pink-500" : "h-3 w-3 bg-pink-400"
            }`}
            onClick={() => changeImage(1)}
          ></button>
          <button
            className={`rounded-full duration-200 ease-in-out bg-pink-400 cursor-pointer ${
              image == 2 ? "h-4 w-4 bg-pink-500" : "h-3 w-3 bg-pink-400"
            }`}
            onClick={() => changeImage(2)}
          ></button>
          <button
            className={`rounded-full duration-200 ease-in-out bg-pink-400 cursor-pointer ${
              image == 3 ? "h-4 w-4 bg-pink-500" : "h-3 w-3 bg-pink-400"
            }`}
            onClick={() => changeImage(3)}
          ></button>
        </div>
      </div>
    </>
  );
}
