import React from "react";

interface cardTypes {
  title: string;
  price: string;
  image: any;
}

const Card: React.FC<cardTypes> = ({ title, price, image }) => {
  return (
    <div>
      <div className="w-80 h-96 shadow-md  flex  flex-col bg-white">
        <div className="flex justify-center bg-green-100 h-1/2">
          <img src={image}  className="w-full"/>
        </div>
        <div className="flex h-1/2 items-center">
          <div className="flex justify-center w-full">
            <div className="flex-col">
              <p className="text-blue-950 text-lg font-semibold">{title}</p>
              <div className="flex justify-center">
                <p className="text-2xl font-semibold text-lime-600">*****</p>
              </div>
              <div className="flex justify-center">
                <p className="text-md font-semibold text-white bg-lime-700  px-4">
                  Rs {price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
