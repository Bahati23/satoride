import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { LanguageProvider } from "./lib/i18n";

import Index from "./pages/Index";
import RidePage from "./pages/RidePage";
import ReceiptsPage from "./pages/ReceiptsPage";
import WorkerPage from "./pages/WorkerPage";
import OperatorPage from "./pages/OperatorPage";
import UssdPage from "./pages/UssdPage";
import { NIP19Page } from "./pages/NIP19Page";
import NotFound from "./pages/NotFound";

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ride" element={<RidePage />} />
          <Route path="/receipts" element={<ReceiptsPage />} />
          <Route path="/worker" element={<WorkerPage />} />
          <Route path="/operator" element={<OperatorPage />} />
          <Route path="/ussd" element={<UssdPage />} />
          {/* NIP-19 route for npub1, note1, naddr1, nevent1, nprofile1 */}
          <Route path="/:nip19" element={<NIP19Page />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}
export default AppRouter;
