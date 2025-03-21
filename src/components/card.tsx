import { useState } from "react";
interface Card {
  image_1: string;
  image_2: string;
  name: string;
  price: number;
}
export default function Card({ image_1, image_2, name, price }: Card) {
  const [move, setMove] = useState(false);
  return (
    <section
      className={` ${
        move
          ? "border-2 rounded-t-2xl border-purple-900 -translate-y-3 ease-linear duration-200 cursor-pointer"
          : "border-2 rounded-t-2xl border-purple-500"
      }`}
      onMouseMove={() => setMove(true)}
      onMouseLeave={() => setMove(false)}
      onTouchStart={() => setMove(true)}
      onTouchEnd={() => setMove(false)}
    >
      <img
        src={move ? image_1 : image_2}
        className="w-66 h-68 rounded-t-2xl"
      ></img>

      <div className="containter mx-auto bg-gradient-to-r from-pink-500 to-cyan-500 py-3">
        <h3
          className={`font-bold text-3xl  text-center text-transparent bg-clip-text 
            ${
              move
                ? "bg-gradient-to-r from-stone-800 to-pink-800"
                : "bg-gradient-to-r from-cyan-800 to-pink-800"
            }`}
        >
          {name}
        </h3>
      </div>
      <h4 className=" py-4 text-center font-semibold text-2xl">₹{price}</h4>
      <div className="flex justify-center mb-4">
        <button className="px-4 cursor-pointer py-2 font-bold bg-gradient-to-r from-pink-500  to-purple-800 text-white rounded-4xl text-lg hover:text-xl hover:bg-gradient-to-r  hover:from-pink-800 hover:via-yellow-600 hover:to-purple-900 duration-200 ease-in-out hover:scale-100 hover:-translate-y-1 ">
          Buy Now
        </button>
      </div>
    </section>
  );
}
