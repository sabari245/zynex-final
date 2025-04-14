// components/Testimonials.tsx
import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
    return (
        <div className="bg-neutral-900">
            <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
                {/* Title */}
                <div className="max-w-3xl mb-10 lg:mb-14">
                    <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">Preline reviews</h2>
                    <p className="mt-1 text-neutral-400">With over 30 awards, and achievements, we proudly demonstrate our unwavering dedication to excellence and client success.</p>
                </div>
                {/* End Title */}

                {/* Grid */}
                <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
                    <div>
                        {/* Blockquote */}
                        <blockquote>
                            <p className="font-medium text-xl text-white md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal">
                                To say that switching to Preline has been life-changing is an understatement. My business has tripled since then.
                            </p>

                            <footer className="mt-6">
                                <div className="flex items-center">
                                    {/* Avatar visible on mobile */}
                                    <div className="md:hidden shrink-0">
                                        <Image
                                            className="size-12 rounded-full"
                                            src="/images/testimonial-nicole.jpg" // Path from public folder
                                            alt="Nicole Grazioso"
                                            width={48} // Intrinsic width
                                            height={48} // Intrinsic height
                                            priority // Optional: if above the fold
                                        />
                                    </div>
                                    <div className="ms-4 md:ms-0">
                                        <div className="text-base font-semibold text-white">Nicole Grazioso</div>
                                        <div className="text-xs text-neutral-400">Director Payments & Risk | Airbnb</div>
                                    </div>
                                </div>
                            </footer>
                        </blockquote>
                        {/* End Blockquote */}
                    </div>
                    {/* End Col */}

                    <div className="hidden md:block mt-10 md:mt-0"> {/* Adjusted margin for spacing */}
                        {/* Avatar hidden on mobile, shown on md+ */}
                        <Image
                            className="rounded-xl w-full h-auto object-cover" // Added w-full and h-auto
                            src="/images/testimonial-nicole.jpg" // Path from public folder
                            alt="Nicole Grazioso"
                            width={500} // Example width, adjust as needed
                            height={500} // Example height, adjust as needed based on aspect ratio
                        // You might need sizes attribute for responsiveness if not using w-full
                        />
                    </div>
                    {/* End Col */}
                </div>
                {/* End Grid */}
            </div>
        </div>
    );
};

export default Testimonials;