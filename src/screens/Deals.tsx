import React from "react";
import deal from "../assets/images/deal.jpeg";

const Deals = () => {
  return (
    <div className="w-full relative bg-red-400">
      <div className="bg-lime-700">
        <img src={deal} className="w-full object-cover h-96 opacity-10" />
      </div>
      <div className="absolute top-0 w-full ">
        <div className="flex justify-center flex-col lg:flex-row items-center">
          {" "}
          <div className="flex items-end mt-5 lg:mt-28 order-2 lg:order-1 px-20 lg:px-0">
            <img src={deal} />
          </div>
          <div className="flex  flex-col justify-between  gap-4 px-5 order-1 lg:order-2">
            <div className="flex justify-center">
              <p className="font-semibold text-3xl text-white mt-20">
                Big Deals of the Week
              </p>
            </div>

            <div className=" hidden md:block">
              <div className="flex gap-2 justify-center ">
                <div className="bg-lime-400 w-40  flex justify-center items-center py-5 lg:py-10">
                  {" "}
                  <p className="text-white font-semibold text-2xl text-center">
                    {" "}
                    02 <br />
                    <span className="font-normal">Days</span>
                  </p>
                </div>
                <div className="bg-lime-400 w-40 flex justify-center items-center">
                  {" "}
                  <p className="text-white font-semibold text-2xl text-center">
                    {" "}
                    20 <br />
                    <span className="font-normal">Hours</span>
                  </p>
                </div>
                <div className="bg-lime-400 w-40 flex justify-center items-center">
                  {" "}
                  <p className="text-white font-semibold text-2xl text-center">
                    {" "}
                    55 <br />
                    <span className="font-normal">Mins</span>
                  </p>
                </div>
                <div className="bg-lime-400 w-40  flex justify-center items-center">
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
    </div>
  );
};

export default React.memo(Deals);
