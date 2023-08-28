// import React from "react";
// import basket from "../assets/images/basket.png";
// import Button from "../components/Button";
// const Home = () => {
//   return (
//     <div className="w-full relative">
//       <div className="bg-red-400">
//         <img src={basket} className="w-full max-h-96  object-cover opacity-10" />
//       </div>

//       <div className="absolute top-0 lg:top-10 w-full">
//         <div className="flex flex-col  justify-center">
//           <div className="flex justify-center">
//             <div className="flex w-[70%]">
//               <div className="grid grid-cols-3 ">

//                 <div className="w-full col-span-3 lg:col-span-2  flex flex-col justify-center order-2 lg:order-1">
//                   <p className="font-semibold text-2xl text-blue-950">
//                     Welcome to Green Basket
//                   </p>
//                   <p className="font-semibold text-4xl text-blue-950 mt-2">
//                     The World Best{" "}
//                     <span className="text-lime-400">Grocery shopping</span> Website
//                   </p>
//                   <p className="text-gray-400 mt-5">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Totam aliquid esse quaerat quas nostrum, adipisci dolorum
//                     tenetur eum doloribus assumenda accusamus exercitationem
//                     quos recusandae non accusantium, voluptates praesentium
//                     possimus eveniet?
//                   </p>
//                   <div className=" mt-5">
//                     <Button title="Read more" />
//                     <Button
//                       title="Shop now"
//                       btnClass="bg-lime-400 text-white ml-5"
//                     />
//                   </div>
//                 </div>
//                 <div className="w-full col-span-3 lg:col-span-1 order-1 lg:order-2">
//                   <img src={basket} className="w-full " />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default React.memo(Home);

import React from "react";
import basket from "../assets/images/basket.png";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="w-full relative">
      <div>
        <img
          src={basket}
          className="w-full object-cover h-screen lg:h-96  opacity-10 "
        />
      </div>

      <div className="absolute top-0 lg:top-10 w-full mt-5">
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            <div className="flex w-[90%] lg:w-[70%]">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="md:w-full col-span-1 md:col-span-3 lg:col-span-2 flex flex-col justify-center order-2 lg:order-1">
                  <p className="font-semibold text-2xl text-lime-950">
                    Welcome to Green Basket
                  </p>
                  <p className="font-semibold text-4xl text-blue-950 mt-4 ">
                    The World's Best{" "}
                    <span className="text-lime-400">Grocery Shopping</span>{" "}
                    Website
                  </p>
                  <p className="text-gray-400 mt-5 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Totam aliquid esse quaerat quas nostrum, adipisci dolorum
                    tenetur eum doloribus assumenda accusamus exercitationem
                    quos recusandae non accusantium, voluptates praesentium
                    possimus eveniet?
                  </p>
                  <div className="mt-5">
                    <Button title="Read more" />
                    <Button
                      title="Shop now"
                      btnClass="bg-lime-400 text-white ml-5"
                    />
                  </div>
                </div>
                <div className="md:w-full col-span-1 md:col-span-3 lg:col-span-1 order-1 lg:order-2">
                  <img src={basket} className="w-full" />
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
