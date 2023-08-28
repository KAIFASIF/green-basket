import React from "react";
import deal from "../assets/images/deal.jpeg";

const Deals = () => {
  return (
    <div className="w-full relative h-full">
      <div className=" bg-lime-700">
        <img src={deal} className="w-full h-80 object opacity-5" />
      </div>
      <div className="absolute  bottom-0 w-full ">
        <div className="flex justify-center">
          {" "}
          <div className="flex items-end mt-20">
            <img src={deal} className="w-full h-60" />
          </div>
          <div className="flex  flex-col justify-between h-72  gap-4 px-5">
            <div className="flex justify-center">
              <p className="font-semibold text-3xl text-white mt-20">
                Big Deals of the Week
              </p>
            </div>

            <div className="flex gap-2">
              <div className="bg-lime-400 w-40 h-32 flex justify-center items-center">
                {" "}
                <p className="text-white font-semibold text-2xl text-center">
                  {" "}
                  02 <br />
                  <span className="font-normal">Days</span>
                </p>
              </div>
              <div className="bg-lime-400 w-40 h-32 flex justify-center items-center">
                {" "}
                <p className="text-white font-semibold text-2xl text-center">
                  {" "}
                  20 <br />
                  <span className="font-normal">Hours</span>
                </p>
              </div>
              <div className="bg-lime-400 w-40 h-32 flex justify-center items-center">
                {" "}
                <p className="text-white font-semibold text-2xl text-center">
                  {" "}
                  55 <br />
                  <span className="font-normal">Mins</span>
                </p>
              </div>
              <div className="bg-lime-400 w-40 h-32 flex justify-center items-center">
                {" "}
                <p className="text-white font-semibold text-2xl text-center">
                  {" "}
                  58 <br />
                  <span className="font-normal">Seconds</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Deals);
