'use client';
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdPlayArrow } from "react-icons/md";

const services = [
  {
    id: 1,
    title: "Drone Cinematography",
    image: "https://i0.wp.com/www.splento.com/blog/wp-content/uploads/2023/09/Drone-videography.jpg?resize=1200%2C675&ssl=1",
  },
  {
    id: 2,
    title: "Network Infrastructure",
    image: "https://img.freepik.com/premium-photo/server-rack-with-blue-red-ethernet-cables-connected-internet-networking_1294002-3629.jpg",
  },

  {
    id: 3,
    title: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Page = () => {

  const [items, setItems] = useState(services);
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    if (direction === "next") {
      setItems((prev) => [...prev.slice(1), prev[0]]);
    } else {
      setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => handleScroll("next"), 3000); // Changed to 2 seconds as requested
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden text-white bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="https://neotechdevs.com/wp-content/uploads/2022/03/pexels-christina-morillo-1181271-scaled.jpg"
            alt="Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        </div>

        <div className="container relative z-10 mt-24 py-7 mb-12">
          <div className="flex justify-center flex-wrap">
            <div className="w-full lg:w-3/6 lg:mb-0 max-lg:px-7">
              <div className="container mr-[50px] max-lg:mr-0">
                <h2 className="relative pb-[3px] text-[18px] max-lg:text-[14px] max-md:text-[10px] font-semibold uppercase">
                  <span className="relative inline-block text-white">
                    BUILD MOMENTUM
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500"></span>
                  </span>
                </h2>

                {/* Main Heading */}
                <h1 className="pb-[11px] text-[43px] max-lg:text-[35px] max-md:text-[25px] font-bold">
                  Website Design and Hosting
                </h1>

                {/* Description Text */}
                <div>
                  <h2 className="pb-[11px] text-[21px] max-lg:text-[16px] max-md:text-[12px] ">
                    <p className="font-semibold space-y-2 ">
                      Our website designers are here to provide all digital needs
                      for your business. We understand your website should be an
                      essential tool used to extend your brand, designed to target
                      the right message to your audience.
                    </p>
                  </h2>

                  <h3 className="pb-[11px] text-[20px] max-lg:text-[16px] max-md:text-[12px] font-extrabold text-white my-4">
                    A poorly designed, underperforming, or outdated website can
                    make or break a business.
                  </h3>

                  <h2 className="pb-[20px] text-[21px] max-lg:text-[16px] max-md:text-[12px] font-[300] ">
                    Our hosting services include lighting fast download and upload
                    speeds. However, we are flexible to all development needs and
                    can configure your site to external hosting providers.
                  </h2>

                  <h4 className="pb-[15px] text-[30px] max-lg:text-[24px] max-md:text-[18px] font-[800] text-white">
                    Capabilities
                  </h4>

                  <h2 className="pb-[20px] text-[20px] max-lg:text-[14px] max-md:text-[10px] font-semibold">
                    We design your website or brand identity to reflect your
                    brand's strategy, identity and goals so that you occupy a
                    prominent position in the market.
                  </h2>
                </div>

              </div>
            </div>

            {/* Right Column - CTA */}
            <div className="w-full px-8 lg:w-[35%] max-lg:hidden">
              <div className="p-6 mb-8  rounded- bg-black bg-opacity-50">
                <h2 className="mb-4 text-2xl max-md:text-xl font-extrabold">
                  Looking for a new web design agency?
                </h2>
                <p className="mb-6 text-gray-300 font-secondary">
                  Our catalog is an extension of our design, engineering, and
                  delivery expertise to showcase the true<br /> capability of our team.
                </p>
                <a
                  href="#"
                  className="inline-block px-7 py-2 font-[500] text-[16px] max-lg:text-[12px] max-md:text-[9px] text-[#20C18C] uppercase transition-all rounded bg-white"
                >
                  VIEW OUR PORTFOLIO
                </a>
              </div>
            </div>
          </div>
          {/* Services Grid */}

          <div className="md:pl-26 px-10 font-sans">
    <div className="grid grid-cols-1 md:flex gap-8"> {/* गैप बढ़ाया */}
        {/* Development Process */}
        <div className="p-5 min-w-[280px]"> {/* विड्थ एडजस्ट की */}
            <h3 className="mb-5 text-2xl max-md:text-[20px] font-semibold tracking-tight">
                Development Process
            </h3>
            <ul className="space-y-3">
                {["Research","Discovery","Copywriting","UI / UX Design","SEO"].map((item, index) => (
                    <li key={`process-${index}`} className="flex items-center">
                        <span className="flex items-center justify-center w-4 h-4 mr-2 text-white">
                            <MdPlayArrow className="text-sm"/> {/* आइकन साइज़ एडजस्ट */}
                        </span>
                        <p className="text-[16px] font-medium text-white tracking-normal">
                            {item}
                        </p>
                    </li>
                ))}
            </ul>
        </div>

        {/* Technology Stack */}
        <div className="p-5 min-w-[280px]">
            <h3 className="mb-5 text-2xl max-md:text-[20px] font-semibold tracking-tight">
                Technology Stack
            </h3>
            <ul className="space-y-3">
                {["HTML / CSS","SQL / NOSQL","PHP","Bootstrap","Wordpress","More"].map((item, index) => (
                    <li key={`tech-${index}`} className="flex items-center">
                        <span className="flex items-center justify-center w-4 h-4 mr-2 text-white">
                            <MdPlayArrow className="text-sm"/>
                        </span>
                        <p className="text-[16px] font-medium text-white">
                            {item}
                        </p>
                    </li>
                ))}
            </ul>
        </div>

        {/* Experience With */}
        <div className="p-5 min-w-[280px]">
            <h3 className="mb-5 text-2xl max-md:text-[20px] font-semibold tracking-tight">
                Experience With
            </h3>
            <ul className="space-y-3">
                {["Ecommerce","Restaurants","Medical Offices","Small Businesses","Real-estate","Blogs","More"].map((item, index) => (
                    <li key={`exp-${index}`} className="flex items-center">
                        <span className="flex items-center justify-center w-4 h-4 mr-2 text-white">
                            <MdPlayArrow className="text-sm"/>
                        </span>
                        <p className="text-[16px] font-medium text-white">
                            {item}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
</div>

          <div className="relative flex flex-col items-center gap-6 max-lg:mt-8">
            <div className="w-full px-8 lg:w-2/5 lg:hidden">
              <div className="p-6 border border-gray-800 rounded-lg bg-black bg-opacity-50">
                <h2 className="mb-4 text-2xl max-md:text-xl font-bold">
                  Looking for a new web design agency?
                </h2>
                <p className="mb-6">
                  Our catalog is an extension of our design, engineering, and
                  delivery expertise to showcase the true capability of our team.
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-1 font-[500] text-[16px] max-md:text-[12px] text-[#20C18C] uppercase transition-all rounded bg-white"
                >
                  VIEW OUR PORTFOLIO
                </a>
              </div>
            </div>

            <div className="w-full px-8 lg:w-2/5 lg:hidden">
              <div className="p-6 border border-gray-800 rounded-lg bg-black bg-opacity-50">
                <h2 className="mb-4 text-2xl max-md:text-xl font-bold">
                  Let's start a web design conversation.
                </h2>
                <p className="mb-6">
                  Like what you see? Start working with us by providing your needs
                  and details.
                </p>
                <a
                  href="#"
                  className="inline-block px-6 py-1 font-[500] text-[16px] max-md:text-[12px] text-white uppercase transition-all rounded bg-[#2ea3f2]"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div className="py-7 max-lg:hidden mt-4">
            <a
              href="#"
              className="inline-block w-[1100px] h-16 items-center justify-center flex ml-[7%] py-2 text-[12px] text-center font-[500] text-white uppercase transition-all rounded bg-[#2ea3f2] hover:bg-[#2ea3f2] group relative"
              id="contact-us"
            >
              <span className="flex items-center gap-2">
                <p className="text-[16px] max-lg:text-[12px] flex flex-col">
                  <span>Contact</span>
                  <span className="flex items-center">
                    Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </p>
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="py-12 bg-black text-white">
        <div className="max-w-6xl mx-auto px-8">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-10 inline-block pb-1 border-b-2 border-green-400">
            Related Services
          </h2>

          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => handleScroll("prev")}
              className="absolute left-4 top-[40%] -translate-y-1/2 w-10 h-10 flex items-center justify-center z-20 
                   md:-left-12 md:text-gray-700 md:top-[40%] text-white"
              aria-label="Previous service"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Carousel Container */}
            <div
              ref={containerRef}
              className="flex gap-6 overflow-x-hidden snap-x snap-mandatory hide-scrollbar"
              style={{
                scrollBehavior: "smooth",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {items.map((service) => (
                <div
                  key={service.id}
                  className="flex-shrink-0 rounded-lg overflow-hidden relative shadow-lg snap-start transition-all duration-300"
                  style={{ width: "350px", minHeight: "280px" }}
                >
                  {/* Label */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-green-400 text-black text-sm font-medium px-4 py-2 rounded-full">
                      Related Service
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative h-[230px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>

                  {/* Title */}
                  <div className="p-2 flex justify-center bg-black">
                    <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => handleScroll("next")}
              className="absolute right-4 top-[40%] -translate-y-1/2 w-10 h-10 flex items-center justify-center z-20 
                   md:-right-12 md:text-gray-700 md:top-[40%] text-white"
              aria-label="Next service"
            >
              <ChevronRight size={36} />
            </button>
          </div>
        </div>

        <style jsx>{`
    /* Hide scrollbar */
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      scrollbar-width: none;
    }
  `}</style>
      </section>


    </div>
  );
}

export default Page;