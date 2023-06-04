import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlineShoppingCart,
  AiOutlineDribbble,
  AiOutlineBehance,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#202942] text-[15px] border-t border-[#3d4349]  text-[#adb5bd] relative lg:py-[30px]">
      <div className=" androidPhones:py-[30px] lg:py-0">
        <div className="flex androidPhones:flex-col sm:flex-row lg:flex-row androidPhones:space-y-10 sm:space-y-0 items-center">
          <div className="text-sm sm:pl-20 md:pl-0 md:w-auto sm:w-7/12 lg:w-8/12">
            <p className="mb-0 androidPhones:pl-0 androidPhones:text-center sm:justify-start sm:text-left androidPhones: androidPhones:px-0  sm:px-3">
              &copy; 2023 Upwind. Design & Development with ❤️ by shreethemes.
            </p>
          </div>

          <div className="text-right androidPhones:text-center androidPhones:w-screen sm:w-auto lg:w-auto">
            <ul className="text-sm space-x-3 md:flex androidPhones:space-x-1 androidPhones:justify-start sm:w-[175px] lg:w-auto lg:block">
              <motion.li
                whileHover={{
                  backgroundColor: "#ff5e14",
                  color: "#fff",
                }}
                className="mb-1 inline-block p-2 border-[0.5px] rounded border-gray-600"
              >
                <a href="https://www.google.com" className="rounded">
                  <AiOutlineShoppingCart className="align-middle italic lg:w-[15px] lg:h-[15px] androidPhones:w-[10px] sm:w-[15px] sm:h-[15px] androidPhones:h-[10px]" />
                </a>
              </motion.li>

              <motion.li
                whileHover={{
                  backgroundColor: "#ff5e14",
                  color: "#fff",
                }}
                className="mb-1 inline-block p-2 border-[0.5px] rounded border-gray-600"
              >
                <a href="https://www.google.com" className="rounded">
                  <AiOutlineDribbble className="align-middle italic w-[15px] h-[15px]" />
                </a>
              </motion.li>

              <motion.li
                whileHover={{
                  backgroundColor: "#ff5e14",
                  color: "#fff",
                }}
                className="mb-1 inline-block p-2 border-[0.5px] rounded border-gray-600"
              >
                <a href="https://www.google.com" className="rounded">
                  <AiOutlineBehance className="align-middle italic w-[15px] h-[15px]" />
                </a>
              </motion.li>

              <motion.li
                whileHover={{
                  backgroundColor: "#ff5e14",
                  color: "#fff",
                }}
                className="mb-1 inline-block p-2 border-[0.5px] rounded border-gray-600"
              >
                <a href="https://www.google.com" className="rounded">
                  <AiFillLinkedin className="align-middle italic w-[15px] h-[15px]" />
                </a>
              </motion.li>

              <motion.li
                whileHover={{
                  backgroundColor: "#ff5e14",
                  color: "#fff",
                }}
                className="mb-1 inline-block p-2 border-[0.5px] rounded border-gray-600"
              >
                <a href="https://www.google.com" className="rounded">
                  <AiFillFacebook className="align-middle italic w-[15px] h-[15px]" />
                </a>
              </motion.li>

              <motion.li
                whileHover={{
                  backgroundColor: "#ff5e14",
                  color: "#fff",
                }}
                className="mb-1 inline-block p-2 border-[0.5px] rounded border-gray-600"
              >
                <a href="https://www.google.com" className="rounded">
                  <AiOutlineInstagram className="align-middle italic w-[15px] h-[15px]" />
                </a>
              </motion.li>

              <motion.li
                whileHover={{
                  backgroundColor: "#ff5e14",
                  color: "#fff",
                }}
                className="mb-1 inline-block p-2 border-[0.5px] rounded border-gray-600"
              >
                <a href="https://www.google.com" className="rounded">
                  <AiOutlineTwitter className="align-middle italic w-[15px] h-[15px]" />
                </a>
              </motion.li>

              <motion.li
                whileHover={{
                  backgroundColor: "#ff5e14",
                  color: "#fff",
                }}
                className="mb-1 inline-block p-2 border-[0.5px] rounded border-gray-600"
              >
                <a href="https://www.google.com" className="rounded">
                  <AiOutlineMail className="align-middle italic w-[15px] h-[15px]" />
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
