'use client';
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdPlayArrow } from "react-icons/md";
import { motion } from "framer-motion"; // Import motion
import { AiOutlineRight } from 'react-icons/ai';
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
    const interval = setInterval(() => handleScroll("next"), 2000);
    return () => clearInterval(interval);
  }, []);
  const textAnimation = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    whileInView: { 
      opacity: 1, 
      y: 0,
      scale: 1
    },
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    },
    viewport: { 
      once: true, 
      amount: 0.3 
    }
  };
  
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

        <div className="container relative z-10 mt-24 py-7 mb-12 px-4">
          <div className="flex justify-center flex-wrap">
            <div className="w-full lg:w-3/6 lg:mb-0">
            <div className="container lg:mr-[50px]">
            <motion.h1 
  {...textAnimation}
  className="relative inline-block text-2xl font-bold text-white"
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
            className="animate-draw-line-1"
          />
          <motion.path
            d="M199.331 26.16C143.726 23.421 84.627 22.92 -2.42 23.93"
            strokeDasharray="201.8"
            strokeDashoffset="201.8"
            initial={{ strokeDashoffset: 201.8 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1 }}
            className="animate-draw-line-2"
          />
        </svg>
</motion.h1>

<motion.h1 
  {...textAnimation}
  className="pb-3 text-[25px] sm:text-[30px] md:text-[35px] lg:text-[50px] font-bold tracking-tight mb-4 mt-4 leading-tight"
>
  Website Design and <br /> Hosting
</motion.h1>

<motion.div 
  {...textAnimation}
>
  <h2 className="pb-[11px] text-[21px] lg:text-[22px] md:text-[18px] sm:text-[16px] leading-relaxed">
    <p className="font-medium">
    Our website designers are here to provide all digital needs for your business. We understand your website should be an essential tool used to extend your brand, designed to target the right message to your audience.
    </p>
  </h2>
</motion.div>

<motion.h3
  {...textAnimation}
  className="pb-[11px] text-[20px] lg:text-[22px] md:text-[16px] sm:text-[14px] font-extrabold text-white my-4 loading-tight"
>

A poorly designed, underperforming, or outdated website can make or break a business.
</motion.h3>

<motion.h2
  {...textAnimation}
  className="pb-[20px] text-[21px] lg:text-[21px] md:text-[18px] sm:text-[16px] text-[14px] font-light leading-relaxed"
>Our hosting services include lightning-fast download and upload speeds. However, we are flexible to all development needs and can configure your site to external hosting providers.
</motion.h2>
      <motion.h4
  initial={{ opacity: 0, x: 50 }} // Right se aaye
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }} // Tez speed se aaye
  viewport={{ once: false }} // Bar bar trigger hoga scroll par
  className="pb-[15px] text-[30px] lg:text-[30px] md:text-[24px] sm:text-[20px] text-[18px] font-[800] text-white"
>
  Capabilities
</motion.h4>

      
      <motion.h2
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: false }} // Ye bar bar trigger hoga scroll par
  className="pb-[20px] text-[20px] lg:text-[20px] md:text-[14px] sm:text-[12px] text-[10px] font-semibold"
>
  We design your website or brand identity to reflect your brand's strategy, identity, and goals so that you occupy a prominent position in the market.
