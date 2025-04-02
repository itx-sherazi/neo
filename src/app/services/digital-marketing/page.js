"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdPlayArrow } from "react-icons/md";
import { motion } from "framer-motion"; // Import motion
import { AiOutlineRight } from "react-icons/ai";
import Slider from "react-slick";
import Image from "next/image";
import dynamic from "next/dynamic";
const services = [
  {
    id: 1,
    title: "Web Design and Hosting",
    image: "/img/serviceimg/webdesign.webp",
  },
  {
    id: 2,
    title: "Drone Cinematography",
    image: "/img/serviceimg/dron.png",
  },
  {
    id: 3,
    title: "Network Infrastructure",
    image: "/img/serviceimg/network.png",
  },
];
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
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
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
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
    viewport: {
      once: true,
      amount: 0.3,
    },
  };

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden pt-8 text-white bg-[#001420]">
        {/* background image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="et_parallax_bg absolute inset-0 w-full"
            style={{
              backgroundImage: 'url("/img/serviceimg/bgdigital.jpg")',
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.9) 100%)",
              }}
            ></div>
          </div>
        </div>

        <div className=" relative z-10 md:mt-20 py-7 mb-12 px-4">
          <div className="flex justify-center flex-wrap">
            {/* Left Content Column */}
            <div className="w-full lg:w-3/6 lg:mb-0">
              <div className="lg:mr-[30px]">
                <MotionH1
                  {...textAnimation}
                  className="relative inline-block mt-5 text-[22px] font-medium text-white font-montserrat"
                >
                  <span className="relative z-10 pr-2">Build Your Brand</span>
                  <svg
                    className="absolute bottom-[-14px] left-0 w-[200px] h-18 text-emerald-500"
                    viewBox="0 0 210 40"
                    fill="none"
                    stroke="#20c18c"
                    strokeWidth="2"
                  >
                    <path
                      d="M0.6524998052045703 29.55421153176576 C47.04466334928122 26.717087206822384, 92.08576316502536 27.58164050934886, 158.56310806702822 25.879164163954556"
                      fill="none"
                      stroke="#20c18c"
                      strokeWidth="2"
                    />
                    <path
                      d="M156.1078063296154 24.008997510187328 C118.90908714758213 24.42131695494509, 84.21842937454542 28.8955397640214, 1.2716061221435666 28.43523649405688"
                      fill="none"
                      stroke="#20c18c"
                      strokeWidth="2"
                    />
                  </svg>
                </MotionH1>

                <MotionH1
                  {...textAnimation}
                  className="pb-4 text-[43px] font-extrabold text-white leading-[1.3em] font-montserrat tracking-tight mb-2 mt-3 shadow-md"
                >
                  Digital Marketing
                </MotionH1>

                <MotionDiv {...textAnimation}>
                  <h2 className="pb-4 text-[20px] lg:text-[23px] md:text-[16px] sm:text-[14px] leading-[1.8em] text-white font-semibold font-montserrat">
                    <p className="text-shadow-md">
                      Our Digital Marketing team is ready to take your business
                      to the next level.
                    </p>
                  </h2>
                </MotionDiv>

                <MotionH3
                  {...textAnimation}
                  className="pb-3 text-[21px] lg:text-[23px] md:text-[18px] sm:text-[16px] font-bold text-white leading-[1.3em] text-shadow-md my-2 font-montserrat"
                >
                  Businesses of all kinds have seen new opportunities for growth
                  thanks to the increasing use of social media and other web
                  technologies, but many struggle to get their message out.
                </MotionH3>

                <MotionH2
                  {...textAnimation}
                  className="mb-9 mt-5 text-[20px] lg:text-[23px] md:text-[18px] sm:text-[16px] font-semibold text-white leading-[1.8em] drop-shadow-md"
                >
                  Be heard through the noise with our marketing services. These
                  services provide you access to our content creators,
                  photographers, digital designers, and more. Let us handle
                  generating traffic to your business or project, so you can
                  focus on operations.
                </MotionH2>

                <MotionH4
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                  className="pb-5 text-[29px] lg:text-[29px] md:text-[26px] sm:text-[22px] font-extrabold text-white text-shadow-md"
                >
                  Capabilities
                </MotionH4>

                <MotionH2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: false }}
                  className="pb-2 text-[18px] lg:text-[20px] md:text-[14px] sm:text-[12px] font-semibold text-white leading-relaxed text-shadow-md"
                >
                  We have experience transforming brands and can help you too!
                  All of our clients are provided with before and after
                  analytics to demonstrate the accelerated business growth
                  achieved with the package selected.
                </MotionH2>
                <p className="text-white text-sm ml-2">
                  (Actual Results May Vary*)
                </p>
              </div>
            </div>

            {/* Right Side Column */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full px-6 mt-1 lg:w-[34%] lg:h-full lg:block hidden"
            >
              <div className="p-6 mb-6 rounded bg-black bg-opacity-50">
                <h2 className="mb-3 text-2xl font-extrabold">
                  We speak marketing so you don&apos;t have to.
                </h2>
                <p className="mb-4 mt-4 text-white font-secondary">
                  View some of our testimonials below
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-2 font-[500] text-[14px] text-[#20C18C] uppercase transition-all rounded bg-white group relative"
                >
                  <span className="flex items-center font-semibold">
                    <span>VIEW OUR PORTFOLIO</span>
                    <AiOutlineRight className="h-4 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                  </span>
                </a>
              </div>
            </MotionDiv>
          </div>

          {/* Services Section */}
          <div className="md:pl-20 md:ml-6  md:pt-6 lg:mt-14">
            <div className="grid grid-cols-1 md:flex md:gap-6">
              {[
                {
                  title: " Project Communication",
                  items: [
                    "Personalized service",
                    "Budget Planning",
                    "Requirement Building",
                    "Analytics Deliveries",
                    "Targeted Campaigns",
                    "Search Engine",
                    "Optimization",
                  ],
                },
                {
                  title: "Options",
                  items: [
                    "Photography",
                    "Videography",
                    "Social Content",
                    "Creation",
                    "Platform Management",
                    "Customer",
                    "Communication",
                    "More",
                  ],
                },
                {
                  title: "Platforms",
                  items: [
                    "Websites",
                    "Google Ads (Business)",
                    "Instagram",
                    "Facebook",
                    "Mailchimp",
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
                  className="p-4 w-full md:w-[270px]"
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
          <div className="w-full px-4 lg:hidden bg-black bg-opacity-50 rounded-lg ">
            <div className="p-5">
              <h2 className="mb-3 p-4 text-lg font-bold text-gray-100 leading-tight">
                We speak marketing so you don&apos;t have to.
              </h2>
              <p className="mb-3 pl-4 pr-4 text-gray-300 text-sm leading-relaxed">
                View some of our testimonials below
              </p>
              <a
                href="#"
                className="inline-block ml-5 px-6 py-2 font-[500] text-[14px] text-[#20C18C] uppercase transition-all rounded bg-white"
              >
                VIEW OUR PORTFOLIO
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
              <h2 className="mb-3 text-lg pl-5 pr-4 font-bold text-gray-100 leading-tight">
                Let&apos;s start a marketing converstion.
              </h2>
              <p className="mb-3 text-gray-300 pl-5 text-sm leading-relaxed">
                Like what you see? Start working with us by providing your needs
                and details.
              </p>
              <a
                href="#"
                className="inline-block px-6 ml-5 py-2 font-[500] text-[14px] text-[#20C18C] uppercase transition-all rounded bg-white"
              >
                CONTACT US
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
                  d="M-2.6129780051317275 30.644895129283494 C72.30817526188751 33.9999915060291, 141.3690497085347 33.253687148975686, 209.43457981487168 34.67660060115552"
                  strokeDasharray="212.096"
                  strokeDashoffset="212.096"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <motion.path
                  d="M210.63320280598697 30.985419839122933 C141.52703257478063 29.601489218630086, 70.78033455151709 31.54190993947984, -0.1062767907725801 30.131298177699403"
                  strokeDasharray="210.747"
                  strokeDashoffset="210.747"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
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
                    <div className="p-2 flex justify-center bg-[#001420]">
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
