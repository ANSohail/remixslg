
import ThankYou from "./pages/ThankYou";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
          <Route path="/thank-you" element={<ThankYou />} />

          {/* Common redirects for SEO-friendly URLs */}
          <Route path="/attorneys" element={<Navigate to="/who-we-are" replace />} />
          <Route path="/lawyers" element={<Navigate to="/who-we-are" replace />} />
          <Route path="/practice-areas" element={<Navigate to="/what-we-do" replace />} />
          <Route path="/services" element={<Navigate to="/what-we-do" replace />} />
          <Route path="/team" element={<Navigate to="/who-we-are" replace />} />
          <Route path="/about-us" element={<Navigate to="/who-we-are" replace />} />
          <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/index" element={<Navigate to="/" replace />} />

          {/* Service pages */}
          <Route path="/services/civil-commercial-litigation" element={<CivilCommercialLitigation />} />
          <Route path="/services/real-estate-law" element={<RealEstateLaw />} />
          <Route path="/services/corporate-law" element={<CorporateLaw />} />
          <Route path="/services/landlord-tenant-board" element={<LandlordTenantBoard />} />
          <Route path="/services/employment-law" element={<EmploymentLaw />} />
          <Route path="/services/immigration-judicial-reviews" element={<ImmigrationJudicialReviews />} />
          <Route path="/services/tort-negligence" element={<TortNegligence />} />
          <Route path="/services/family-law" element={<FamilyLaw />} />

          {/* Service redirects for alternative URLs */}
          <Route path="/civil-litigation" element={<Navigate to="/services/civil-commercial-litigation" replace />} />
          <Route path="/commercial-litigation" element={<Navigate to="/services/civil-commercial-litigation" replace />} />
          <Route path="/real-estate" element={<Navigate to="/services/real-estate-law" replace />} />
          <Route path="/corporate" element={<Navigate to="/services/corporate-law" replace />} />
          <Route path="/business-law" element={<Navigate to="/services/corporate-law" replace />} />
          <Route path="/employment" element={<Navigate to="/services/employment-law" replace />} />
          <Route path="/landlord-tenant" element={<Navigate to="/services/landlord-tenant-board" replace />} />
          <Route path="/immigration" element={<Navigate to="/services/immigration-judicial-reviews" replace />} />
          <Route path="/tort" element={<Navigate to="/services/tort-negligence" replace />} />
          <Route path="/negligence" element={<Navigate to="/services/tort-negligence" replace />} />
          <Route path="/personal-injury" element={<Navigate to="/services/tort-negligence" replace />} />
          <Route path="/family" element={<Navigate to="/services/family-law" replace />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer /> {/* ✅ Footer correctly placed here */}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
