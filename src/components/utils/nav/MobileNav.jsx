import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { data } from "@/data/data";

export default function MobileNav() {
  return (
    <nav className="flex items-center justify-between md:hidden px-2 relative">
      <div className="relative w-[100px]">
        <Image alt="logo" src={"/img/logo.png"} width={100} height={100} />
      </div>
      <MobileMenu />
    </nav>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Menu onClick={() => setOpen((prev) => !prev)} />
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 w-full h-full bg-[#141414] flex flex-col items-center justify-center text-white z-50"
          >
            <div className="absolute top-5 left-5 w-[100px]">
              <Image
                alt="logo"
                src={"/img/logo.png"}
                width={100}
                height={100}
              />
            </div>
            <div className="absolute top-5 right-5">
              <X
                onClick={() => setOpen(false)}
                className="text-white cursor-pointer"
                size={32}
              />
            </div>

            <ul className="text-lg font-medium space-y-6 text-center">
              <li>
                <Link
                  href="/"
                  className={`block px-4 py-2 transition-colors duration-300 ${
                    pathname === "/"
                      ? "text-teal-300"
                      : "text-white hover:text-gray-300"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block px-4 py-2 transition-colors duration-300 ${
                    pathname === "/about"
                      ? "text-teal-300"
                      : "text-white hover:text-gray-300"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <div
                  className={`flex items-center justify-center gap-1 px-4 py-2 cursor-pointer transition-colors duration-300 ${
                    pathname === "/services"
                      ? "text-teal-300"
                      : "text-white hover:text-gray-300"
                  }`}
                  onClick={() => setShowServices((prev) => !prev)}
                >
                  Services
                </div>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block px-4 py-2 transition-colors duration-300 ${
                    pathname === "/contact"
                      ? "text-teal-300"
                      : "text-white hover:text-gray-300"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <AnimatePresence mode="wait">
              {showServices && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="fixed inset-0 bg-[#141414] overflow-auto z-50 pt-16"
                >
                  <div className="absolute top-5 left-5 w-[100px]">
                    <Image
                      alt="logo"
                      src={"/img/logo.png"}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="absolute top-5 right-5">
                    <X
                      onClick={() => setShowServices(false)}
                      className="text-white cursor-pointer"
                      size={32}
                    />
                  </div>
                  <div className="px-4 pt-8">
                    <h2 className="text-2xl font-primary font-semibold text-teal-300 mb-4">
                      Services
                    </h2>
                    <div className="flex flex-col gap-6 overflow-y-auto max-h-[70vh] pb-20">
                      {data.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={item.path}
                            onClick={() => {
                              setShowServices(false);
                              setOpen(false);
                            }}
                          >
                            <div className="bg-[#001420]  p-4 rounded-lg transition-all duration-300">
                              <p className="flex items-center gap-2 font-secondary font-medium text-white mb-2">
                                <span className="text-teal-300">
                                  {item.icon}
                                </span>{" "}
                                {item.name}
                              </p>
                              <p className="text-sm text-gray-400">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
