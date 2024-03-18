import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Layout } from "./components/Layouts/Layout";
import { Suspense, lazy } from "react";
import { ContentWrapper } from "./components/Layouts/ContentWrapper";
import { lazyLoad } from "./helper/lazy-load";

const Home = lazy(() => delay(1000).then(() => import("./pages/Home")));
const TeamTask = lazy(() => delay(1000).then(() => import("./pages/TeamTask")));

const FollowUp = lazyLoad('pages/FollowUp');
const Report = lazyLoad('pages/Report', 'Report');
// const FollowUp = lazy(() => delay(1000).then(() => import("./pages/FollowUp")));
// const Report = lazy(() => delay(1000).then(() => (import("./pages/Report").then((module) => ({ default: module.Report })))));

function App() {
  return (
    <Router>
      <Layout></Layout>
      <Switch>
        <ContentWrapper>
          <Suspense fallback={<>Loading...</>}>
            <Route path="/" component={() => <></>} />
            <Route path="/home" component={() => <Home />} />
            <Route path="/team-task" component={() => <TeamTask />} />
            <Route path="/follow-up" component={() => <FollowUp />} />
            <Route path="/report" component={() => <Report />} />
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
