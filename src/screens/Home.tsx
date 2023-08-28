import React from "react";
import basket from "../assets/images/basket.png";
import Button from "../components/Button";
const Home = () => {
  return (
    <div className="w-full relative py-32">
      <div className="">
        <img src={basket} className="w-full h-96 object opacity-10" />
      </div>

      <div className="absolute top-0  h-full w-full">
        <div className="flex flex-col  justify-center  h-full">
          <div className="flex justify-center">
            <div className="flex w-[70%]">
              <div className="grid grid-cols-3">               

                <div className="w-full col-span-2 flex flex-col justify-center">
                  <p className="font-semibold text-2xl text-blue-950">
                    Welcome to Green Basket
                  </p>
                  <p className="font-semibold text-4xl text-blue-950 mt-2">
                    The World Best{" "}
                    <span className="text-lime-400">Grocery shopping</span> Website
                  </p>
                  <p className="text-gray-400 mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Totam aliquid esse quaerat quas nostrum, adipisci dolorum
                    tenetur eum doloribus assumenda accusamus exercitationem
                    quos recusandae non accusantium, voluptates praesentium
                    possimus eveniet?
                  </p>
                  <div className=" mt-5">
                    <Button title="Read more" />
                    <Button
                      title="Shop now"
                      btnClass="bg-lime-400 text-white ml-5"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <img src={basket} className="w-full h-96" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
