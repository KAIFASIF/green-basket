import React from "react";
import Button from "./Button";

interface serviceCardProp {
  title: string;
  btnTitle: string;
  btnClass?: string;
  dividerClass?: string;
  children?: any;
}

const ServiceCard: React.FC<serviceCardProp> = ({
  title,
  btnTitle,
  btnClass,
  dividerClass,
  children,
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
            {children}
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
