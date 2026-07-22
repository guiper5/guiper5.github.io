import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EngenhariaRegiao19 from "./pages/seo/EngenhariaRegiao19";
import EngenhariaSaoPaulo from "./pages/seo/EngenhariaSaoPaulo";
import EngenhariaBrasil from "./pages/seo/EngenhariaBrasil";
import ServicoRoute from "./pages/seo/ServicoRoute";
import SegmentoRoute from "./pages/seo/SegmentoRoute";
import DocumentacaoRoute from "./pages/seo/DocumentacaoRoute";
import Glossario from "./pages/seo/Glossario";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/engenharia-civil/regiao-19" element={<EngenhariaRegiao19 />} />
          <Route path="/engenharia-civil/sao-paulo" element={<EngenhariaSaoPaulo />} />
          <Route path="/engenharia-civil/brasil" element={<EngenhariaBrasil />} />
          <Route path="/engenharia-civil/servicos/:slug" element={<ServicoRoute />} />
          <Route path="/engenharia-civil/para/:slug" element={<SegmentoRoute />} />
          <Route path="/engenharia-civil/documentacao/:slug" element={<DocumentacaoRoute />} />
          <Route path="/engenharia-civil/glossario" element={<Glossario />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
