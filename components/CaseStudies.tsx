// components/CaseStudies.tsx
import React from 'react';
import Link from 'next/link'; // Or use <a> if these link externally
import { ChimpmailLogo, GitlabLogo, ShopifyLogo } from './SvgPatterns/logo';

const CaseStudies = () => {
    return (
        <div className="bg-neutral-900 bg-linear-to-t from-black to-transparent">
            <div className="max-w-5xl px-4 xl:px-0 py-24 mx-auto">
                {/* Title */}
                <div className="max-w-3xl mb-10 lg:mb-14">
                    <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Success stories</h2>
                    <p className="mt-1 text-neutral-400">Global brands see measurable success when they collaborate with us. From higher conversion and payment approval rates to faster processing speeds. Discover their stories here.</p>
                </div>
                {/* End Title */}

                {/* Card Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 items-center border border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl">
                    {/* Card 1: Mailchimp */}
                    <a className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 focus:outline-hidden first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b hover:before:from-transparent hover:before:via-transparent hover:before:to-[#ff0]/10 before:via-80% focus:before:from-transparent focus:before:via-transparent focus:before:to-[#ff0]/10 before:-z-1 last:before:rounded-b-xl lg:first:before:rounded-s-xl lg:last:before:rounded-e-xl lg:last:before:rounded-bl-none before:opacity-0 hover:before:opacity-100 focus:before:opacity-100" href="#">
                        <div className="mb-5">
                            <ChimpmailLogo />
                            <div className="mt-5">
                                <p className="font-semibold text-5xl text-white">43%</p>
                                <h3 className="mt-5 font-medium text-lg text-white">Boost in Conversions</h3>
                                <p className="mt-1 text-neutral-400">Experience a significant uplift in sales with custom site designs optimized for user experience and conversion pathways, averaging a 43% boost after migration.</p>
                            </div>
                        </div>
                        <p className="mt-auto">
                            <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] group-focus:border-[#ff0] transition focus:outline-hidden">
                                Case study
                            </span>
                        </p>
                    </a>
                    {/* End Card 1 */}

                    {/* Card 2: Shopify */}
                    <a className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 focus:outline-hidden first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b hover:before:from-transparent hover:before:via-transparent hover:before:to-[#ff0]/10 before:via-80% focus:before:from-transparent focus:before:via-transparent focus:before:to-[#ff0]/10 before:-z-1 last:before:rounded-b-xl lg:first:before:rounded-s-xl lg:last:before:rounded-e-xl lg:last:before:rounded-bl-none before:opacity-0 hover:before:opacity-100 focus:before:opacity-100" href="#">
                        <div className="mb-5">
                            <ShopifyLogo />
                            <div className="mt-5">
                                <p className="font-semibold text-5xl text-white">4X</p>
                                <h3 className="mt-5 font-medium text-lg text-white">Increase in Organic Traffic</h3>
                                <p className="mt-1 text-neutral-400">Leverage advanced, tailored SEO strategies unavailable on standard platforms to dramatically improve search rankings and achieve up to a 4X increase in organic traffic.</p>
                            </div>
                        </div>
                        <p className="mt-auto">
                            <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] group-focus:border-[#ff0] transition focus:outline-hidden">
                                Case study
                            </span>
                        </p>
                    </a>
                    {/* End Card 2 */}

                    {/* Card 3: GitLab */}
                    <a className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 focus:outline-hidden first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b hover:before:from-transparent hover:before:via-transparent hover:before:to-[#ff0]/10 before:via-80% focus:before:from-transparent focus:before:via-transparent focus:before:to-[#ff0]/10 before:-z-1 last:before:rounded-b-xl lg:first:before:rounded-s-xl lg:last:before:rounded-e-xl lg:last:before:rounded-bl-none before:opacity-0 hover:before:opacity-100 focus:before:opacity-100" href="#">
                        <div className="mb-5">
                            <GitlabLogo />
                            <div className="mt-5">
                                <p className="font-semibold text-5xl text-white">70%</p>
                                <h3 className="mt-5 font-medium text-lg text-white">Reduction in Monthly Charges</h3>
                                <p className="mt-1 text-neutral-400">Cut down on expensive monthly subscriptions and high transaction fees. On average, businesses save up to 70% in overhead costs by migrating to a custom e-commerce store.</p>
                            </div>
                        </div>
                        <p className="mt-auto">
                            <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] group-focus:border-[#ff0] transition focus:outline-hidden">
                                Case study
                            </span>
                        </p>
                    </a>
                    {/* End Card 3 */}
                </div>
                {/* End Card Grid */}
            </div>
        </div>
    );
};

export default CaseStudies;