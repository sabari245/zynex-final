"use client";

import React from "react";
import Link from "next/link"; // Or use <a> if these link externally
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownLeft } from "react-feather"; // Using react-feather for simple icons
import { ChimpmailLogo, GitlabLogo, ShopifyLogo } from "./SvgPatterns/logo"; // Assuming these paths are correct

// Define the type for a case study item
interface CaseStudy {
  id: string;
  LogoComponent: React.FC; // Type for a React functional component
  statistic: string;
  title: string;
  description: string;
  link: string; // URL for the case study link
  isIncrease: boolean; // Flag to indicate if it's an increase or decrease
}

// Array of case study data
const caseStudiesData: CaseStudy[] = [
  {
    id: "mailchimp",
    LogoComponent: ChimpmailLogo,
    statistic: "43%",
    title: "Boost in Conversions",
    description:
      "Experience a significant uplift in sales with custom site designs optimized for user experience and conversion pathways, averaging a 43% boost after migration.",
    link: "#",
    isIncrease: true,
  },
  {
    id: "gitlab",
    LogoComponent: GitlabLogo,
    statistic: "70%",
    title: "Reduction in Monthly Charges",
    description:
      "Cut down on expensive monthly subscriptions and high transaction fees. On average, businesses save up to 70% in overhead costs by migrating to a custom e-commerce store.",
    link: "#",
    isIncrease: false,
  },
  {
    id: "shopify",
    LogoComponent: ShopifyLogo,
    statistic: "4X",
    title: "Increase in Organic Traffic",
    description:
      "Leverage advanced, tailored SEO strategies unavailable on standard platforms to dramatically improve search rankings and achieve up to a 4X increase in organic traffic.",
    link: "#",
    isIncrease: true,
  },
];

const CaseStudies = () => {
  return (
    <div className="bg-neutral-900 bg-linear-to-t from-black to-transparent">
      <div className="max-w-5xl px-4 xl:px-0 py-24 mx-auto">
        {/* Title */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
            Make your store <span className="text-[#ff0]"> sell 43% more </span>
            today
          </h2>
          <p className="mt-1 text-neutral-400">
            Save a significant portion of your monthly budget while increasing
            your sales conversions by 43%. Our team of experts will not only
            build a store that you and your audience will love, but also make
            sure it's fully optimized for sales and performance.
          </p>
        </div>
        {/* End Title */}

        {/* Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center border border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl">
          {caseStudiesData.map((study) => (
            <a
              key={study.id}
              href={study.link}
              className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 focus:outline-none first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b hover:before:from-transparent hover:before:via-transparent hover:before:to-[#ff0]/10 before:via-80% focus:before:from-transparent focus:before:via-transparent focus:before:to-[#ff0]/10 before:-z-1 last:before:rounded-b-xl lg:first:before:rounded-s-xl lg:last:before:rounded-e-xl lg:last:before:rounded-bl-none before:opacity-0 hover:before:opacity-100 focus:before:opacity-100"
            >
              <div className="mb-5">
                <study.LogoComponent />
                <div className="mt-5 flex items-center">
                  <p className="font-semibold text-6xl text-white mr-4">
                    {study.statistic}
                  </p>
                  <motion.div
                    className="relative flex items-center justify-center"
                    style={{ fontSize: "7xl" }}
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      loop: Infinity,
                      duration: Infinity,
                      ease: "circIn",
                    }}
                  >
                    {study.isIncrease ? (
                      <ArrowUpRight className="text-green-400" size={"1.5em"} />
                    ) : (
                      <ArrowDownLeft className="text-red-400" size={"1.5em"} />
                    )}
                  </motion.div>
                </div>
                <h3 className="mt-5 font-medium text-lg text-white">
                  {study.title}
                </h3>
                <p className="mt-1 text-neutral-400">{study.description}</p>
              </div>
              <p className="mt-auto">
                <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] group-focus:border-[#ff0] transition focus:outline-none">
                  Case study
                </span>
              </p>
            </a>
          ))}
        </div>
        {/* End Card Grid */}
      </div>
    </div>
  );
};

export default CaseStudies;
