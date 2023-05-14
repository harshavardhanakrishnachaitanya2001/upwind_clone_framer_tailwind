import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#202942] text-[15px] border-t border-[#3d4349]  text-[#adb5bd] relative py-[30px]">
      <div className="container text-center">
        <div className="flex items-center">
          <div className="text-sm w-8/12">
            <p className="mb-0">
              &copy; 2023 Upwind. Design & Development with love by shreethemes.
            </p>
          </div>

          <div className="text-right">
            <ul className="text-sm space-x-3">
              <li className="mb-1 inline-block p-2 border-[0.5px] rounded border-gray-600">
                <a href="https://www.google.com" className="rounded">
                  <AiOutlineShoppingCart className="align-middle italic w-[15px] h-[15px]" />
                </a>
              </li>

              <li className="mb-1 inline-block p-2 border-[0.5px] rounded border-gray-600">
                <a href="https://www.google.com" className="rounded">
                  <AiOutlineShoppingCart className="align-middle italic w-[15px] h-[15px]" />
                </a>
              </li>

              <li className="mb-1 inline-block p-2 border-[0.5px] rounded border-gray-600">
                <a href="https://www.google.com" className="rounded">
                  <AiOutlineShoppingCart className="align-middle italic w-[15px] h-[15px]" />
                </a>
              </li>

              <li className="mb-1 inline-block p-2 border-[0.5px] rounded border-gray-600">
                <a href="https://www.google.com" className="rounded">
                  <AiOutlineShoppingCart className="align-middle italic w-[15px] h-[15px]" />
                </a>
              </li>

              <li className="mb-1 inline-block p-2 border-[0.5px] rounded border-gray-600">
                <a href="https://www.google.com" className="rounded">
                  <AiOutlineShoppingCart className="align-middle italic w-[15px] h-[15px]" />
                </a>
              </li>

              <li className="mb-1 inline-block p-2 border-[0.5px] rounded border-gray-600">
                <a href="https://www.google.com" className="rounded">
                  <AiOutlineShoppingCart className="align-middle italic w-[15px] h-[15px]" />
                </a>
              </li>

              <li className="mb-1 inline-block p-2 border-[0.5px] rounded border-gray-600">
                <a href="https://www.google.com" className="rounded">
                  <AiOutlineShoppingCart className="align-middle italic w-[15px] h-[15px]" />
                </a>
              </li>

              <li className="mb-1 inline-block p-2 border-[0.5px] rounded border-gray-600">
                <a href="https://www.google.com" className="rounded">
                  <AiOutlineShoppingCart className="align-middle italic w-[15px] h-[15px]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
