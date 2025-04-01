'use client';
import React from 'react';

const Page = () => {
  return (
    <div 
      className="relative w-full min-h-screen text-white flex items-center justify-start pt-20 pb-20" // Changed to padding for height control
      style={{ 
        backgroundImage: "https://neotechdevs.com/wp-content/uploads/2022/03/pexels-christina-morillo-1181271-scaled.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        minHeight: '100vh', // Ensure minimum full viewport height
      }}
    >
      {/* Black blur overlay at the top */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent via-black/30 h-1/3" />
      
      <div className="relative z-10 max-w-5xl mx-auto p-6 lg:flex lg:justify-between lg:items-start">
        {/* Left Section */}
        <div className="lg:w-2/3 lg:pr-8">
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
          
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
            Contact Us
          </button>
        </div>
        
        {/* Right Section - Positioned higher */}
        <div className="lg:w-1/3 bg-black bg-opacity-80 p-6 rounded-lg lg:-mt-20 lg:sticky lg:top-20 mt-8 lg:mt-0">
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
  );
}

export default Page;