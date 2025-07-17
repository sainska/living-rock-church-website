import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Welcome from "@/components/Welcome";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Welcome />
      <Locations />
      <Footer />
    </div>
  );
};

export default Index;
