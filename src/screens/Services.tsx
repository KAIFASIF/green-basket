import React from "react";
import ServiceCard from "../components/ServiceCard";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { LiaRupeeSignSolid } from "react-icons/lia";

const Services = () => {
  return (
    <div className="flex flex-col py-6 w-full justify-center items-center">
      <p className="font-semibold text-3xl text-blue-950">Our services</p>

      <div className="w-full  flex justify-center">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-10 mt-20">
          <div>
            <ServiceCard title="Free Home Delivery" btnTitle="Read more">
              <div className="W-1/2 bg-white border-2  rounded origin-center rotate-45 border-blue-950">
                <CiDeliveryTruck className="p-1 origin-center -rotate-45  scale-x-[-1] text-5xl font-semibold text-blue-950" />
              </div>
            </ServiceCard>
          </div>
          <div>
            <ServiceCard
              dividerClass="border-lime-400 bg-lime-400"
              // cardIconBorderClass="bg-lime-400 border-lime-700"
              // cardIconClass="text-white"
              title="30 Days Return Services"
              btnTitle="Read more"
              btnClass="bg-lime-400 text-white"
            >
              <div className="W-1/2 bg-white border-2  rounded origin-center rotate-45 border-lime-500">
                <GiReturnArrow className="p-1 origin-center -rotate-45  scale-x-[1] text-5xl font-semibold text-lime-500" />
              </div>
            </ServiceCard>
          </div>
          <div className="md:col-span-2 lg:col-span-1 md:flex md:justify-center w-full">
            <ServiceCard title="Money Back Guarnteed" btnTitle="Read more" >
            <div className="W-1/2 bg-white border-2  rounded origin-center rotate-45 border-blue-950">
                <LiaRupeeSignSolid className="p-1 origin-center -rotate-45  scale-x-[1] text-5xl font-semibold text-blue-950" />
              </div>
            </ServiceCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Services);
