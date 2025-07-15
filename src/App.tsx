
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import NotFound from "./pages/NotFound";

// Service pages
import CivilCommercialLitigation from "./pages/services/CivilCommercialLitigation";
import RealEstateLaw from "./pages/services/RealEstateLaw";
import CorporateLaw from "./pages/services/CorporateLaw";
import LandlordTenantBoard from "./pages/services/LandlordTenantBoard";
import EmploymentLaw from "./pages/services/EmploymentLaw";
import ImmigrationJudicialReviews from "./pages/services/ImmigrationJudicialReviews";
import TortNegligence from "./pages/services/TortNegligence";
import FamilyLaw from "./pages/services/FamilyLaw";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service pages */}
          <Route path="/services/civil-commercial-litigation" element={<CivilCommercialLitigation />} />
          <Route path="/services/real-estate-law" element={<RealEstateLaw />} />
          <Route path="/services/corporate-law" element={<CorporateLaw />} />
          <Route path="/services/landlord-tenant-board" element={<LandlordTenantBoard />} />
          <Route path="/services/employment-law" element={<EmploymentLaw />} />
          <Route path="/services/immigration-judicial-reviews" element={<ImmigrationJudicialReviews />} />
          <Route path="/services/tort-negligence" element={<TortNegligence />} />
          <Route path="/services/family-law" element={<FamilyLaw />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
