import React from "react";
import Button from "./Button";
import { CiDeliveryTruck } from "react-icons/ci";

interface serviceCardProp {
  btnTitle: string;
  title: string;
  btnClass?: string;
  dividerClass?: string;
  cardIconBorderClass?: string;
  cardIconClass?: string;
}

const ServiceCard: React.FC<serviceCardProp> = ({
  dividerClass,
  cardIconBorderClass,
  cardIconClass,
  btnTitle,
  btnClass,
  title,
}) => {
  return (
    <div className="w-80 h-60 shadow-md  flex-col bg-white">
      <div className="flex w-full">
        {" "}
        <div className="w-full relative">
          <div
            className={`flex justify-center items-center w-full h-1 absolute top-0 px-4 border-2
            ${dividerClass ? dividerClass : "border-blue-950 bg-blue-950"}`}
          >
            <div
              className={`W-1/2 bg-white border-2  rounded origin-center rotate-45
            ${cardIconBorderClass ? cardIconBorderClass : "border-blue-950"}`}
            >
              <CiDeliveryTruck
                className={`p-1 origin-center -rotate-45  scale-x-[-1] text-5xl font-semibold
              ${cardIconClass ? cardIconClass : "text-blue-950 "}`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex justify-center bg">
          <p className="text-blue-950  font-semibold text-xl mt-14"> {title}</p>
        </div>
        <div className="flex justify-center px-5 mt-5 text-center">
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totamasdas
          </p>
        </div>
        <div className="mt-5">
          <Button title={btnTitle} btnClass={btnClass} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ServiceCard);
