"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdPlayArrow } from "react-icons/md";
import { motion } from "framer-motion"; // Import motion
import { AiOutlineRight } from "react-icons/ai";
import Slider from "react-slick";
const services = [
  {
    id: 1,
    title: "Web Design and Hosting",
    image:
      "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1709881319/catalog/1435523690771054592/vz9dsixirjqfq5bnab96.webp",
  },
  {
    id: 2,
    title: "Drone Cinematography",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB53QrfZ7DR_v_a01p48T9z8scz-VZiPVyyDjjHK9l3PMWwtY4",
  },
  {
    id: 3,
    title: "Network Infrastructure",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRoXv3Azd8HiJxg5-a8LJQsOCPATV3Vq2xHk06arIV4-deAUcMG",
  },
];

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
      <section className="relative overflow-hidden pt-8 text-white bg-black">
        {/* background image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="et_parallax_bg absolute inset-0 w-full"
            style={{
              backgroundImage:
                'url("https://neotechdevs.com/wp-content/uploads/2022/08/reports-scaled.jpg")',
              height: "1391.76px",
              transform: "translate(0px, 100px)",
              backgroundPosition: "top left",
              backgroundSize: "100% 100%",
              backgroundSize: "cover",
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
              <motion.h1
  {...textAnimation}
  className="relative inline-block mt-5 text-[30px] text-white"
>
  <span className="relative z-10 pr-2">COMPLIANCE SIMPLIFIED</span>
  
  <svg
    className="absolute bottom-[-10px] left-0 text-emerald-500"
    style={{
      width: "100%", 
      height: "70px", 
     
    }}
    viewBox="0 0 210 40"
    fill="none"
    stroke="#20c18c"
    strokeWidth="2"
  >
    <path
      d="M-0.40488177900627903 38.957866487828106 C77.89434224715974 36.424522708148594, 160.06540869933815 37.55047628751133, 351.89434202074364 36.60521078555538"
      fill="none"
      stroke="#20c18c"
      strokeWidth="2"
    />
    <path
      d="M352.7535829531686 38.800345643166175 C216.70154140339062 35.72595543169615, 82.94478999604122 36.663951510096815, -0.9818106419715175 38.498841352173656"
      fill="none"
      stroke="#20c18c"
      strokeWidth="2"
    />
  </svg>
</motion.h1>


                <motion.h1
                  {...textAnimation}
                  className="pb-4 text-[28px]   text-[#3e413e] leading-[1.3em]  mb-2 mt-10  "
                >
                  Auditing & Pen Testing
                </motion.h1>

                <motion.div {...textAnimation}>
                  <h2 className="pb-4 text-[20px] text-[#3e413e] lg:text-[23px] md:text-[16px] sm:text-[14px] leading-[1.8em]  font-semibold font-montserrat">
                    <p className="text-shadow-md font-bold">
                      Are your Devices and Network Complaint? Bring our Pen
                      Testing Expertise to verify Compliance, and deliver a full
                      audit report.
                    </p>
                  </h2>
                </motion.div>

                <motion.h3
                  {...textAnimation}
                  className=" pb-3 text-[21px] lg:text-[23px] md:text-[18px] sm:text-[16px] font-semibold text-[#3e413e] leading-[1.3em] text-shadow-md my-2 font-montserrat"
                >
                  95% of businesses have no idea their network has the ability
                  to be compromised in a matter of minutes. Let us deliver a
                  full audit and pen test your network and devices to ensure you
                  can protect your data.
                </motion.h3>

                <motion.h2
                  {...textAnimation}
                  className="mb-9 mt-5 text-[20px] lg:text-[24px] md:text-[18px] sm:text-[16px]  text-[#3e413e] "
                >
                  Our Pen Testers are certified to deliver results from ensuring
                  CVEs are not present, to recommending solutions for weak
                  encryption, password rotation, and more.
                  <p className="text-white text-sm italic">(Results may vary *)</p>
                </motion.h2>

                <motion.h4
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                  className="pb-5 text-[29px] lg:text-[18px] md:text-[26px] sm:text-[22px] text-[#3e413e]"
                >
                  Capabilities
                </motion.h4>

                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: false }}
                  className="pb-2 text-[18px] lg:text-[26px] md:text-[14px] sm:text-[12px] font-bold text-[#3e413e] leading-relaxed text-shadow-md"
                >
                  Full open source pen testing delivered. Need more? We can
                  deliver Qualys Scans too.
                </motion.h2>
              </div>
            </div>

            {/* Right Side Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full  px-6  mt-1 lg:w-[34%]  lg:block hidden"
            >
              <div className=" mb-6 rounded bg-black/40 h-[230px] bg-opacity-50">
                <h2 className="mb-3 text-2xl  text-[#3e413e]">
                  {" "}
                  Looking for Audit or Pen Test Reports?
                </h2>
                <p className="mb-4 mt-4 text-[#3e413e] font-secondary">
                  Our Team is ready to deliver an up-to-date report on your
                  current infrastructure condition. On-Prem, Cloud, and more, we
                  handle it all.
                </p>
                <a
                  href="#"
                  className=" py-2  w-[100px] flex items-center justify-center text-white transition-all duration-300 rounded border-2 border-white group relative 
     hover:bg-white/15 hover:border-[#444844] hover:w-[180px]"
                >
                  <span className="flex justify-center items-center font-semibold ">
                    <span className="pl-5">INQUIRE</span>
                    <AiOutlineRight className="h-[20px] font-semibold w-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Services Section */}
          <div className="md:pl-20 md:ml-6 md:pt-6 lg:mt-4 lg:mb-5">
  <div className="grid grid-cols-1 md:flex md:gap-6">
    {[
      {
        title: "Auditing",
        items: [
          "Network",
          "PCs",
          "Servers",
          "Wi-Fi",
          "Cloud Infrastructure",
          "Hybrid Cloud",
          "More",
        ],
      },
      {
        title: "Pen Testing",
        items: [
          "Active",
          "Passive",
          "Dictionary",
          "Kali",
          "Network Sniffing",
          "Exploit Exfiltration",
          "More",
        ],
      },
      {
        title: "Reports",
        items: [
          "Generated Audits",
          "Post Pen-Test",
          "Remediations",
          "Vulnerability Discovery",
          "Compliance",
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
        <h3 className="text-[16px]  text-[#666966] font-montserrat  tracking-tight leading-tight mb-3">
          {section.title}
        </h3>

        <ul className="space-y-1">
          {section.items.map((item, itemIndex) => (
            <li key={`${section.title}-${itemIndex}`} className="flex items-center">
              <span className="flex items-center justify-center w-2 h-2 mr-2 text-white">
                <MdPlayArrow className="text-xs" />
              </span>
              <p className="text-[16px] text-[#666966] font-montserrat shadow-md">
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
              <h2 className="mb-3 p-4 text-lg font-bold text-[#3e413e] leading-tight">
                Looking for Audit or Pen Test Reports?
              </h2>
              <p className="mb-3 pl-4 pr-4 text-[#3e413e]  text-sm leading-relaxed">
                Our Team is ready to deliver an up-to-date report on your
                current infrastructure condition. On-Prem, Cloud, and more, we
                handle it all.
              </p>
              <a
                href="#"
                className=" py-2 ml-4  w-[100px] flex items-center justify-center text-[#9fa39f] transition-all duration-300 rounded border-2 border-[#9fa39f] group relative 
     hover:bg-white/15 hover:border-[#444844] hover:w-[180px]"
              >
                <span className="flex justify-center items-center font-semibold ">
                  <span className="pl-5 text-[#9fa39f]">INQUIRE</span>
                  <AiOutlineRight className="h-[20px] font-semibold w-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
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
              <h2 className="mb-3 text-lg pl-5 pr-4 font-bold text-[#3e413e] leading-tight">
                Let&apos;s start a Pen Testing conversation.
              </h2>
              <p className="mb-3 text-[#3e413e] pl-5 text-sm leading-relaxed">
                Like what you see? Start working with us by providing your needs
                and details.
              </p>
              <a
                href="#"
                className=" py-2 ml-4  w-[140px] flex items-center justify-center text-[#9fa39f] transition-all duration-300 rounded border-2 border-[#9fa39f] group relative 
     hover:bg-white/15 hover:border-[#444844] hover:w-[180px]"
              >
                <span className="flex justify-center items-center font-semibold ">
                  <span className="pl-5 text-[#9fa39f]">CONTACT US</span>
                  <AiOutlineRight className="h-[20px] font-semibold w-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </a>
            </div>
          </div>

          {/* Desktop Contact Button */}
          <div className="lg:block hidden  ml-28">
            <a
              href="#"
              className=" py-3 w-[140px] flex items-center justify-center text-white transition-all duration-300 rounded border-2 border-white group relative 
    bg-white/10 hover:bg-white/15 hover:border-[#444844] hover:w-[180px]"
            >
              <span className="flex justify-center items-center font-semibold ">
                <span className="pl-5">Contact Us</span>
                <AiOutlineRight className="h-[20px] font-semibold w-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="py-12 bg-black text-white">
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
                      <span className="bg-green-400 text-blue-500 text-sm px-3 py-1 rounded-full">
                        Related Service
                      </span>
                    </div>
                    <div className="relative h-[240px]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full rounded-lg object-cover"
                      />
                    </div>
                    <div className="p-2 flex justify-center bg-black">
                      <h3 className="text-2xl  text-[#3e413e] tracking-tight leading-tight">
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
