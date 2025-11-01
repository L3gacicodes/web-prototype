import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import MediaReportSection from "@/components/MediaReportSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <AboutSection />
      <MediaReportSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