</motion.h2>

    </div>
            </div>
            <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }} // Hidden + Zoomed Out + Neeche
      animate={{ opacity: 1, scale: 1, y: 0 }} // Smoothly Zoom-in + Upar aayega
      transition={{ duration: 1.2, ease: "easeOut" }} // Smooth animation effect
      className="w-full px-8 lg:w-[35%] lg:block hidden"
    >
      <div className="p-6 mb-8 rounded bg-black bg-opacity-50">
        <h2 className="mb-4 text-2xl font-extrabold">
          Looking for a new web design agency?
        </h2>
        <p className="mb-6 text-gray-300 font-secondary">
          Our catalog is an extension of our design, engineering, and
          delivery expertise to showcase the true<br /> capability of our team.
        </p>
        <a
          href="#"
          className="inline-block px-7 py-2 font-[500] text-[16px] text-[#20C18C] uppercase transition-all rounded bg-white"
        >
          VIEW OUR PORTFOLIO
        </a>
      </div>
    </motion.div>
          </div>
          <div className="md:pl-24  md:pt-8">
          <div className="grid grid-cols-1 md:flex md:gap-8">
      {[
        { title: "Development Process", items: ["Research", "Discovery", "Copywriting", "UI / UX Design", "SEO"] },
        { title: "Technology Stack", items: ["HTML / CSS", "SQL / NOSQL", "PHP", "Bootstrap", "Wordpress", "More"] },
        { title: "Experience With", items: ["Ecommerce", "Restaurants", "Medical Offices", "Small Businesses", "Real-estate", "Blogs", "More"] },
      ].map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 100 }} // Pehle neeche hide hoga
          whileInView={{ opacity: 1, y: 0 }} // Scroll hone par smoothly upar aayega
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
          viewport={{ once: true }} // Sirf ek baar trigger hoga
          className="p-5 w-full md:w-[230px]"
        >
          <h3 className="mb-5 text-2xl font-bold tracking-tight leading-tight">{section.title}</h3>
          <ul className="space-y-1">
            {section.items.map((item, itemIndex) => (
              <li key={`${section.title}-${itemIndex}`} className="flex items-center">
                <span className="flex items-center justify-center w-3 h-3 mr-2 text-white">
                  <MdPlayArrow className="text-xs" />
                </span>
                <p className="text-lg font-medium text-white">{item}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
</div>
<div className="w-full px-4 lg:hidden bg-black bg-opacity-50 rounded-lg">
  {/* First CTA Section */}
  <div className="p-6 ">
    <h2 className="mb-4 text-xl font-bold text-gray-100 leading-tight">
      Looking for a new web design agency?
    </h2>
    <p className="mb-4 text-gray-300 text-sm leading-relaxed">
      Our catalog is an extension of our design, engineering, and delivery expertise 
      to showcase the true capability of our team.
    </p>
    <a
      href="#"
      className="inline-block px-5 py-2 text-sm font-medium text-emerald-500 uppercase bg-white rounded-md hover:bg-gray-50 transition-colors"
    >
      VIEW OUR PORTFOLIO
    </a>
  </div>

  {/* Divider with Lines */}
  <div className="flex items-center justify-center p-4 ">
    <div className="flex items-center w-full max-w-xs">
      <div className="flex-grow border-t border-gray-600"></div>
      <span className="mx-4 text-sm text-gray-300 font-medium">or</span>
      <div className="flex-grow border-t border-gray-600"></div>
    </div>
  </div>

  {/* Second CTA Section */}
  <div className="p-6">
    <h2 className="mb-4 text-xl font-bold text-gray-100 leading-tight">
      Let&apos;s start a web design conversation.
    </h2>
    <p className="mb-4 text-gray-300 text-sm leading-relaxed">
      Like what you see? Start working with us by providing your needs and details.
    </p>
    <a
      href="#"
      className="inline-block px-14 py-2 text-sm font-medium text-white bg-[#0c99d1] rounded-md transition-colors"
    >
      Contact Us
    </a>
  </div>
</div>
<motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }} // Pehle hidden, chhota, aur neeche hoga
      whileInView={{ opacity: 1, scale: 1, y: 0 }} // Scroll par smoothly appear hoga
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true }} // Sirf ek baar animation trigger hoga
      className="lg:block hidden pt-10"
    >
      
      <a
  href="#"
  className="w-full lg:w-[1100px] h-10 items-center justify-center flex ml-0 lg:ml-[7%] py-2 text-[12px] text-center font-[500] text-white transition-all rounded bg-[#2ea3f2] hover:bg-[#2ea3f2] group relative"
  id="contact-us"
>
  <span className="flex justify-center items-center gap-2">
    <p className="text-[16px] flex ">
      <span>Contact Us</span>
       {/* React Icon */}
       <AiOutlineRight
        className="h-4 w-5   mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
      />
    </p>
    
  </span>
</a>
    </motion.div>
        </div>
      </section>
      <section className="py-12 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
        <motion.h1
  initial={{ opacity: 0, x: 100 }} // Initially hidden + right side
  whileInView={{ opacity: 1, x: 0 }} // When 50% of the section is in the viewport
  transition={{ duration: 1.5, ease: "easeOut" }} // Smooth transition from right to left
  viewport={{ once: true, amount: 0.5 }} // Trigger the animation only once when 50% of the element is in the viewport
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
            <button
              onClick={() => handleScroll("prev")}
              className="absolute left-4 top-[40%] -translate-y-1/2 w-10 h-10 flex items-center justify-center z-20 md:-left-12 md:text-gray-700 text-white"
              aria-label="Previous service"
            >
              <ChevronLeft size={36} />
            </button>
            <div
              ref={containerRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar"
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
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-green-400 text-blue-500 text-sm  px-3 py-1 rounded-full">
                      Related Service
                    </span>
                  </div>
                  <div className="relative h-[230px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="p-2 flex justify-center bg-black">
  <h3 className="text-3xl font-bold text-white tracking-tight leading-tight">
    {service.title}
  </h3>
</div>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleScroll("next")}
              className="absolute right-4 top-[40%] -translate-y-1/2 w-10 h-10 flex items-center justify-center z-20 md:-right-12 md:text-gray-700 text-white"
              aria-label="Next service"
            >
              <ChevronRight size={36} />
            </button>
          </div>
        </div>
        <style jsx>{`
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
};

export default Page;