import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="flex flex-col py-6">
      <div className="flex justify-center">
        <p className="font-semibold text-3xl text-blue-950">Our services</p>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-20">
        <div>
          <ServiceCard title="Free Home Delivery" btnTitle="Read more" />
        </div>
        <div>
          <ServiceCard
            dividerClass="border-lime-400 bg-lime-400"
            cardIconBorderClass="bg-lime-400 border-lime-700"
            cardIconClass="text-white"
            title="30 Days Return Services"
            btnTitle="Read more"
            btnClass="bg-lime-400 text-white"
          />
        </div>
        <div>
          <ServiceCard title="Money Back Guarnteed" btnTitle="Read more" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Services);

