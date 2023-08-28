import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

type menuOptionsTypes = {
  id: number;
  label: string;
};
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const menuOptions: menuOptionsTypes[] = [
    { id: 1, label: "About us" },
    { id: 2, label: "Product" },
    { id: 3, label: "Blog" },
    { id: 4, label: "Shop" },
    { id: 5, label: "Gallary" },
    { id: 6, label: "Contact us" },
  ];
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  return (
    <div className="flex p-4 bg-white shadow-xl justify-between fixed z-20 w-full"  onClick={toggleDropdown}>
      <div>
        {" "}
        <h1 className="font-semibold text-2xl text-lime-600">Green Basket</h1>
      </div>

      <div className=" md:hidden mt-2 right-0">
        <button
          onClick={toggleDropdown}
          className="focus:outline-none lg:hidde"
        >
          <AiOutlineMenu className="w-6 h-6 text-blue-950" />
        </button>
        {isDropdownOpen && (
          <div className="absolute top-16 right-0 z-20 bg-white border border-gray-200 shadow-md rounded-md py-2">
            <ul className="flex flex-col gap-y-4 p-5">
              {menuOptions.length > 0 &&
                menuOptions.map((ele: menuOptionsTypes) => (
                  <li  onClick={toggleDropdown}
                    key={ele.id}
                    className="font-semibold hover:cursor-pointer hover:text-lime-600 text-gray-600"
                  >
                    {ele?.label}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      <div className="hidden md:block mt-2 lg:flex-1">
        <div className="flex justify-center ">
          <ul className="flex space-x-4">
            {menuOptions.length > 0 &&
              menuOptions.map((ele: any) => (
                <li className="font-semibold hover:cursor-pointer hover:text-lime-600 text-gray-600">
                  {" "}
                  {ele?.label}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Navbar);
