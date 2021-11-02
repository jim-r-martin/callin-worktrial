import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Episode from "./Episode";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>Home Page</div>
        </Route>
        <Route path="/episode/:slug">
          <Episode />
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  );
}
