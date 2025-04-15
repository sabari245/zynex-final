// app/page.tsx
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import StatsSection from "@/components/StatsSection";
import ApproachSection from "@/components/ApproachSection";
import ContactForm from "@/components/ContactForm"; // ContactForm includes its own title etc.
import FAQAccordion from "@/components/FAQAccordion"; // Adjust import path if needed
import TestimonialsGrid from "@/components/TestimonialsGrid";
import ComparisonSection from "@/components/ComparisonSection";
import Projects from "@/components/Projects";
import TestimonialComplexGrid from "@/components/TestimonialComplexGrid";
import CaseStudySectionOne from "@/components/CaseStudySectionOne";
import CaseStudySectionTwo from "@/components/CaseStudySectionTwo";

// Define your FAQ data
const faqItems = [
  {
    id: 1,
    question: "What is Preline Agency?",
    answer:
      "Preline Agency is a creative hub specializing in transforming conceptual visions into tangible realities through design, artistry, and technological innovation. We focus on web design and development for agencies and studios.",
  },
  {
    id: 2,
    question: "How does the theme switching work?",
    answer:
      "The theme (light/dark/auto) is initially set based on your localStorage preference ('hs_theme') or your operating system's setting. An inline script applies the correct theme class (dark or light) to the HTML tag before the page renders to prevent flickering. You can add UI elements later to manually change the theme preference stored in localStorage.",
    defaultOpen: true,
  },
  {
    id: 3,
    question: "What technologies are used?",
    answer:
      "This template is built with Next.js (App Router), React, Tailwind CSS, and utilizes the Preline UI component library for interactive elements like accordions, dropdowns, and navigation collapse.",
  },
  {
    id: 4,
    question: "Is Preline UI required?",
    answer:
      "Yes, the interactive components like this accordion, the header dropdowns, and the mobile navigation toggle rely on the Preline UI JavaScript library (preline.js) to function correctly.",
  },
];

export default function HomePage() {
  return (
    <main id="content">
      <HeroSection />
      <ClientLogos />
      <CaseStudies />
      {/* <Projects /> */}
      <div className="bg-neutral-900 bg-linear-to-t from-black to-transparent">
        <ComparisonSection />
        <StatsSection />
        <TestimonialsGrid />
      </div>
      <CaseStudySectionOne />
      <CaseStudySectionTwo />

      <FAQAccordion />
      <TestimonialComplexGrid />

      <ApproachSection />
      {/* The ContactForm component now includes the title and grid structure */}
      <div className="bg-neutral-900">
        {" "}
        {/* Add the bg wrapper */}
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
