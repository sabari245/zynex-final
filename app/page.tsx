// app/page.tsx
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import StatsSection from "@/components/StatsSection";
import ApproachSection from "@/components/ApproachSection";
import ContactForm from "@/components/ContactForm"; // ContactForm includes its own title etc.

export default function HomePage() {
  return (
    <main id="content">
      <HeroSection />
      <ClientLogos />
      <CaseStudies />
      <Testimonials />
      <StatsSection />
      <ApproachSection />
      {/* The ContactForm component now includes the title and grid structure */}
      <div className="bg-neutral-900"> {/* Add the bg wrapper */}
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}