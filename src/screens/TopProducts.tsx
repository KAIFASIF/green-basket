import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import fruits from "../assets/images/fruits.png";
import dairy from "../assets/images/dairy.jpeg";
import Veggies from "../assets/images/vegetables.jpeg";

const TopProducts = () => {
  return (
    <div className="flex flex-col py-10">
      {" "}
      <div className="flex justify-center">
        <p className="font-semibold text-3xl text-blue-950"> Top Products</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        <div>
          <Card title="Fruits & Nuts" price="400" image={fruits} />
        </div>
        <div>
          <Card title="Dairy Products" price="200" image={dairy} />
        </div>
        <div className="md:col-span-2 lg:col-span-1 flex justify-center">
          <Card title="Vegetables" price="600" image={Veggies} />
        </div>
      </div>
      <div className="flex justify-center mt-10">
      <Button title="Read more" />
      </div>
    </div>
  );
};

export default React.memo(TopProducts);
