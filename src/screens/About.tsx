import React from "react";
import Button from "../components/Button";
import grocery from "../assets/images/grocery.jpg";

const About = () => {
  return (
    <div className="flex justify-center w-full py-10">
      <div className="flex justify-center">
        <div className="flex-col w-[90%] lg:w-[60%]">
          <div className="flex justify-center">
            {" "}
            <div className="flex justify-center">
              <p className="font-semibold text-3xl text-blue-950">
                About Green Basket
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-10">
            <div className="flex flex-col justify-center">
              <img src={grocery} alt="grocery" />
            </div>

            <div className="col-span-2 ml-0 lg:ml-5 mt-5 md:mt-5 lg:mt-0">
              <p className="text-blue-950  font-semibold text-xl">
                {" "}
                Green Basket is a long establish fact that reader will be
                distracted
              </p>
              <p className="text-gray-400 mt-5 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                aliquid esse quaerat quas nostrum, adipisci dolorum tenetur eum
                doloribus assumenda accusamus exercitationem quos recusandae non
                accusantium, voluptates praesentium possimus eveniet?
              </p>

              <p className="text-gray-400 mt-5 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                aliquid esse quaerat quas nostrum, adipisci dolorum tenetur eum
                doloribus assumenda accusamus exercitationem quos recusandae non
                accusantium, voluptates praesentium possimus eveniet?
              </p>
              <div className="mt-5">
                <Button title="Read more" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(About);
