// components/CaseStudySectionOne.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Updated Placeholder data with stats
const caseStudyData = {
    label: "Client Success",
    title: "Boosting E-commerce Sales by 35% with Shopify Integration",
    description: "Our team collaborated closely with 'StyleAura' to revamp their online presence. By leveraging Shopify's powerful features and implementing a data-driven marketing strategy, we achieved a significant uplift in conversion rates and overall revenue within six months.",
    // Add a stats array
    stats: [
        { value: "+35%", label: "Revenue Growth" },
        { value: "2.1x", label: "Conversion Rate Uplift" },
    ],
    imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with relevant image
    imageAlt: "Team collaborating on an e-commerce website design",
    linkHref: "#" // Replace with actual case study link later
};

const CaseStudySectionOne = () => {
    // Remember to configure image hostname in next.config.js if using external URLs
    // module.exports = { images: { remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] } };

    return (
        <div className="bg-neutral-900">
            <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-16 mx-auto">
                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Image Column (Left) */}
                    <div>
                        <Image
                            className="w-full h-auto object-cover rounded-xl"
                            src={caseStudyData.imageUrl}
                            alt={caseStudyData.imageAlt}
                            width={800}
                            height={600}
                        />
                    </div>
                    {/* End Image Column */}

                    {/* Content Column (Right) */}
                    <div className="flex flex-col h-full"> {/* Use flex-col and h-full */}
                        <div className="flex-grow space-y-4 md:space-y-6"> {/* Content wrapper takes available space */}
                            <p className="inline-block text-[#ff0] text-sm font-medium bg-[#ff0]/10 rounded-lg px-3 py-1">
                                {caseStudyData.label}
                            </p>
                            <h2 className="text-2xl md:text-3xl font-semibold text-white">
                                {caseStudyData.title}
                            </h2>
                            <p className="text-neutral-400">
                                {caseStudyData.description}
                            </p>

                            {/* Stats Section */}
                            <div className="mt-6 pt-6 border-t border-neutral-800 flex flex-wrap gap-x-6 gap-y-4 sm:gap-x-8">
                                {caseStudyData.stats.map((stat, index) => (
                                    <div key={index} className="grow sm:grow-0"> {/* Allow flex grow on smallest screens */}
                                        <p className="text-xl sm:text-2xl font-semibold text-[#ff0]">{stat.value}</p>
                                        <p className="text-xs sm:text-sm text-neutral-400 uppercase mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                            {/* End Stats Section */}
                        </div>

                        {/* Links Section - Pushed to bottom */}
                        <div className='mt-8 flex flex-wrap gap-x-6 gap-y-4 items-center'> {/* Added gap-y, flex-wrap */}
                            {/* Primary CTA Button */}
                            {/* Removed mt-auto as parent div handles spacing */}
                            <Link
                                className="group inline-flex items-center justify-center text-center gap-x-2 py-2.5 px-4 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff0]/50 focus:ring-offset-neutral-900 hover:bg-yellow-300 transition whitespace-nowrap" // Added justify-center, text-center, whitespace-nowrap
                                href="#contact"
                            >
                                Unlock Your Potential
                                <svg className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </Link>
                            {/* Secondary Link */}
                            {/* <Link
                                className="group inline-flex items-center gap-x-2 font-medium text-sm text-[#ff0] decoration-2 hover:underline focus:outline-none focus:underline whitespace-nowrap"
                                href={caseStudyData.linkHref}
                            >
                                Read case study
                                <svg className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </Link> */}
                        </div>
                        {/* End Links Section */}
                    </div>
                    {/* End Content Column */}
                </div>
                {/* End Grid */}
            </div>
        </div>
    );
};

export default CaseStudySectionOne;