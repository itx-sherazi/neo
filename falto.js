"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdPlayArrow } from "react-icons/md";
import { motion } from "framer-motion";
import { AiOutlineRight } from "react-icons/ai";
import Slider from "react-slick";
import Image from "next/image";
import dynamic from "next/dynamic";
const services = [
  {
    id: 1,
    title: "Drone Cinematography",
    image: "/img/serviceimg/dron.png",
  },
  {
    id: 2,
    title: "Network Infrastructure",
    image: "/img/serviceimg/network.png",
  },
  {
    id: 3,
    title: "Digital Marketing",
    image: "/img/serviceimg/digitalmarkiting.png",
  },
];
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);
const MotionH1 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h1),
  { ssr: false }
);
const MotionH2 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h2),
  { ssr: false }
);
const MotionH3 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h3),
  { ssr: false }
);
const MotionH4 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h4),
  { ssr: false }
);

const Page = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="absolute left-4 top-[40%] -translate-y-1/2 w-10 h-10 flex items-center justify-center z-20 md:-left-12 md:text-gray-700 text-white"
      aria-label="Previous service"
    >
      <ChevronLeft size={36} />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="absolute right-4 top-[40%] -translate-y-1/2 w-10 h-10 flex items-center justify-center z-20 md:-right-12 md:text-gray-700 text-white"
      aria-label="Next service"
    >
      <ChevronRight size={36} />
    </button>
  );

  const textAnimation = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: false, amount: 0.2 },
  };

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden pt-8 text-white bg-[#001420]">
        {/* background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/serviceimg/bgweb.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-[#001420] bg-opacity-80"></div>
        </div>

        <div className="container relative z-10 mt-16 py-7 mb-12 px-4">
          <div className="flex justify-center flex-wrap">
            {/* Left Content Column */}
            <div className="w-full lg:w-[700px] lg:mb-0">
              <div className="lg:mr-[30px]">
                <MotionH1
                  {...textAnimation}
                  className="relative inline-block mt-5 text-[20px] font-medium text-white font-montserrat"
                >
                  <span className="relative z-10 pr-2">BUILD MOMENTUM</span>
                  <svg
                    className="absolute bottom-[-18px] left-0 w-full h-18 text-emerald-500"
                    viewBox="0 0 210 40"
                    fill="none"
                    stroke="#20c18c"
                    strokeWidth="2"
                  >
                    <motion.path
                      d="M1.907 23.971C41.231 26.0 87.833 30.047 203.869 25.816"
                      strokeDasharray="202"
                      strokeDashoffset="202"
                      initial={{ strokeDashoffset: 202 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 1 }}
                    />
                    <motion.path
                      d="M199.331 26.16C143.726 23.421 84.627 22.92 -2.42 23.93"
                      strokeDasharray="201.8"
                      strokeDashoffset="201.8"
                      initial={{ strokeDashoffset: 201.8 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 1 }}
                    />
                  </svg>
                </MotionH1>

                <MotionH1
                  {...textAnimation}
                  className="text-[48px] font-extrabold text-white font-montserrat tracking-tight mb-2 mt-6 shadow-md"
                >
                  Website Design and <br /> Hosting
                </MotionH1>

                <MotionDiv {...textAnimation}>
                  <h2 className="pb-2 text-[20px] lg:text-[23px] leading-[1.8em] text-white font-semibold font-montserrat">
                    Our website designers are here to provide all digital needs
                    for your business. We understand your website should be an
                    essential tool used to extend your brand, designed to target
                    the right message to your audience.
                  </h2>
                </MotionDiv>

                <MotionH3
                  {...textAnimation}
                  className="pb-3 pt-3 text-[21px] font-extrabold text-white text-shadow-md my-2 font-montserrat"
                >
                  A poorly designed, underperforming, or outdated website can
                  make or break a business.
                </MotionH3>

                <MotionH2
                  {...textAnimation}
                  className="pb-6 text-[20px] font-light text-white text-shadow-md"
                >
                  Our hosting services include lightning-fast download and
                  upload speeds. However, we are flexible to all development
                  needs and can configure your site to external hosting
                  providers.
                </MotionH2>
                <MotionH4
                  {...textAnimation}
                  className="pb-5 text-[29px] lg:text-[29px] md:text-[26px] sm:text-[22px] font-extrabold text-white text-shadow-md"
                >
                  Capabilities
                </MotionH4>

                <MotionH2
                  {...textAnimation}
                  className="pb-2 text-[18px] lg:text-[22px] md:text-[14px] sm:text-[12px] text-white leading-relaxed text-shadow-md"
                >
                  We design your website or brand identity to reflect your
                  brand&apos;s strategy, identity, and goals so that you occupy
                  a prominent position in the market.
                </MotionH2>
              </div>
            </div>

            {/* Right Side Column */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full px-6 mt-16 lg:w-[35%] lg:block hidden"
            >
              <div className="p-6 mb-6 rounded bg-[#001420] bg-opacity-50">
                <h2 className="mb-3 text-xl font-extrabold">
                  Looking for a new web design agency?
                </h2>
                <p className="mb-4 text-gray-300">
                  {" "}
                  Our catalog is an extension of our design, engineering, and
                  delivery expertise to showcase the true capability of our
                  team.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-2 font-semibold text-[14px] text-[#20C18C] uppercase bg-white rounded transition-all group"
                >
                  VIEW OUR PORTFOLIO
                </a>
              </div>
            </MotionDiv>
          </div>

          {/* Services Section */}
          <div className="md:pl-12  md:ml-6 md:pt-6 lg:mt-14">
            <div className="grid grid-cols-1 md:flex md:gap-6">
              {[
                {
                  title: "Development Process",
                  items: [
                    "Research",
                    "Discovery",
                    "Copywriting",
                    "UI/UX Design",
                    "SEO",
                  ],
                },
                {
                  title: "Technology Stack",
                  items: [
                    "HTML/CSS",
                    "SQL/NOSQL",
                    "PHP",
                    "Bootstrap",
                    "Wordpress",
                    "More",
                  ],
                },
                {
                  title: "Experience With",
                  items: [
                    "Ecommerce",
                    "Restaurants",
                    "Medical Offices",
                    "Small Businesses",
                    "Real-estate",
                    "Blogs",
                    "More",
                  ],
                },
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="p-4 w-full md:w-[220px]"
                >
                  <h3 className="text-[21px] font-bold text-white font-montserrat shadow-md tracking-tight leading-tight mb-3">
                    {section.title}
                  </h3>

                  <ul className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={`${section.title}-${itemIndex}`}
                        className="flex items-center"
                      >
                        <span className="flex items-center justify-center w-2 h-2 mr-2 text-white">
                          <MdPlayArrow className="text-xs" />
                        </span>
                        <p className="text-[20px] text-white font-montserrat shadow-md">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile CTA Section */}
          <div className=" w-[300px] ml-4 lg:hidden bg-[#001420] bg-opacity-50 rounded-lg mt-6">
            <div className="p-5">
              <h2 className="mb-3 text-3xl font-bold  text-gray-100 leading-tight">
                Looking for a new web design agency?
              </h2>
              <p className="mb-3 text-gray-300 text-sm leading-relaxed">
                Our catalog showcases our design, engineering, and delivery
                expertise.
              </p>
              <a
                href="#"
                className="inline-block px-5 py-2 text-sm font-medium text-emerald-500 uppercase bg-white rounded-md"
              >
                VIEW PORTFOLIO
              </a>
            </div>

            <div className="flex items-center justify-center p-3">
              <div className="flex items-center w-full max-w-xs">
                <div className="flex-grow border-t border-gray-600"></div>
                <span className="mx-4 text-sm text-gray-300 font-medium">
                  or
                </span>
                <div className="flex-grow border-t border-gray-600"></div>
              </div>
            </div>

            <div className="p-5">
              <h2 className="mb-3  text-3xl font-bold text-gray-100 leading-tight">
                Let&apos;s Start a web design conversation
              </h2>
              <p className="mb-3 text-gray-300 text-sm leading-relaxed">
                Let us know your requirements and start your digital
                transformation.
              </p>
              <a
                href="#"
                className="inline-block px-14 py-2 text-sm font-medium text-white bg-[#38b2ac] rounded-md"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Desktop Contact Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:block hidden pt-8"
          >
            <a
              href="#"
              className="w-full lg:w-[1000px] h-10 items-center justify-center flex mx-auto py-2 text-[14px] font-[500] text-white transition-all rounded bg-[#38b2ac] hover:bg-[#38b2ac] group relative"
            >
              <span className="flex justify-center items-center gap-2">
                <span>Contact Us</span>
                <AiOutlineRight className="h-4 w-5 mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </span>
            </a>
          </motion.div>
        </div>
      </section>
      {/* Carousal Section */}
      <section className="py-12 bg-[#001420] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative text-4xl font-bold mb-10 inline-block pb-1"
          >
            <span className="relative">
              Related Services
              <svg
                className="absolute bottom-[-8px] left-0 w-full h-20 pt-7 text-emerald-500"
                viewBox="0 0 210 40"
                fill="none"
                stroke="#20c18c"
                strokeWidth="2"
              >
                <motion.path
                  d="M-0.864 32.104C79.132 36.392 157.123 35.006 210.394 31.261"
                  strokeDasharray="211"
                  strokeDashoffset="211"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                />
                <motion.path
                  d="M210.727 34.514C167.1 30.495 126.987 31.483 -0.62 34.382"
                  strokeDasharray="211"
                  strokeDashoffset="211"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                />
              </svg>
            </span>
          </motion.h1>

          <div className="relative">
            <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />

            <Slider ref={sliderRef} {...settings}>
              {services.map((service) => (
                <div key={service.id} className="px-2">
                  <div
                    className="rounded-lg overflow-hidden relative shadow-lg"
                    style={{ width: "100%", minHeight: "280px" }}
                  >
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-[#38b2ac] text-white text-sm px-3 py-1 rounded-full">
                        Related Service
                      </span>
                    </div>
                    <div className="relative w-full h-64">
                      <Image
                        src={service.image}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>

                    <div className="p-2 flex justify-center bg-[#001420] ">
                      <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
