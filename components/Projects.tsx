import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
        <p className="text-gray-400 text-lg md:text-xl mb-16">
          Real-world results. Projects crafted to convert, engage, and scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-[#0d0d0d] border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-yellow-500/20 transition duration-300">
            <img
              src="https://flowbite.com/docs/images/dashboard/dashboard.png"
              alt="Flowbite Dashboard"
              className="rounded-xl mb-6"
            />
            <h3 className="text-2xl font-semibold mb-2">
              Flowbite’s Dashboard
            </h3>
            <a
              href="https://flowbite.com"
              className="text-yellow-400 hover:underline text-sm mb-4 inline-block"
            >
              https://flowbite.com
            </a>
            <p className="text-gray-400 mb-4">
              A seamless platform to connect with your community. Designed for
              usability, interaction, and data-driven insights.
            </p>
            <div className="flex space-x-3 mb-6">
              <img
                src="https://img.icons8.com/color/48/html-5.png"
                className="w-6 h-6"
                alt="HTML5"
              />
              <img
                src="https://img.icons8.com/color/48/css3.png"
                className="w-6 h-6"
                alt="CSS3"
              />
              <img
                src="https://img.icons8.com/color/48/javascript--v1.png"
                className="w-6 h-6"
                alt="JavaScript"
              />
              <img
                src="https://img.icons8.com/color/48/typescript.png"
                className="w-6 h-6"
                alt="TypeScript"
              />
            </div>
            <a
              href="#"
              className="inline-flex items-center bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              View Case Study →
            </a>
          </div>

          <div className="bg-[#0d0d0d] border border-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-yellow-500/20 transition duration-300">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/agency.png"
              alt="Agency Landing Page"
              className="rounded-xl mb-6"
            />
            <h3 className="text-2xl font-semibold mb-2">Agency Landing Page</h3>
            <a
              href="https://themesberg.com"
              className="text-yellow-400 hover:underline text-sm mb-4 inline-block"
            >
              https://themesberg.com
            </a>
            <p className="text-gray-400 mb-4">
              A stunning landing page designed for engagement. Fully responsive
              and built for high-conversion campaigns.
            </p>
            <div className="flex space-x-3 mb-6">
              <img
                src="https://img.icons8.com/color/48/wordpress.png"
                className="w-6 h-6"
                alt="WordPress"
              />
              <img
                src="https://img.icons8.com/color/48/html-5.png"
                className="w-6 h-6"
                alt="HTML5"
              />
              <img
                src="https://img.icons8.com/color/48/css3.png"
                className="w-6 h-6"
                alt="CSS3"
              />
              <img
                src="https://img.icons8.com/color/48/woocommerce.png"
                className="w-6 h-6"
                alt="WooCommerce"
              />
            </div>
            <a
              href="#"
              className="inline-flex items-center bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              View Case Study →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
