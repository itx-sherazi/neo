'use client';
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const services = [
  {
    id: 1,
    title: "Drone Cinematography",
    image: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  {
    id: 2,
    title: "Network Infrastructure",
    image: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  {
    id: 3,
    title: "Digital Marketing",
    image: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  {
    id: 3,
    title: "Digital Marketing",
    image: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  {
    id: 3,
    title: "Digital Marketing",
    image: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
];


const Page = () => {
    const containerRef = useRef(null);

    const handleScroll = (direction) => {
      if (containerRef.current) {
        const scrollAmount = 250;
        containerRef.current.scrollBy({
          left: direction === "next" ? scrollAmount : -scrollAmount,
          behavior: "smooth",
        });
      }
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        handleScroll("next");
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  

  return (
    <div>
      <div 
        className="relative w-full min-h-screen text-white flex items-center justify-center mt-20 before:absolute before:top-0 before:left-0 before:w-full before:h-32 before:bg-gradient-to-b before:from-black before:to-transparent"
        style={{ 
          backgroundImage: "url('https://neotechdevs.com/wp-content/uploads/2022/03/pexels-christina-morillo-1181271-scaled.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat" 
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto p-6 flex flex-col lg:flex-row lg:justify-between lg:items-start min-h-[80vh]">
          {/* Left Section */}
          <div className="lg:w-2/3">
            <h3 className="text-yellow-400 text-sm font-semibold">BUILD MOMENTUM</h3>
            <h1 className="text-4xl font-bold mt-2">Website Design and Hosting</h1>
            <p className="mt-4 text-lg font-medium">
              Our website designers are here to provide all digital needs for your business. <br />
              <span className="font-bold">We understand your website should be an essential tool</span> to extend your brand, 
              designed to target the right message to your audience.
            </p>
            <p className="mt-6 text-lg font-bold text-gray-300">
              A poorly designed, underperforming, or outdated website can make or break a business.
            </p>
            <p className="mt-2 text-lg">
              Our hosting services include lightning-fast download and upload speeds. However, we are flexible to all 
              development needs and can configure your site to external hosting providers.
            </p>
            
            <h2 className="mt-6 text-2xl font-bold">Capabilities</h2>
            <p className="mt-2 text-lg">
              We design your website or brand identity to reflect your brand’s strategy, identity, and goals so that you 
              occupy a prominent position in the market.
            </p>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Development Process */}
              <div>
                <h3 className="font-bold text-lg">Development Process</h3>
                <ul className="mt-2 text-sm space-y-2">
                  <li>Research</li>
                  <li>Discovery</li>
                  <li>Copywriting</li>
                  <li>UI / UX Design</li>
                  <li>SEO</li>
                </ul>
              </div>
              
              {/* Technology Stack */}
              <div>
                <h3 className="font-bold text-lg">Technology Stack</h3>
                <ul className="mt-2 text-sm space-y-2">
                  <li>HTML / CSS</li>
                  <li>SQL / NoSQL</li>
                  <li>PHP</li>
                  <li>Bootstrap</li>
                  <li>WordPress</li>
                  <li>More</li>
                </ul>
              </div>
              
              {/* Experience With */}
              <div>
                <h3 className="font-bold text-lg">Experience With</h3>
                <ul className="mt-2 text-sm space-y-2">
                  <li>Ecommerce</li>
                  <li>Restaurants</li>
                  <li>Medical Offices</li>
                  <li>Small Businesses</li>
                  <li>Real-estate</li>
                  <li>Blogs</li>
                  <li>More</li> 
                </ul>
              </div>
            </div>
            
            <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition w-full lg:w-auto">
              Contact Us
            </button>
          </div>
          
          {/* Right Section */}
          <div className="lg:w-1/3 bg-black bg-opacity-80 p-6 rounded-lg self-start lg:ml-6 mt-12 lg:mt-0">
            <h3 className="text-lg font-bold">Looking for a new web design agency?</h3>
            <p className="mt-2 text-sm text-gray-300">
              Our catalog is an extension of our design, engineering, and delivery expertise to showcase the true capability of our team.
            </p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
              VIEW OUR PORTFOLIO
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <section className="px-4 py-12 bg-black text-white">
  <div className="max-w-4xl mx-auto p-9">
    <h2 className="text-2xl font-bold mb-4 border-b-2 inline-block pb-1 border-green-400">
      Related Servic
    </h2>
    <div className="relative group">
      {/* Navigation Buttons */}
      <button
        onClick={() => handleScroll("prev")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center z-10"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => handleScroll("next")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center z-10"
      >
        <ChevronRight size={20} />
      </button>
      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 px-4"
        style={{ scrollSnapType: "x mandatory", display: "flex", justifyContent: "center" }}
      >
        {services.slice(0, 3).map((service) => (
          <div
            key={service.id}
            className="min-w-[200px] h-[180px] rounded-lg overflow-hidden relative bg-gray-900 shadow-md"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[120px] object-cover"
            />
            <div className="p-2 text-center">
              <h3 className="text-sm font-bold">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  {/* Hide scrollbar globally */}
  <style jsx global>{`
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
</section>

    </div>
  );
}

export default Page;