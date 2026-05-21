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
import Sicherheitspruefung from "./pages/Sicherheitspruefung";
import ItSektor from "./pages/ItSektor";
import HauspersonalUeberpruefung from "./pages/HauspersonalUeberpruefung";
import Fahrerpruefung from "./pages/Fahrerpruefung";
import PolygraphOesterreich from "./pages/PolygraphOesterreich";
import PolygraphSchweiz from "./pages/PolygraphSchweiz";
import LuegendetekorBerlin from "./pages/LuegendetekorBerlin";
import LuegendetekorHamburg from "./pages/LuegendetekorHamburg";
import LuegendetekorFrankfurt from "./pages/LuegendetekorFrankfurt";
import Ratgeber from "./pages/Ratgeber";
import RatgeberGenauigkeit from "./pages/RatgeberGenauigkeit";
import RatgeberKosten from "./pages/RatgeberKosten";
import RatgeberLegal from "./pages/RatgeberLegal";
import RatgeberTreuetest from "./pages/RatgeberTreuetest";
import RatgeberPolygraphVsStresstest from "./pages/RatgeberPolygraphVsStresstest";
import RatgeberDauer from "./pages/RatgeberDauer";
import RatgeberUnternehmen from "./pages/RatgeberUnternehmen";
import RatgeberMitarbeiterdiebstahl from "./pages/RatgeberMitarbeiterdiebstahl";
import RatgeberAnzeichenFremdgehen from "./pages/RatgeberAnzeichenFremdgehen";
import RatgeberJugendliche from "./pages/RatgeberJugendliche";
import LuegendetekorDuesseldorf from "./pages/LuegendetekorDuesseldorf";
import LuegendetekorStuttgart from "./pages/LuegendetekorStuttgart";
import LuegendetekorKoeln from "./pages/LuegendetekorKoeln";
import LuegendetekorLeipzig from "./pages/LuegendetekorLeipzig";
import LuegendetekorDresden from "./pages/LuegendetekorDresden";
import AbsoluteVertraulichkeit from "./pages/AbsoluteVertraulichkeit";
import ErfahreneExperten from "./pages/ErfahreneExperten";
import ModerneAusruestung from "./pages/ModerneAusruestung";
import DoppeltePruefung from "./pages/DoppeltePruefung";


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
      <Route path={"/sicherheitspruefung"} component={Sicherheitspruefung} />
      <Route path={"/it-sektor"} component={ItSektor} />
      <Route path={"/hauspersonal-ueberpruefung"} component={HauspersonalUeberpruefung} />
      <Route path={"/fahrerpruefung"} component={Fahrerpruefung} />
      <Route path={"/polygraph-oesterreich"} component={PolygraphOesterreich} />
      <Route path={"/polygraph-schweiz"} component={PolygraphSchweiz} />
      <Route path={"/luegendetektor-berlin"} component={LuegendetekorBerlin} />
      <Route path={"/luegendetektor-hamburg"} component={LuegendetekorHamburg} />
      <Route path={"/luegendetektor-frankfurt"} component={LuegendetekorFrankfurt} />
      <Route path={"/ratgeber"} component={Ratgeber} />
      <Route path={"/ratgeber/luegendetektor-genauigkeit"} component={RatgeberGenauigkeit} />
      <Route path={"/ratgeber/kosten-polygraph"} component={RatgeberKosten} />
      <Route path={"/ratgeber/polygraph-legal-deutschland"} component={RatgeberLegal} />
      <Route path={"/ratgeber/treuetest-vorbereitung"} component={RatgeberTreuetest} />
      <Route path={"/ratgeber/polygraph-vs-stresstest"} component={RatgeberPolygraphVsStresstest} />
      <Route path={"/ratgeber/dauer-polygraph-test"} component={RatgeberDauer} />
      <Route path={"/ratgeber/polygraph-fuer-unternehmen"} component={RatgeberUnternehmen} />
      <Route path={"/ratgeber/mitarbeiterdiebstahl"} component={RatgeberMitarbeiterdiebstahl} />
      <Route path={"/ratgeber/anzeichen-fremdgehen"} component={RatgeberAnzeichenFremdgehen} />
      <Route path={"/ratgeber/polygraph-jugendliche"} component={RatgeberJugendliche} />
      <Route path={"/luegendetektor-duesseldorf"} component={LuegendetekorDuesseldorf} />
      <Route path={"/luegendetektor-stuttgart"} component={LuegendetekorStuttgart} />
      <Route path={"/luegendetektor-koeln"} component={LuegendetekorKoeln} />
      <Route path={"/luegendetektor-leipzig"} component={LuegendetekorLeipzig} />
      <Route path={"/luegendetektor-dresden"} component={LuegendetekorDresden} />
      <Route path={"/absolute-vertraulichkeit"} component={AbsoluteVertraulichkeit} />
      <Route path={"/erfahrene-experten"} component={ErfahreneExperten} />
      <Route path={"/moderne-ausruestung"} component={ModerneAusruestung} />
      <Route path={"/doppelte-pruefung"} component={DoppeltePruefung} />
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
