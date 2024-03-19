import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Layout } from "./components/Layouts/Layout";
import { Suspense, lazy } from "react";
import { ContentWrapper } from "./components/Layouts/ContentWrapper";
import { lazyLoad } from "./helper/lazy-load";

const Home = lazy(() => delay(1000).then(() => import("./pages/Home")));
const About = lazy(() => delay(1000).then(() => (import("./pages/About").then((module) => ({ default: module.About })))));
const CalculatePage = lazyLoad('pages/Calculate', 'Calculate');

function App() {
  return (
    <Router>
      <Layout></Layout>
      <Switch>
        <ContentWrapper>
          <Suspense fallback={<>Loading...</>}>
            <Route exact path="/" component={() => <Home />} />
            <Route path="/about" component={() => <About />} />
            <Route path="/calculate" component={() => <CalculatePage />} />
          </Suspense>
        </ContentWrapper>
      </Switch>
    </Router>
  );
}

export default App;

export const delay = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
