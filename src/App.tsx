import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LoadingScreen } from "@/components/LoadingScreen";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";

// Service Pages
import ReeferRepairs from "./pages/services/ReeferRepairs";
import WarrantyRepairs from "./pages/services/WarrantyRepairs";
import SpareParts from "./pages/services/SpareParts";
import PreTripInspection from "./pages/services/PreTripInspection";
import ReeferMonitoring from "./pages/services/ReeferMonitoring";
import ReeferSurveys from "./pages/services/ReeferSurveys";
import MaldivesServices from "./pages/services/MaldivesServices";
import ReeferRenting from "./pages/services/ReeferRenting";
import CargoSurveys from "./pages/services/CargoSurveys";
import VesselSurveys from "./pages/services/VesselSurveys";
import CargoLogistics from "./pages/services/CargoLogistics";
import VesselLogistics from "./pages/services/VesselLogistics";
import BondedWarehouse from "./pages/services/BondedWarehouse";
import FruitsVegetablesExports from "./pages/services/FruitsVegetablesExports";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <LoadingScreen isLoading={isLoading} />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <ScrollProgress />
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/reefer-repairs" element={<ReeferRepairs />} />
                  <Route path="/services/warranty-repairs" element={<WarrantyRepairs />} />
                  <Route path="/services/spare-parts" element={<SpareParts />} />
                  <Route path="/services/pti" element={<PreTripInspection />} />
                  <Route path="/services/monitoring" element={<ReeferMonitoring />} />
                  <Route path="/services/reefer-surveys" element={<ReeferSurveys />} />
                  <Route path="/services/maldives" element={<MaldivesServices />} />
                  <Route path="/services/reefer-renting" element={<ReeferRenting />} />
                  <Route path="/services/cargo-surveys" element={<CargoSurveys />} />
                  <Route path="/services/vessel-surveys" element={<VesselSurveys />} />
                  <Route path="/services/cargo-logistics" element={<CargoLogistics />} />
                  <Route path="/services/vessel-logistics" element={<VesselLogistics />} />
                  <Route path="/services/bonded-warehouse" element={<BondedWarehouse />} />
                  <Route path="/services/fruits-vegetables" element={<FruitsVegetablesExports />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/quote" element={<Quote />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <FloatingContact />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
