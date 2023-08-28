import React from "react";

interface buttonTypes {
  btnClass?: any;
  title: string;
}

const Button: React.FC<buttonTypes> = ({ btnClass, title }) => {
  return (
    <button
      className={` p-2 font-semibold rounded 
  ${btnClass ? btnClass : "bg-blue-950 text-white"}`}
    >
      {title}
    </button>
  );
};

export default React.memo(Button);
