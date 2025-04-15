// components/TestimonialComplexGrid.tsx
import React from 'react';
import Image from 'next/image';

// Expanded local data for more visual variety
const testimonialData = [
    {
        id: 1,
        quote: "A truly transformative partnership. Preline Agency didn't just build a website; they built a core part of our growth engine. Their insights were invaluable.",
        name: "Leslie Alexander",
        title: "@lesliealexander",
        avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hasGlow: true, // Add a flag for the glow effect
    },
    {
        id: 2,
        quote: "The efficiency and creativity they brought to the table were exceptional. We saw immediate improvements in user engagement after launch.",
        name: "Michael Foster",
        title: "@michaelfoster",
        avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        quote: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc.",
        name: "Brenna Goyette",
        title: "@brennagoyette",
        avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        quote: "Molestias ea earum quos nostrum doloremque sed. Quoerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
        name: "Leonard Krasner",
        title: "@leonardkrasner",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // hasGlow: true,
    },
    {
        id: 5,
        quote: "VVoluptas quos itaque ipsam in voluptatem est.Voluptas quos itaque ipsam in voluptatem est.Voluptas quos itaque ipsam in voluptatem est.oluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum.",
        name: "Tom Cook",
        title: "@tomcook",
        avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 6,
        quote: "Architecto libero natus est. Est quam debitis officia enim atque et ut non. Sunt reiciendis quasi eaque.",
        name: "Floyd Miles",
        title: "@floydmiles",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 7,
        quote: "Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque. Ut quia eum fugit laborum autem inventore ut voluptate.",
        name: "Dries Vincent",
        title: "@driesvincent",
        avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // hasGlow: true,
    },
    {
        id: 8,
        quote: "Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.",
        name: "Whitney Francis",
        title: "@whitneyfrancis",
        avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 9,
        quote: "Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque. Ut quia eum fugit laborum autem inventore ut voluptate.",
        name: "Dries Vincent",
        title: "@driesvincent",
        avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hasGlow: true,
    },
];

const TestimonialComplexGrid = () => {
    // Hostname config for next/image still needed if using external URLs
    // module.exports = { images: { remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }] } };

    return (
        <div className="bg-neutral-900 overflow-hidden"> {/* Added overflow-hidden for glows */}
            {/* Using container for centering but allowing wider content, adjust max-w if needed */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
                {/* Title */}
                <div className="max-w-2xl mb-10 lg:mb-14 mx-auto text-center">
                    <p className="inline-block bg-[#ff0]/10 text-[#ff0] text-xs font-medium rounded-lg px-3 py-1 mb-3">
                        Testimonials
                    </p>
                    <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
                        We have worked with thousands of amazing people
                    </h2>
                </div>
                {/* End Title */}

                {/* Masonry Column Layout */}
                <div className="columns-1 sm:columns-2 xl:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
                    {testimonialData.map((testimonial) => (
                        // Wrapper div for potential glow effect
                        <div key={testimonial.id} className="relative break-inside-avoid"> {/* break-inside-avoid is crucial for columns */}

                            {/* Conditional Background Glow */}
                            {testimonial.hasGlow && (
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-0 w-60 h-60 bg-[#ff0] rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-15" // Centered, blurred, yellow, low opacity
                                />
                            )}

                            {/* Testimonial Card Content */}
                            <div className="flex flex-col bg-neutral-800 border-2 border-neutral-700 hover:border-[#ff0]/50 transition-colors shadow-sm rounded-xl p-5 lg:p-6 h-full"> {/* Slightly reduced padding */}
                                {/* Quote */}
                                <blockquote className="flex-grow mb-4">
                                    <p className="text-base lg:text-md text-neutral-300 leading-relaxed">
                                        "{testimonial.quote}" {/* Added quotes */}
                                    </p>
                                </blockquote>

                                {/* Footer / Attribution */}
                                <footer className="flex items-center gap-x-3">
                                    <Image
                                        className="size-9 rounded-full object-cover" // Slightly smaller avatar
                                        src={testimonial.avatarUrl}
                                        alt={`Avatar of ${testimonial.name}`}
                                        width={36} // Match size
                                        height={36} // Match size
                                    />
                                    <div>
                                        <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                                        <div className="text-xs text-neutral-400">{testimonial.title}</div>
                                    </div>
                                </footer>
                            </div>
                            {/* End Testimonial Card Content */}
                        </div>
                        // End Wrapper Div
                    ))}
                </div>
                {/* End Masonry Column Layout */}
            </div>
        </div>
    );
};

export default TestimonialComplexGrid;