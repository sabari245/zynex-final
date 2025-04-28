"use client";

import { motion } from "motion/react";
import React from "react";
import { ArrowRight } from "lucide-react";

const HeroAnimated = () => {
    return (
        <>
            <div className="mt-10 flex justify-center">
                <button
                    className="group bg-[#f5f500] text-black font-medium px-8 py-4 rounded-full text-lg transition-all duration-300 ease-in-out inline-flex items-center gap-3 shadow-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
                    style={{
                        boxShadow: "0 6px 12px rgba(245, 245, 0, 0.5)",
                    }}
                >
                    Book Your Consultation Call
                    <motion.div
                        className="arrow-icon overflow-hidden relative w-7 h-7 flex items-center justify-center"
                        animate={{
                            x: [0, 5, -2, 0],
                            scale: [1, 1.05, 0.98, 1],
                            opacity: [1, 1, 0.8, 1],
                        }}
                        transition={{
                            duration: 0.9,
                            repeat: Infinity,
                            repeatDelay: 0.6,
                            ease: "easeInOut",
                        }}
                    >
                        <ArrowRight
                            size={22}
                            className="absolute transition-transform duration-300"
                        />
                    </motion.div>
                </button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6">
                <motion.div
                    className="flex -space-x-3"
                    animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 1.0,
                        repeat: Infinity,
                        repeatDelay: 1.2,
                        ease: "easeInOut",
                    }}
                >
                    {[
                        "/assets/avatar1.png",
                        "/assets/avatar2.png",
                        "/assets/avatar3.png",
                        "/assets/avatar4.png",
                    ].map((src, index) => (
                        <img
                            key={src}
                            src={src}
                            alt={`user${index + 1}`}
                            className="avatar w-12 h-12 rounded-full border-2 border-white shadow-md"
                        />
                    ))}
                </motion.div>
                <div className="w-px h-12 bg-gray-500 opacity-50"></div>
                <div className="text-left">
                    <div className="flex items-center gap-1">
                        <span className="text-green-500 text-xl">★★★★★</span>
                        <span className="font-semibold text-white">Trustpilot</span>
                    </div>
                    <p className="text-sm text-gray-400">
                        Rated Over <span className="font-semibold text-white">15.7k</span> Reviews
                    </p>
                </div>
            </div>
        </>
    );
};

export default HeroAnimated;
