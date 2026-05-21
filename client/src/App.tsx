import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import AnzeichenFremdgehen from "./pages/AnzeichenFremdgehen";
import FremdgehenBeweisen from "./pages/FremdgehenBeweisen";
import LuegendetekorMuenchen from "./pages/LuegendetekorMuenchen";
import PolygraphWien from "./pages/PolygraphWien";
import PolygraphZuerich from "./pages/PolygraphZuerich";
import InterneErmittlungen from "./pages/InterneErmittlungen";
import Treuetest from "./pages/Treuetest";
import Mitarbeiterueberpruefung from "./pages/Mitarbeiterueberpruefung";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/anzeichen-fremdgehen"} component={AnzeichenFremdgehen} />
      <Route path={"/fremdgehen-beweisen"} component={FremdgehenBeweisen} />
      <Route path={"/luegendetektor-muenchen"} component={LuegendetekorMuenchen} />
      <Route path={"/polygraph-wien"} component={PolygraphWien} />
      <Route path={"/polygraph-zuerich"} component={PolygraphZuerich} />
      <Route path={"/interne-ermittlungen"} component={InterneErmittlungen} />
      <Route path={"/treuetest"} component={Treuetest} />
      <Route path={"/mitarbeiterueberpruefung"} component={Mitarbeiterueberpruefung} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider
          defaultTheme="light"
          // switchable
        >
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
