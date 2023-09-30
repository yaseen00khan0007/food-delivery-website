import React from "react";

function Secondsection() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="flex flex-col  h-[28rem]  bg-blue-950">
          <h1 className="font-bold  pl-20 w-full   text-yellow-500 pt-20 pb-0 text-3xl">
            Feast your Eyes
          </h1>
          <p className="p-20 text-white pt-5 w-[50vw] pb-0 ">
            Welcome to Delightful food delivery where your hunger fuled dreams
            come true our mission to deliver mouth wathering saviour staright to
            your doorstep{" "}
          </p>
          <p className="p-20 text-white pt-5  w-[50vw] pb-0 ">
            From scrumptious burgers to delectable sushi, our extensive menu is
            packed full of flavor explosions that will make your tastebuds
            tingle with anticipation.
          </p>
          <p className="p-20 text-white pt-5  w-[50vw] pb-0">
            So come on over, let’s embark on this gastronomical adventure
            together and make mealtime truly irresistible.
          </p>
        </div>
        <div className="">
          <img
            className=" h-[28rem] w-full "
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Secondsection;
