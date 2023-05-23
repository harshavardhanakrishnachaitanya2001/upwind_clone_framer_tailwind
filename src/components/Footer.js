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
    <footer className="bg-[#202942] text-[15px] border-t border-[#3d4349]  text-[#adb5bd] relative androidPhones:py-00 lg:py-[30px]">
      <div className="text-center androidPhones:py-[30px] lg:py-0">
        <div className="flex lg:flex-row androidPhones:space-y-10 lg:space-y-0 androidPhones:flex-col items-center">
          <div className="text-sm w-8/12">
            <p className="mb-0">
              &copy; 2023 Upwind. Design & Development with ❤️ by shreethemes.
            </p>
          </div>

          <div className="text-right androidPhones:w-screen lg:w-auto">
            <ul className="text-sm space-x-3 androidPhones:flex androidPhones:justify-start lg:block">
              <motion.li
                whileHover={{
                  backgroundColor: "#ff5e14",
                  color: "#fff",
                }}
                className="mb-1 inline-block p-2 border-[0.5px] rounded border-gray-600"
              >
                <a href="https://www.google.com" className="rounded">
                  <AiOutlineShoppingCart className="align-middle italic lg:w-[15px] lg:h-[15px] androidPhones:w-[10px] androidPhones:h-[10px]" />
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
