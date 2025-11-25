import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import BlogPraiseOverSacrifice from "./pages/BlogPraiseOverSacrifice";
import BlogMusicTransforms from "./pages/BlogMusicTransforms";
import BlogFaithTeaching from "./pages/BlogFaithTeaching";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/blog/praise-over-sacrifice"} component={BlogPraiseOverSacrifice} />
      <Route path={"/blog/music-transforms-lives"} component={BlogMusicTransforms} />
      <Route path={"/blog/faith-through-teaching"} component={BlogFaithTeaching} />
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
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
