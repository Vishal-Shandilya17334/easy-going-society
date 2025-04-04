
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Courses from "./pages/Courses";
import Awards from "./pages/Awards";
import AdminResponsibilities from "./pages/AdminResponsibilities";
import JournalPublications from "./pages/JournalPublications";
import Books from "./pages/Books";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/admin-responsibilities" element={<AdminResponsibilities />} />
          <Route path="/journal-publications" element={<JournalPublications />} />
          <Route path="/books" element={<Books />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
