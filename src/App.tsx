import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={() => <>HOME</>} />
        <Route path="/login" component={() => <>LOGIN</>} />
      </Switch>
    </Router>
  );
}

export default App;
